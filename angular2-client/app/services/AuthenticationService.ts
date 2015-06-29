
import {$http} from "services/http";

export const AuthenticationService = {

    /**
    * Call REST api to request a JWT token
    * @return Promise object
    */
    getNewToken(username: String, password: String): Promise<any> {
        return $http.get("http://localhost:8080/api/newToken?username=" + username + "&password=" + password, null);
    },

    /**
    * TEST
    */
    getProtectedData(token: String): Promise<any> {
        return $http.get("http://localhost:8080/test/tasks", token);
    }

}
