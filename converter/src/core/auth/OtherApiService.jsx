import axios from "axios";


class OtherAPIService {
    
    static async getProfileData(token) {
        let req = await axios.get("http://localhost:7788/api/v1/user/information_about_me", {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        if (req.status === 200) {
            return req.data
        }
        return false
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
            return false
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
            return false
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
            return []
        }
        return null
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
            return false
        }
    }
}


export default OtherAPIService;