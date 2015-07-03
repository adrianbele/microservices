import {$http} from "services/http";

export class AuthenticationService {

    loggedIn: boolean;

    constructor() {
        if(localStorage.getItem('jwt')) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
        console.log("AuthenticationService constructed with loggedIn [" + this.loggedIn + "] based on localStorage");
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    logIn(token: any) {
        console.log("AuthenticationService logIn (set jwt in localStorage and this.loggedIn as true)");
        localStorage.setItem("jwt", token);
        this.loggedIn = true;
    }

    logOut() {
        console.log("AuthenticationService logOut (remove jwt from localStorage)");
        localStorage.removeItem('jwt');
        this.loggedIn = false;
    }

    /**
    * Call REST api to request a JWT token
    * @return Promise object
    */
    getNewToken(username: String, password: String): Promise<any> {
        return $http.get("http://localhost:8080/api/newToken?username=" + username + "&password=" + password, null);
    }
}
