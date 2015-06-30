import {$http} from "services/http";

export class AuthenticationService {

    /**
    * Call REST api to request a JWT token
    * @return Promise object
    */
    getNewToken(username: String, password: String): Promise<any> {
        return $http.get("http://localhost:8080/api/newToken?username=" + username + "&password=" + password, null);
    }
}
