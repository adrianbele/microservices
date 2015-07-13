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
        console.log("app.ts finished constructor");
    }
    App.prototype.logout = function (event) {
        event.preventDefault();
        this.authenticationService.logOut();
        this.loggedIn = false;
        window.location.assign("/");
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewInjector: [AuthenticationService_1.AuthenticationService]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home' },
            { path: '/home', component: home_1.Home, as: 'home' },
            { path: '/tasks', component: tasks_1.Tasks, as: 'tasks' },
            { path: '/login', component: login_1.Login, as: 'login' },
            { path: '/settings', component: settings_1.Settings, as: 'settings' }
        ]),
        angular2_1.View({
            templateUrl: './app.html?v=0.6.1',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables, AuthenticationService_1.AuthenticationService]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAubG9nb3V0Il0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7OztBQUU1Qyx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RixxQkFBbUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM1QyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUV4RCxzQ0FBb0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNyRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQWtCSUEsYUFBbUJBLHFCQUE0Q0E7UUFsQm5FQyxpQkFxQ0NBO1FBbkJzQkEsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFDM0RBLElBQUlBLFlBQVlBLEdBQUdBLDJCQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUU5Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EscUJBQXFCQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtRQUNuREEsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxVQUFDQSxHQUFZQTtZQUM3REEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7WUFDcEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDhCQUE4QkEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDdERBLENBQUNBLENBQUNBLENBQUNBO1FBQ0hBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDZCQUE2QkEsQ0FBQ0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBRURELG9CQUFNQSxHQUFOQSxVQUFPQSxLQUFLQTtRQUNSRSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUV2QkEsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFFdEJBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQXBDTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFlBQVlBLEVBQUVBLENBQUNBLDZDQUFxQkEsQ0FBQ0E7U0FDeENBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNUQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUMxQ0EsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDOUNBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsbUJBQVFBLEVBQUVBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBO1NBQzdEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNKQSxXQUFXQSxFQUFFQSw2QkFBNkJBO1lBQzFDQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBWUEsRUFBRUEsbUJBQVVBLENBQUNBO1NBQ3ZDQSxDQUFDQTs7WUF1QkRBO0lBQURBLFVBQUNBO0FBQURBLENBckNBLElBcUNDO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSw2Q0FBcUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lJztcbmltcG9ydCB7VGFza3N9IGZyb20gJy4vY29tcG9uZW50cy90YXNrcy90YXNrcyc7XG5pbXBvcnQge0xvZ2lufSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzJztcblxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJ3NlcnZpY2VzL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQge0V2ZW50TWFuYWdlcn0gZnJvbSBcInV0aWxzL2V2ZW50YnVzL0V2ZW50TWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgdmlld0luamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdob21lJyB9LFxuICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lLCBhczogJ2hvbWUnIH0sXG4gICAgeyBwYXRoOiAnL3Rhc2tzJywgY29tcG9uZW50OiBUYXNrcywgYXM6ICd0YXNrcycgfSxcbiAgICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luLCBhczogJ2xvZ2luJyB9LFxuICAgIHsgcGF0aDogJy9zZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3MsIGFzOiAnc2V0dGluZ3MnIH1cbl0pXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldCwgUm91dGVyTGlua11cbn0pXG5jbGFzcyBBcHAge1xuICAgIHB1YmxpYyBsb2dnZWRJbjogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgICAgICBsZXQgZXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgICAgIGV2ZW50TWFuYWdlci5zdWJzY3JpYmUoXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIChtc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBtc2c7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcCBjYXVnaHQgZXZlbnQsIGxvZ2dlZEluOiBcIiArIG1zZyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFwcC50cyBmaW5pc2hlZCBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gVE9ETyBwZXJoYXBzIHRocm93IGV2ZW50IHNvIHRoZSBzZXJ2aWNlIGRvZXMgbm90IG5lZWQgdG8gYmUgY2FsbGVkXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIC8vIFRPRE8gdXNlIGFuZ3VsYXIyIHJvdXRpbmcgd2hlbiBpdCB3b3JrcywgZm9yIG5vdyBkbyBhIGNydWRlIGZ1bGwgcGFnZSByZWxvYWRcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihcIi9cIik7XG4gICAgfVxufVxuXG5ib290c3RyYXAoQXBwLCBbcm91dGVySW5qZWN0YWJsZXMsIEF1dGhlbnRpY2F0aW9uU2VydmljZV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9