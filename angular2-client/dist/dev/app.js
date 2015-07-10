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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAubG9nb3V0Il0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7OztBQUU1Qyx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RixxQkFBbUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM1QyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUV4RCxzQ0FBb0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNyRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQW1CSUEsYUFBWUEscUJBQTRDQTtRQW5CNURDLGlCQXVDQ0E7UUFuQk9BLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EscUJBQXFCQSxDQUFDQTtRQUNuREEsSUFBSUEsWUFBWUEsR0FBR0EsMkJBQVlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRTlDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBQ25EQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSwyQkFBMkJBLEVBQUVBLFVBQUNBLEdBQVlBO1lBQzdEQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOEJBQThCQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDSEEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsNkJBQTZCQSxDQUFDQSxDQUFDQTtJQUMvQ0EsQ0FBQ0E7SUFFREQsb0JBQU1BLEdBQU5BLFVBQU9BLEtBQUtBO1FBQ1JFLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBRXZCQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUV0QkEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDaENBLENBQUNBO0lBdENMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsWUFBWUEsRUFBRUEsQ0FBQ0EsNkNBQXFCQSxDQUFDQTtTQUN4Q0EsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1RBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzFDQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUM5Q0EsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDakRBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGFBQUtBLEVBQUVBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBO1lBQ2pEQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSxtQkFBUUEsRUFBRUEsRUFBRUEsRUFBRUEsVUFBVUEsRUFBRUE7U0FDN0RBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLDZCQUE2QkE7WUFDMUNBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFZQSxFQUFFQSxtQkFBVUEsQ0FBQ0E7U0FDdkNBLENBQUNBOztZQXlCREE7SUFBREEsVUFBQ0E7QUFBREEsQ0F2Q0EsSUF1Q0M7QUFFRCxvQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDZDQUFxQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuaW1wb3J0IHtUYXNrc30gZnJvbSAnLi9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzJztcbmltcG9ydCB7TG9naW59IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbic7XG5pbXBvcnQge1NldHRpbmdzfSBmcm9tICcuL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MnO1xuXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyfSBmcm9tIFwidXRpbHMvZXZlbnRidXMvRXZlbnRNYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB2aWV3SW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lLCBhczogJ2hvbWUnIH0sXG4gICAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnaG9tZScgfSxcbiAgICB7IHBhdGg6ICcvdGFza3MnLCBjb21wb25lbnQ6IFRhc2tzLCBhczogJ3Rhc2tzJyB9LFxuICAgIHsgcGF0aDogJy9sb2dpbicsIGNvbXBvbmVudDogTG9naW4sIGFzOiAnbG9naW4nIH0sXG4gICAgeyBwYXRoOiAnL3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5ncywgYXM6ICdzZXR0aW5ncycgfVxuXSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxufSlcbmNsYXNzIEFwcCB7XG4gICAgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgcHVibGljIGxvZ2dlZEluOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UgPSBhdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgICAgIGxldCBldmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLnN1YnNjcmliZShcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgKG1zZzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IG1zZztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwIGNhdWdodCBldmVudCwgbG9nZ2VkSW46IFwiICsgbXNnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwLnRzIGZpbmlzaGVkIGNvbnN0cnVjdG9yXCIpO1xuICAgIH1cblxuICAgIGxvZ291dChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBUT0RPIHBlcmhhcHMgdGhyb3cgZXZlbnQgc28gdGhlIHNlcnZpY2UgZG9lcyBub3QgbmVlZCB0byBiZSBjYWxsZWRcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nT3V0KCk7XG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgLy8gVE9ETyB1c2UgYW5ndWxhcjIgcm91dGluZyB3aGVuIGl0IHdvcmtzLCBmb3Igbm93IGRvIGEgY3J1ZGUgZnVsbCBwYWdlIHJlbG9hZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKFwiL1wiKTtcbiAgICB9XG59XG5cbmJvb3RzdHJhcChBcHAsIFtyb3V0ZXJJbmplY3RhYmxlcywgQXV0aGVudGljYXRpb25TZXJ2aWNlXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=