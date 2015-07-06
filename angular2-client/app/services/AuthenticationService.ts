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

    getExpireTimestamp(token: string): number {
        let tokenArr = token.split(".");
        console.log("middle section of token is " + tokenArr[1]);
        let decodedMeta = this.base64Decode(tokenArr[1]);
        console.log("decoded middle section of token is " + decodedMeta);
        let jsonMeta = JSON.parse(decodedMeta);
        console.log("jsonMeta of middle section of token is " + jsonMeta);
        return jsonMeta.exp * 1000;
    }

    /**
    * Call REST api to request a JWT token
    * @return Promise object
    */
    getNewToken(username: String, password: String): Promise<any> {
        return $http.get("http://localhost:8080/api/newToken?username=" + username + "&password=" + password, null);
    }

    private base64Decode(s: string): string {
        var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
        var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for(i=0;i<64;i++){e[A.charAt(i)]=i;}
        for(x=0;x<L;x++){
            c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
            while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
        }
        return r;
    }
}
