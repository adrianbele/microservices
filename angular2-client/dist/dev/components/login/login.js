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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW4iLCJMb2dpbi5jb25zdHJ1Y3RvciIsIkxvZ2luLmxvZ2luIiwiTG9naW4uY2hlY2tMb2dnZWRJblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCxzQ0FBb0Msc0NBQXNDLENBQUMsQ0FBQTtBQUMzRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQWFJQSxlQUFtQkEscUJBQTRDQTtRQUE1Q0MsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFDM0RBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLDJCQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUMvQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRURELHFCQUFLQSxHQUFMQSxVQUFNQSxLQUFLQSxFQUFFQSxRQUFnQkEsRUFBRUEsUUFBZ0JBO1FBQS9DRSxpQkF3QkNBO1FBdkJHQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsNkJBQTZCQSxHQUFHQSxRQUFRQSxHQUFHQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUM1RUEsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFJQTtZQUNqRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9DQSxLQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN2Q0EsSUFBSUEsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNsRUEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsZ0NBQWdDQSxHQUFHQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDcEVBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxXQUFXQSxDQUNQQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLEVBQTFCQSxDQUEwQkEsRUFDakNBLElBQUlBLEdBQUdBLEVBQUVBLENBQ1pBLENBQUNBO1lBQ05BLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxvQ0FBb0NBLENBQUNBO2dCQUNwREEsS0FBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDcENBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDbEVBLENBQUNBO1FBQ0xBLENBQUNBLENBQUNBO2FBQ0RBLEtBQUtBLENBQUNBLFVBQUNBLEtBQUtBO1lBQ1RBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBO1lBQzdCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUMzQkEsS0FBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNsRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFT0YsbUNBQW1CQSxHQUEzQkE7UUFDSUcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQ0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtZQUNwQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUM5REEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0Esc0NBQXNDQSxDQUFDQTtRQUMxREEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFsRExIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsWUFBWUEsRUFBRUEsQ0FBQ0EsNkNBQXFCQSxDQUFDQTtTQUN4Q0EsQ0FBQ0E7UUFFREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsZ0RBQWdEQTtTQUM5REEsQ0FBQ0E7O2NBNENEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQW5EQSxJQW1EQztBQTFDWSxhQUFLLFFBMENqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQge0V2ZW50TWFuYWdlcn0gZnJvbSBcInV0aWxzL2V2ZW50YnVzL0V2ZW50TWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0zJyxcbiAgICB2aWV3SW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpOyAvLyBzaW5nbGV0b24sIGRvIG5vdCB1c2UgRElcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsb2dpbihldmVudCwgdXNlcm5hbWU6IFN0cmluZywgcGFzc3dvcmQ6IFN0cmluZykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IG5hdGl2ZSBwYWdlIHJlZnJlc2hcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGF0dGVtcHRzIHRvIGxvZyBpbiBhcyBcIiArIHVzZXJuYW1lICsgXCIgd2l0aCBcIiArIHBhc3N3b3JkKTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0TmV3VG9rZW4odXNlcm5hbWUsIHBhc3N3b3JkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsICYmIGRhdGEuc3BsaXQoXCIuXCIpLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ0luKGRhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBleHBpcmVzID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0RXhwaXJlVGltZXN0YW1wKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTG9nZ2VkIGluIHRvIHRoZSBzeXN0ZW0gdW50aWwgXCIgKyBuZXcgRGF0ZShleHBpcmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgICAgICAgKF8pID0+IHRoaXMuY2hlY2tMb2dnZWRJblN0YXR1cygpLFxuICAgICAgICAgICAgICAgICAgICAxMDAwICogNjBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcInNlcnZlciBkaWQgbm90IHNlbmQgY29ycmVjdCB0b2tlbi5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dPdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0xvZ2dlZEluU3RhdHVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nT3V0KCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIllvdXIgc2Vzc2lvbiBleHBpcmVkLiBQbGVhc2UgbG9nIGluLlwiO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9