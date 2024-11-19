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

    static async setHistory() {
        return null
    }

    static async getHistory() {
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