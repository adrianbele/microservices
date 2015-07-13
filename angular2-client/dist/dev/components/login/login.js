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
                setInterval(function (_) { return _this.checkLoggedInStatus(); }, 1000 * 60 * 5);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW4iLCJMb2dpbi5jb25zdHJ1Y3RvciIsIkxvZ2luLmxvZ2luIiwiTG9naW4uY2hlY2tMb2dnZWRJblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCxzQ0FBb0Msc0NBQXNDLENBQUMsQ0FBQTtBQUMzRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQWFJQSxlQUFtQkEscUJBQTRDQTtRQUE1Q0MsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFDM0RBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLDJCQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUMvQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRURELHFCQUFLQSxHQUFMQSxVQUFNQSxLQUFLQSxFQUFFQSxRQUFnQkEsRUFBRUEsUUFBZ0JBO1FBQS9DRSxpQkF3QkNBO1FBdkJHQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsNkJBQTZCQSxHQUFHQSxRQUFRQSxHQUFHQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUM1RUEsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFJQTtZQUNqRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9DQSxLQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN2Q0EsSUFBSUEsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNsRUEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsZ0NBQWdDQSxHQUFHQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDcEVBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxXQUFXQSxDQUNQQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLEVBQTFCQSxDQUEwQkEsRUFDakNBLElBQUlBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQ2hCQSxDQUFDQTtZQUNOQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0Esb0NBQW9DQSxDQUFDQTtnQkFDcERBLEtBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBQ3BDQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2xFQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQTthQUNEQSxLQUFLQSxDQUFDQSxVQUFDQSxLQUFLQTtZQUNUQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUM3QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbEVBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRU9GLG1DQUFtQkEsR0FBM0JBO1FBQ0lHLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0NBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7WUFDcENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDOURBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLHNDQUFzQ0EsQ0FBQ0E7UUFDMURBLENBQUNBO0lBQ0xBLENBQUNBO0lBbERMSDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7WUFDdkJBLFlBQVlBLEVBQUVBLENBQUNBLDZDQUFxQkEsQ0FBQ0E7U0FDeENBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLGdEQUFnREE7U0FDOURBLENBQUNBOztjQTRDREE7SUFBREEsWUFBQ0E7QUFBREEsQ0FuREEsSUFtREM7QUExQ1ksYUFBSyxRQTBDakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHtFdmVudE1hbmFnZXJ9IGZyb20gXCJ1dGlscy9ldmVudGJ1cy9FdmVudE1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMycsXG4gICAgdmlld0luamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlXVxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luIHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTsgLy8gc2luZ2xldG9uLCBkbyBub3QgdXNlIERJXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbG9naW4oZXZlbnQsIHVzZXJuYW1lOiBTdHJpbmcsIHBhc3N3b3JkOiBTdHJpbmcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBuYXRpdmUgcGFnZSByZWZyZXNoXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBhdHRlbXB0cyB0byBsb2cgaW4gYXMgXCIgKyB1c2VybmFtZSArIFwiIHdpdGggXCIgKyBwYXNzd29yZCk7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldE5ld1Rva2VuKHVzZXJuYW1lLCBwYXNzd29yZCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCAmJiBkYXRhLnNwbGl0KFwiLlwiKS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dJbihkYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJlcyA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEV4cGlyZVRpbWVzdGFtcChkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkxvZ2dlZCBpbiB0byB0aGUgc3lzdGVtIHVudGlsIFwiICsgbmV3IERhdGUoZXhwaXJlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAgICAgICAgIChfKSA9PiB0aGlzLmNoZWNrTG9nZ2VkSW5TdGF0dXMoKSxcbiAgICAgICAgICAgICAgICAgICAgMTAwMCAqIDYwICogNVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwic2VydmVyIGRpZCBub3Qgc2VuZCBjb3JyZWN0IHRva2VuLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrTG9nZ2VkSW5TdGF0dXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dPdXQoKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiWW91ciBzZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4uXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=