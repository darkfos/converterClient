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

    static async getProfileFoto() {
        return null
    }
}


export default OtherAPIService;