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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW4iLCJMb2dpbi5jb25zdHJ1Y3RvciIsIkxvZ2luLmxvZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2xELHNDQUFvQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzNFLDZCQUEyQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRXpEO0lBY0lBLGVBQVlBLHFCQUE0Q0E7UUFDcERDLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxHQUFHQSxxQkFBcUJBLENBQUNBO1FBQ3BGQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSwyQkFBWUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFDL0NBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO0lBQ3hCQSxDQUFDQTtJQUVERCxxQkFBS0EsR0FBTEEsVUFBTUEsS0FBS0EsRUFBRUEsUUFBZ0JBLEVBQUVBLFFBQWdCQTtRQUEvQ0UsaUJBb0JDQTtRQW5CR0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDZCQUE2QkEsR0FBR0EsUUFBUUEsR0FBR0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDNUVBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBSUE7WUFDakVBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLElBQUlBLElBQUlBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQ0EsS0FBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDdkNBLElBQUlBLE9BQU9BLEdBQUdBLEtBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbEVBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLGdDQUFnQ0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BFQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1lBQ2pFQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0Esb0NBQW9DQSxDQUFDQTtnQkFDcERBLEtBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBQ3BDQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2xFQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQTthQUNEQSxLQUFLQSxDQUFDQSxVQUFDQSxLQUFLQTtZQUNUQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUM3QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbEVBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBeENMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7WUFDdkJBLFdBQVdBLEVBQUVBLENBQUNBLDZDQUFxQkEsQ0FBQ0E7U0FDdkNBLENBQUNBO1FBRURBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLGdEQUFnREE7U0FDOURBLENBQUNBOztjQWtDREE7SUFBREEsWUFBQ0E7QUFBREEsQ0F6Q0EsQUF5Q0NBLElBQUE7QUFoQ1ksYUFBSyxRQWdDakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHtFdmVudE1hbmFnZXJ9IGZyb20gXCJ1dGlscy9ldmVudGJ1cy9FdmVudE1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMycsXG4gICAgYXBwSW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UpIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlID0gYXV0aGVudGljYXRpb25TZXJ2aWNlO1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpOyAvLyBzaW5nbGV0b24sIGRvIG5vdCB1c2UgRElcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBsb2dpbihldmVudCwgdXNlcm5hbWU6IFN0cmluZywgcGFzc3dvcmQ6IFN0cmluZykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IG5hdGl2ZSBwYWdlIHJlZnJlc2hcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGF0dGVtcHRzIHRvIGxvZyBpbiBhcyBcIiArIHVzZXJuYW1lICsgXCIgd2l0aCBcIiArIHBhc3N3b3JkKTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0TmV3VG9rZW4odXNlcm5hbWUsIHBhc3N3b3JkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsICYmIGRhdGEuc3BsaXQoXCIuXCIpLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ0luKGRhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBleHBpcmVzID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0RXhwaXJlVGltZXN0YW1wKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiTG9nZ2VkIGluIHRvIHRoZSBzeXN0ZW0gdW50aWwgXCIgKyBuZXcgRGF0ZShleHBpcmVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJzZXJ2ZXIgZGlkIG5vdCBzZW5kIGNvcnJlY3QgdG9rZW4uXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nT3V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==