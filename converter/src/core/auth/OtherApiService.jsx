import axios from "axios";
import AuthAPIService from "./AuthService";


class OtherAPIService {
    
    static async getProfileData(token) {

        let req = await axios.get("http://localhost:7788/api/v1/user/information_about_me", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (req.status === 200) {
            return req.data
        };

        await AuthAPIService.updateToken(token);
        await OtherAPIService.getProfileData(token);
    }

    static async setHistory(token, text) {
        try {
            let date = new Date();
            let req = await axios.post("http://localhost:7788/api/v1/history/create_history", {
                "name_operation": text,
                "date_operation": `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

            if (req.status === 200) {
                return true
            }
        } catch {
            await AuthAPIService.updateToken(token);
            await OtherAPIService.setHistory(token, text);
        }
    }

    static async updateUserAvatar(token, new_awatar) {
        try {
            let req = await axios.patch("http://localhost:7788/api/v1/user/update_user_avatar", new_awatar, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            if (req.status === 204) {
                return true
            }
        } catch {
            await AuthAPIService.updateToken(token);
            await OtherAPIService.updateUserAvatar(token, new_awatar);
        }
    }

    static async getHistory(token) {
        try {
            let req = await axios.get("http://localhost:7788/api/v1/history/get_all_user_history", {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

            if (req.status === 200) {
                return req.data
            }
        } catch {
            await AuthAPIService.updateToken(token);
            await OtherAPIService.getHistory(token);
            return []
        }
    }

    static async getProfileFoto(token) {
        try {
            let req = await fetch("http://localhost:7788/api/v1/user/get_profile_image", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + token
                }
            });
    
            if (req.ok) {
                let data = await req.json();
                return data
            }
        } catch {
            await AuthAPIService.updateToken(token);
            await OtherAPIService.getProfileData(token);
        }
    }

    static async compressUserFile(token, file) {
        try {
            let req = await axios.post("http://localhost:7788/api/v1/file/compression_file", file, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "multipart/form-data"
                },
                responseType: "blob"
            })
                        
            if (req.status ===  201 || req.status === 200) {
                return req;
            } else {
                throw Error;
            }
        } catch {
            await AuthAPIService.updateToken(token);
            await OtherAPIService(token, file);
        }
    }
}


export default OtherAPIService;