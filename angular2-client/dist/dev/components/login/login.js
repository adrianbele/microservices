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
var angular2_1 = require('angular2/angular2');
var AuthenticationService_1 = require('../../services/AuthenticationService');
var EventManager_1 = require("utils/eventbus/EventManager");
var Login = (function () {
    function Login(authenticationService) {
        if (!this.authenticationService)
            this.authenticationService = authenticationService;
        this.eventManager = EventManager_1.EventManager.getInstance();
        this.message = null;
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        console.log("user attempts to log in as " + username + " with " + password);
        this.authenticationService.getNewToken(username, password).then(function (data) {
            if (data != null && data.split(".").length === 3) {
                _this.authenticationService.logIn(data);
                var expires = _this.authenticationService.getExpireTimestamp(data);
                _this.message = "Logged in to the system until " + new Date(expires);
                _this.eventManager.publish("authenticationStateChange", true);
                setInterval(function (_) { return _this.checkLoggedInStatus(); }, 1000 * 60);
            }
            else {
                _this.message = "server did not send correct token.";
                _this.authenticationService.logOut();
                _this.eventManager.publish("authenticationStateChange", false);
            }
        })
            .catch(function (error) {
            _this.message = error.message;
            console.log(error.message);
            _this.eventManager.publish("authenticationStateChange", false);
        });
    };
    Login.prototype.checkLoggedInStatus = function () {
        if (!this.authenticationService.isLoggedIn()) {
            this.authenticationService.logOut();
            this.eventManager.publish("authenticationStateChange", false);
            this.message = "Your session expired. Please log in.";
        }
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'component-3',
            viewInjector: [AuthenticationService_1.AuthenticationService]
        }),
        angular2_1.View({
            templateUrl: './components/login/login.html?v=0.6.1',
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
    ], Login);
    return Login;
})();
exports.Login = Login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW4iLCJMb2dpbi5jb25zdHJ1Y3RvciIsIkxvZ2luLmxvZ2luIiwiTG9naW4uY2hlY2tMb2dnZWRJblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCxzQ0FBb0Msc0NBQXNDLENBQUMsQ0FBQTtBQUMzRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQWNJQSxlQUFZQSxxQkFBNENBO1FBQ3BEQyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EscUJBQXFCQSxDQUFDQTtRQUNwRkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsMkJBQVlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQy9DQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREQscUJBQUtBLEdBQUxBLFVBQU1BLEtBQUtBLEVBQUVBLFFBQWdCQSxFQUFFQSxRQUFnQkE7UUFBL0NFLGlCQXdCQ0E7UUF2QkdBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBNkJBLEdBQUdBLFFBQVFBLEdBQUdBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBO1FBQzVFQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQUlBO1lBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0NBLEtBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZDQSxJQUFJQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQ0FBZ0NBLEdBQUdBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUNwRUEsS0FBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDN0RBLFdBQVdBLENBQ1BBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLEtBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsRUFBMUJBLENBQTBCQSxFQUNqQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FDWkEsQ0FBQ0E7WUFDTkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLG9DQUFvQ0EsQ0FBQ0E7Z0JBQ3BEQSxLQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNwQ0EsS0FBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNsRUEsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0E7YUFDREEsS0FBS0EsQ0FBQ0EsVUFBQ0EsS0FBS0E7WUFDVEEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDN0JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQzNCQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2xFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVPRixtQ0FBbUJBLEdBQTNCQTtRQUNJRyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQzNDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ3BDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQzlEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxzQ0FBc0NBLENBQUNBO1FBQzFEQSxDQUFDQTtJQUNMQSxDQUFDQTtJQXBETEg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxZQUFZQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLENBQUNBO1NBQ3hDQSxDQUFDQTtRQUVEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSxnREFBZ0RBO1NBQzlEQSxDQUFDQTs7Y0E4Q0RBO0lBQURBLFlBQUNBO0FBQURBLENBckRBLElBcURDO0FBNUNZLGFBQUssUUE0Q2pCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyfSBmcm9tIFwidXRpbHMvZXZlbnRidXMvRXZlbnRNYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTMnLFxuICAgIHZpZXdJbmplY3RvcjogW0F1dGhlbnRpY2F0aW9uU2VydmljZV1cbn0pXG5cbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uaHRtbD92PTwlPSBWRVJTSU9OICU+Jyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlO1xuICAgIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZSkgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UgPSBhdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7IC8vIHNpbmdsZXRvbiwgZG8gbm90IHVzZSBESVxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIGxvZ2luKGV2ZW50LCB1c2VybmFtZTogU3RyaW5nLCBwYXNzd29yZDogU3RyaW5nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgbmF0aXZlIHBhZ2UgcmVmcmVzaFxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgYXR0ZW1wdHMgdG8gbG9nIGluIGFzIFwiICsgdXNlcm5hbWUgKyBcIiB3aXRoIFwiICsgcGFzc3dvcmQpO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXROZXdUb2tlbih1c2VybmFtZSwgcGFzc3dvcmQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwgJiYgZGF0YS5zcGxpdChcIi5cIikubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nSW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGV4cGlyZXMgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRFeHBpcmVUaW1lc3RhbXAoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJMb2dnZWQgaW4gdG8gdGhlIHN5c3RlbSB1bnRpbCBcIiArIG5ldyBEYXRlKGV4cGlyZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHNldEludGVydmFsKFxuICAgICAgICAgICAgICAgICAgICAoXykgPT4gdGhpcy5jaGVja0xvZ2dlZEluU3RhdHVzKCksXG4gICAgICAgICAgICAgICAgICAgIDEwMDAgKiA2MFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwic2VydmVyIGRpZCBub3Qgc2VuZCBjb3JyZWN0IHRva2VuLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTG9nZ2VkSW5TdGF0dXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dPdXQoKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiWW91ciBzZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4uXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=