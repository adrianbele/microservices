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
var notifications_1 = require('./components/notifications/notifications');
var AuthenticationService_1 = require('services/AuthenticationService');
var EventManager_1 = require("utils/eventbus/EventManager");
var App = (function () {
    function App(authenticationService, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.eventManager = EventManager_1.EventManager.getInstance();
        this.loggedIn = authenticationService.isLoggedIn();
        this.eventManager.subscribe("authenticationStateChange", function (event) {
            _this.loggedIn = event[0];
            console.log("App caught event, loggedIn: " + event[0]);
        });
        console.log("app.ts finished constructor");
    }
    App.prototype.logout = function (event) {
        event.preventDefault();
        this.authenticationService.logOut();
        this.loggedIn = false;
        this.eventManager.publish("authenticationStateChange", [false, "You logged out"]);
        this.router.navigate("/home");
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
            templateUrl: './app.html?v=0.7.1',
            directives: [router_1.RouterOutlet, router_1.RouterLink, notifications_1.Notifications]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService, router_1.Router])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables, AuthenticationService_1.AuthenticationService]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAubG9nb3V0Il0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7OztBQUU1Qyx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBK0UsaUJBQWlCLENBQUMsQ0FBQTtBQUVqRyxxQkFBbUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM1QyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUV4RCw4QkFBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUV2RSxzQ0FBb0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNyRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQW1CSUEsYUFBbUJBLHFCQUE0Q0EsRUFBU0EsTUFBY0E7UUFuQjFGQyxpQkFtQ0NBO1FBaEJzQkEsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFBU0EsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBUUE7UUFGakZBLGlCQUFZQSxHQUFpQkEsMkJBQVlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBR3pEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBQ25EQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSwyQkFBMkJBLEVBQUVBLFVBQUNBLEtBQWlCQTtZQUN2RUEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDhCQUE4QkEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDM0RBLENBQUNBLENBQUNBLENBQUNBO1FBQ0hBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDZCQUE2QkEsQ0FBQ0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBRURELG9CQUFNQSxHQUFOQSxVQUFPQSxLQUFLQTtRQUNSRSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUNwQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDdEJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLDJCQUEyQkEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsZ0JBQWdCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNsRkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDbENBLENBQUNBO0lBbENMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsWUFBWUEsRUFBRUEsQ0FBQ0EsNkNBQXFCQSxDQUFDQTtTQUN4Q0EsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1RBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzFDQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUM5Q0EsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDakRBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSxtQkFBUUEsRUFBRUEsRUFBRUEsRUFBRUEsVUFBVUEsRUFBRUE7U0FDN0RBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDZCQUE2QkE7WUFDMUNBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFZQSxFQUFFQSxtQkFBVUEsRUFBRUEsNkJBQWFBLENBQUNBO1NBQ3REQSxDQUFDQTs7WUFxQkRBO0lBQURBLFVBQUNBO0FBQURBLENBbkNBLElBbUNDO0FBRUQsb0JBQVMsQ0FBQyxHQUFHLEVBQUMsQ0FBQywwQkFBaUIsRUFBRSw2Q0FBcUIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCBSb3V0ZXIsIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtUYXNrc30gZnJvbSAnLi9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzJztcbmltcG9ydCB7TG9naW59IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbic7XG5pbXBvcnQge1NldHRpbmdzfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MnO1xuXG5pbXBvcnQge05vdGlmaWNhdGlvbnN9IGZyb20gJy4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMnO1xuXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyfSBmcm9tIFwidXRpbHMvZXZlbnRidXMvRXZlbnRNYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB2aWV3SW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lLCBhczogJ2hvbWUnIH0sXG4gICAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnaG9tZScgfSxcbiAgICB7IHBhdGg6ICcvdGFza3MnLCBjb21wb25lbnQ6IFRhc2tzLCBhczogJ3Rhc2tzJyB9LFxuICAgIHsgcGF0aDogJy9sb2dpbicsIGNvbXBvbmVudDogTG9naW4sIGFzOiAnbG9naW4nIH0sXG4gICAgeyBwYXRoOiAnL3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5ncywgYXM6ICdzZXR0aW5ncycgfVxuXSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCBOb3RpZmljYXRpb25zXVxufSlcbmNsYXNzIEFwcCB7XG4gICAgcHVibGljIGxvZ2dlZEluOiBib29sZWFuO1xuXHRwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCAoZXZlbnQ6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSBldmVudFswXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwIGNhdWdodCBldmVudCwgbG9nZ2VkSW46IFwiICsgZXZlbnRbMF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHAudHMgZmluaXNoZWQgY29uc3RydWN0b3JcIik7XG4gICAgfVxuXG4gICAgbG9nb3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIFtmYWxzZSwgXCJZb3UgbG9nZ2VkIG91dFwiXSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL2hvbWVcIik7XG4gICAgfVxufVxuXG5ib290c3RyYXAoQXBwLFtyb3V0ZXJJbmplY3RhYmxlcywgQXV0aGVudGljYXRpb25TZXJ2aWNlXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=