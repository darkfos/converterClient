import axios from "axios";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../store/authSlice";


class AuthAPIService {

    static async loginUser(userData) {
        let req = await axios.post("http://localhost:7788/api/v1/auth/login", userData);
        if (req.status === 200) {
            return req.data
        } else return false
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
        let req = await axios.post("http://localhost:7788/api/v1/auth/update_token", {}, {
            headers: {
                "refresh-token": token
            }
        })

        if (req.status === 200) {
            return true
        } return false
    }
}


export default AuthAPIService;