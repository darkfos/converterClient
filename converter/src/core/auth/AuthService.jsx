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

    static async updateToken(token, disp) {
        let req = await axios.post("http://localhost:7788/api/v1/auth/update_token", {}, {
            headers: {
                "refresh-token": token
            }
        })

        if (req.status === 200) {
            disp(setAccessToken(req.data["access_token"]));
            document.cookie.split(" ").map((cookie) => {
                if (cookie.includes("access_token")) {
                    document.cookie = `access_token=${req.data["access_token"]}`;
                } else {
                    document.cookie = cookie;
                }
            })
            return req.data;
        } return false
    }
}


export default AuthAPIService;