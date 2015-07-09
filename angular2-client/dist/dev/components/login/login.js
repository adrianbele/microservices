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
            appInjector: [AuthenticationService_1.AuthenticationService]
        }),
        angular2_1.View({
            templateUrl: './components/login/login.html?v=0.4.0',
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
    ], Login);
    return Login;
})();
exports.Login = Login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW4iLCJMb2dpbi5jb25zdHJ1Y3RvciIsIkxvZ2luLmxvZ2luIiwiTG9naW4uY2hlY2tMb2dnZWRJblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCxzQ0FBb0Msc0NBQXNDLENBQUMsQ0FBQTtBQUMzRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQWNJQSxlQUFZQSxxQkFBNENBO1FBQ3BEQyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EscUJBQXFCQSxDQUFDQTtRQUNwRkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsMkJBQVlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBQy9DQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREQscUJBQUtBLEdBQUxBLFVBQU1BLEtBQUtBLEVBQUVBLFFBQWdCQSxFQUFFQSxRQUFnQkE7UUFBL0NFLGlCQXdCQ0E7UUF2QkdBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBNkJBLEdBQUdBLFFBQVFBLEdBQUdBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBO1FBQzVFQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQUlBO1lBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0NBLEtBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZDQSxJQUFJQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxnQ0FBZ0NBLEdBQUdBLElBQUlBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUNwRUEsS0FBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDN0RBLFdBQVdBLENBQ1BBLFVBQUNBLENBQUNBLElBQUtBLE9BQUFBLEtBQUlBLENBQUNBLG1CQUFtQkEsRUFBRUEsRUFBMUJBLENBQTBCQSxFQUNqQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FDWkEsQ0FBQ0E7WUFDTkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLG9DQUFvQ0EsQ0FBQ0E7Z0JBQ3BEQSxLQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNwQ0EsS0FBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNsRUEsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0E7YUFDREEsS0FBS0EsQ0FBQ0EsVUFBQ0EsS0FBS0E7WUFDVEEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDN0JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQzNCQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1FBQ2xFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVPRixtQ0FBbUJBLEdBQTNCQTtRQUNJRyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQzNDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1lBQ3BDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQzlEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxzQ0FBc0NBLENBQUNBO1FBQzFEQSxDQUFDQTtJQUNMQSxDQUFDQTtJQXBETEg7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxXQUFXQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLENBQUNBO1NBQ3ZDQSxDQUFDQTtRQUVEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSxnREFBZ0RBO1NBQzlEQSxDQUFDQTs7Y0E4Q0RBO0lBQURBLFlBQUNBO0FBQURBLENBckRBLEFBcURDQSxJQUFBO0FBNUNZLGFBQUssUUE0Q2pCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyfSBmcm9tIFwidXRpbHMvZXZlbnRidXMvRXZlbnRNYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTMnLFxuICAgIGFwcEluamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlXVxufSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luIHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlKSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZSA9IGF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTsgLy8gc2luZ2xldG9uLCBkbyBub3QgdXNlIERJXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbG9naW4oZXZlbnQsIHVzZXJuYW1lOiBTdHJpbmcsIHBhc3N3b3JkOiBTdHJpbmcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBuYXRpdmUgcGFnZSByZWZyZXNoXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBhdHRlbXB0cyB0byBsb2cgaW4gYXMgXCIgKyB1c2VybmFtZSArIFwiIHdpdGggXCIgKyBwYXNzd29yZCk7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldE5ld1Rva2VuKHVzZXJuYW1lLCBwYXNzd29yZCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCAmJiBkYXRhLnNwbGl0KFwiLlwiKS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dJbihkYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJlcyA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldEV4cGlyZVRpbWVzdGFtcChkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIkxvZ2dlZCBpbiB0byB0aGUgc3lzdGVtIHVudGlsIFwiICsgbmV3IERhdGUoZXhwaXJlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICAgICAgICAgIChfKSA9PiB0aGlzLmNoZWNrTG9nZ2VkSW5TdGF0dXMoKSxcbiAgICAgICAgICAgICAgICAgICAgMTAwMCAqIDYwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJzZXJ2ZXIgZGlkIG5vdCBzZW5kIGNvcnJlY3QgdG9rZW4uXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nT3V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tMb2dnZWRJblN0YXR1cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJZb3VyIHNlc3Npb24gZXhwaXJlZC4gUGxlYXNlIGxvZyBpbi5cIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==