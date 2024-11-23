import axios from "axios";
import { setAccessToken } from "../../store/authSlice";


class AuthAPIService {

    static async loginUser(userData) {
        try {
            let req = await axios.post("http://localhost:7788/api/v1/auth/login", userData);
            if (req.status === 200) {
                return req.data
            } else {
                return false
            }
        } catch {
            return false
        }
    }

    static async registrationUser(userData) {
        let req = await axios.post("http://localhost:7788/api/v1/auth/register", userData, {});
        if (req.status === 204) {
            return true
        } else {
            return false
        }
    }

    static async updateToken(token) {
        try {
            let req = await axios.post("http://localhost:7788/api/v1/auth/update_token", {}, {
                headers: {
                    "refresh-token": token
                }
            })
            
            if (req.status === 200 || req.status === 201) {
                document.cookie.split(" ").map((cookie) => {
    
                    // Очистка
                    document.cookie = "access_token=; Max-Age=-1;"; // Access Token
                    document.cookie = "refresh_token=; Max-Age=-1;"; // Refresh Token
    
                    document.cookie = "access_token="+req.data["access_token"]+"; SameSite=None; Secure; path=/";
                    document.cookie = "refresh_token="+token + "; SameSite=None; Secure; path=/";
                })
                return req.data;
            } return false
        } catch {
            return false
        }
    }
}


export default AuthAPIService;