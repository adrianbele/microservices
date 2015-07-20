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
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        console.log("user attempts to log in as " + username + " with " + password);
        this.authenticationService.getNewToken(username, password).then(function (data) {
            if (data != null && data.split(".").length === 3) {
                _this.authenticationService.logIn(data);
                var expires = _this.authenticationService.getExpireTimestamp(data);
                _this.eventManager.publish("authenticationStateChange", [true, "Logged in to the system until " + new Date(expires)]);
                setInterval(function (_) { return _this.checkLoggedInStatus(); }, 1000 * 60 * 5);
            }
            else {
                _this.authenticationService.logOut();
                _this.eventManager.publish("authenticationStateChange", [false, "server did not send correct token"]);
            }
        })
            .catch(function (error) {
            console.log(error.message);
            _this.eventManager.publish("authenticationStateChange", [false, error.message]);
        });
    };
    Login.prototype.checkLoggedInStatus = function () {
        if (!this.authenticationService.isLoggedIn()) {
            this.authenticationService.logOut();
            this.eventManager.publish("authenticationStateChange", [false, "Your session expired. Please log in"]);
        }
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'component-3',
            viewInjector: [AuthenticationService_1.AuthenticationService]
        }),
        angular2_1.View({
            templateUrl: './components/login/login.html?v=0.7.1',
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
    ], Login);
    return Login;
})();
exports.Login = Login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4vbG9naW4udHMiXSwibmFtZXMiOlsiTG9naW4iLCJMb2dpbi5jb25zdHJ1Y3RvciIsIkxvZ2luLmxvZ2luIiwiTG9naW4uY2hlY2tMb2dnZWRJblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCxzQ0FBb0Msc0NBQXNDLENBQUMsQ0FBQTtBQUMzRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQVlJQSxlQUFtQkEscUJBQTRDQTtRQUE1Q0MsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFDM0RBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLDJCQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtJQUNuREEsQ0FBQ0E7SUFFREQscUJBQUtBLEdBQUxBLFVBQU1BLEtBQUtBLEVBQUVBLFFBQWdCQSxFQUFFQSxRQUFnQkE7UUFBL0NFLGlCQXFCQ0E7UUFwQkdBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBNkJBLEdBQUdBLFFBQVFBLEdBQUdBLFFBQVFBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBO1FBQzVFQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQUlBO1lBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0NBLEtBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZDQSxJQUFJQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xFQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLENBQUNBLElBQUlBLEVBQUVBLGdDQUFnQ0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JIQSxXQUFXQSxDQUNQQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxLQUFJQSxDQUFDQSxtQkFBbUJBLEVBQUVBLEVBQTFCQSxDQUEwQkEsRUFDakNBLElBQUlBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQ2hCQSxDQUFDQTtZQUNOQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDSkEsS0FBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDcENBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsbUNBQW1DQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6R0EsQ0FBQ0E7UUFDTEEsQ0FBQ0EsQ0FBQ0E7YUFDREEsS0FBS0EsQ0FBQ0EsVUFBQ0EsS0FBS0E7WUFDVEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDM0JBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbkZBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRU9GLG1DQUFtQkEsR0FBM0JBO1FBQ0lHLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0NBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7WUFDcENBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEscUNBQXFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMzR0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUE1Q0xIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsWUFBWUEsRUFBRUEsQ0FBQ0EsNkNBQXFCQSxDQUFDQTtTQUN4Q0EsQ0FBQ0E7UUFFREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsZ0RBQWdEQTtTQUM5REEsQ0FBQ0E7O2NBc0NEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQTdDQSxJQTZDQztBQXBDWSxhQUFLLFFBb0NqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQge0V2ZW50TWFuYWdlcn0gZnJvbSBcInV0aWxzL2V2ZW50YnVzL0V2ZW50TWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0zJyxcbiAgICB2aWV3SW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICAgIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7IC8vIHNpbmdsZXRvbiwgZG8gbm90IHVzZSBESVxuICAgIH1cblxuICAgIGxvZ2luKGV2ZW50LCB1c2VybmFtZTogU3RyaW5nLCBwYXNzd29yZDogU3RyaW5nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgbmF0aXZlIHBhZ2UgcmVmcmVzaFxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgYXR0ZW1wdHMgdG8gbG9nIGluIGFzIFwiICsgdXNlcm5hbWUgKyBcIiB3aXRoIFwiICsgcGFzc3dvcmQpO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXROZXdUb2tlbih1c2VybmFtZSwgcGFzc3dvcmQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwgJiYgZGF0YS5zcGxpdChcIi5cIikubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nSW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGV4cGlyZXMgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRFeHBpcmVUaW1lc3RhbXAoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgW3RydWUsIFwiTG9nZ2VkIGluIHRvIHRoZSBzeXN0ZW0gdW50aWwgXCIgKyBuZXcgRGF0ZShleHBpcmVzKV0pO1xuICAgICAgICAgICAgICAgIHNldEludGVydmFsKFxuICAgICAgICAgICAgICAgICAgICAoXykgPT4gdGhpcy5jaGVja0xvZ2dlZEluU3RhdHVzKCksXG4gICAgICAgICAgICAgICAgICAgIDEwMDAgKiA2MCAqIDVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dPdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBbZmFsc2UsIFwic2VydmVyIGRpZCBub3Qgc2VuZCBjb3JyZWN0IHRva2VuXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBbZmFsc2UsIGVycm9yLm1lc3NhZ2VdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0xvZ2dlZEluU3RhdHVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nT3V0KCk7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBbZmFsc2UsIFwiWW91ciBzZXNzaW9uIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW5cIl0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9