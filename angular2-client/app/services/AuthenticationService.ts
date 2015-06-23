
import {$http} from "services/http";

export const AuthenticationService = {

    /**
    * Call REST api to request a JWT token
    * @return Promise object
    */
    getNewToken(username: String, password: String): Promise<any> {
        return $http.post("/api/newToken", {"username": username, "password": password});
    }
}
