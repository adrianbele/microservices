/// <reference path="../typings/tsd.d.ts" />
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
var router_1 = require('angular2/router');
var home_1 = require('./components/home/home');
var tasks_1 = require('./components/tasks/tasks');
var login_1 = require('./components/login/login');
var settings_1 = require('./components/settings/settings');
var AuthenticationService_1 = require('services/AuthenticationService');
var EventManager_1 = require("utils/eventbus/EventManager");
var App = (function () {
    function App(authenticationService) {
        var _this = this;
        this.authenticationService = authenticationService;
        var eventManager = EventManager_1.EventManager.getInstance();
        this.loggedIn = authenticationService.isLoggedIn();
        eventManager.subscribe("authenticationStateChange", function (msg) {
            _this.loggedIn = msg;
            console.log("App caught event, loggedIn: " + msg);
        });
    }
    App.prototype.logout = function (event) {
        event.preventDefault();
        this.authenticationService.logOut();
        this.loggedIn = false;
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            appInjector: [AuthenticationService_1.AuthenticationService]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home' },
            { path: '/tasks', component: tasks_1.Tasks, as: 'tasks' },
            { path: '/login', component: login_1.Login, as: 'login' },
            { path: '/settings', component: settings_1.Settings, as: 'settings' }
        ]),
        angular2_1.View({
            templateUrl: './app.html?v=0.4.0',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables, AuthenticationService_1.AuthenticationService]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAubG9nb3V0Il0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7OztBQUU1Qyx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RixxQkFBbUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM1QyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUV4RCxzQ0FBb0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNyRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQWtCSUEsYUFBWUEscUJBQTRDQTtRQWxCNURDLGlCQW1DQ0E7UUFoQk9BLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EscUJBQXFCQSxDQUFDQTtRQUNuREEsSUFBSUEsWUFBWUEsR0FBR0EsMkJBQVlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRTlDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBQ25EQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSwyQkFBMkJBLEVBQUVBLFVBQUNBLEdBQVlBO1lBQzdEQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOEJBQThCQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFREQsb0JBQU1BLEdBQU5BLFVBQU9BLEtBQUtBO1FBQ1JFLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBRXZCQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFsQ0xGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxXQUFXQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLENBQUNBO1NBQ3ZDQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDMUNBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsbUJBQVFBLEVBQUVBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBO1NBQzNEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSw2QkFBNkJBO1lBQzFDQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBWUEsRUFBRUEsbUJBQVVBLENBQUNBO1NBQ3ZDQSxDQUFDQTs7WUFzQkRBO0lBQURBLFVBQUNBO0FBQURBLENBbkNBLEFBbUNDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSw2Q0FBcUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lJztcbmltcG9ydCB7VGFza3N9IGZyb20gJy4vY29tcG9uZW50cy90YXNrcy90YXNrcyc7XG5pbXBvcnQge0xvZ2lufSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzJztcblxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJ3NlcnZpY2VzL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQge0V2ZW50TWFuYWdlcn0gZnJvbSBcInV0aWxzL2V2ZW50YnVzL0V2ZW50TWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgYXBwSW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdob21lJyB9LFxuICB7IHBhdGg6ICcvdGFza3MnLCBjb21wb25lbnQ6IFRhc2tzLCBhczogJ3Rhc2tzJyB9LFxuICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luLCBhczogJ2xvZ2luJyB9LFxuICB7IHBhdGg6ICcvc2V0dGluZ3MnLCBjb21wb25lbnQ6IFNldHRpbmdzLCBhczogJ3NldHRpbmdzJyB9XG5dKVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdXG59KVxuY2xhc3MgQXBwIHtcbiAgICBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICBwdWJsaWMgbG9nZ2VkSW46IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZSA9IGF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICAgICAgbGV0IGV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSBhdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgICAgICBldmVudE1hbmFnZXIuc3Vic2NyaWJlKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCAobXNnOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gbXNnO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcHAgY2F1Z2h0IGV2ZW50LCBsb2dnZWRJbjogXCIgKyBtc2cpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dvdXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gVE9ETyBwZXJoYXBzIHRocm93IGV2ZW50IHNvIHRoZSBzZXJ2aWNlIGRvZXMgbm90IG5lZWQgdG8gYmUgY2FsbGVkXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgfVxufVxuXG5ib290c3RyYXAoQXBwLCBbcm91dGVySW5qZWN0YWJsZXMsIEF1dGhlbnRpY2F0aW9uU2VydmljZV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9