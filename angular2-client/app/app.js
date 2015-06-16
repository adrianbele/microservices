/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TypeScript
var angular2_1 = require('angular2/angular2');
var LoginForm = (function () {
    function LoginForm() {
        this.username = "";
        this.password = "";
    }
    LoginForm.prototype.login = function (username, password) {
        this.username = username;
        this.password = password;
        console.log("user was logged in as " + username + " with " + password);
        // TODO use service that will ask user to logon
        if (username === "Tjerk") {
        }
    };
    LoginForm = __decorate([
        angular2_1.Component({ selector: 'microservices-login-form' }),
        angular2_1.View({ templateUrl: "login.html" }), 
        __metadata('design:paramtypes', [])
    ], LoginForm);
    return LoginForm;
})();
angular2_1.bootstrap(LoginForm);
