import axios from "axios";


class AuthAPIService {

    static async loginUser() {
        return null
    }

    static async registrationUser(userData) {
        let req = await axios.post("http://localhost:7788/api/v1/auth/register", userData, {});
        if (req.status === 204) {
            return true
        } else {
            return false
        }
    }

    static async updateToken() {
        return null
    }
}


export default AuthAPIService;