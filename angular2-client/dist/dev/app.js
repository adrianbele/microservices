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
        window.location.assign("/");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAubG9nb3V0Il0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7OztBQUU1Qyx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RixxQkFBbUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM1QyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUV4RCxzQ0FBb0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNyRSw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQWtCSUEsYUFBWUEscUJBQTRDQTtRQWxCNURDLGlCQXFDQ0E7UUFsQk9BLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EscUJBQXFCQSxDQUFDQTtRQUNuREEsSUFBSUEsWUFBWUEsR0FBR0EsMkJBQVlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBRTlDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBQ25EQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSwyQkFBMkJBLEVBQUVBLFVBQUNBLEdBQVlBO1lBQzdEQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsOEJBQThCQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN0REEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFREQsb0JBQU1BLEdBQU5BLFVBQU9BLEtBQUtBO1FBQ1JFLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBRXZCQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUV0QkEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDaENBLENBQUNBO0lBcENMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsV0FBV0EsRUFBRUEsQ0FBQ0EsNkNBQXFCQSxDQUFDQTtTQUN2Q0EsQ0FBQ0E7UUFDREEsb0JBQVdBLENBQUNBO1lBQ1hBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzFDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDakRBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLG1CQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQTtTQUMzREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsNkJBQTZCQTtZQUMxQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtTQUN2Q0EsQ0FBQ0E7O1lBd0JEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQXJDQSxBQXFDQ0EsSUFBQTtBQUVELG9CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQWlCLEVBQUUsNkNBQXFCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIGJvb3RzdHJhcCwgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlck91dGxldCwgUm91dGVyTGluaywgcm91dGVySW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5pbXBvcnQge1Rhc2tzfSBmcm9tICcuL2NvbXBvbmVudHMvdGFza3MvdGFza3MnO1xuaW1wb3J0IHtMb2dpbn0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7U2V0dGluZ3N9IGZyb20gJy4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncyc7XG5cbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICdzZXJ2aWNlcy9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHtFdmVudE1hbmFnZXJ9IGZyb20gXCJ1dGlscy9ldmVudGJ1cy9FdmVudE1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIGFwcEluamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWUsIGFzOiAnaG9tZScgfSxcbiAgeyBwYXRoOiAnL3Rhc2tzJywgY29tcG9uZW50OiBUYXNrcywgYXM6ICd0YXNrcycgfSxcbiAgeyBwYXRoOiAnL2xvZ2luJywgY29tcG9uZW50OiBMb2dpbiwgYXM6ICdsb2dpbicgfSxcbiAgeyBwYXRoOiAnL3NldHRpbmdzJywgY29tcG9uZW50OiBTZXR0aW5ncywgYXM6ICdzZXR0aW5ncycgfVxuXSlcbkBWaWV3KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxufSlcbmNsYXNzIEFwcCB7XG4gICAgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgcHVibGljIGxvZ2dlZEluOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UgPSBhdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgICAgIGxldCBldmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICAgICAgZXZlbnRNYW5hZ2VyLnN1YnNjcmliZShcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgKG1zZzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IG1zZztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwIGNhdWdodCBldmVudCwgbG9nZ2VkSW46IFwiICsgbXNnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIFRPRE8gcGVyaGFwcyB0aHJvdyBldmVudCBzbyB0aGUgc2VydmljZSBkb2VzIG5vdCBuZWVkIHRvIGJlIGNhbGxlZFxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5sb2dPdXQoKTtcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICAvLyBUT0RPIHVzZSBhbmd1bGFyMiByb3V0aW5nIHdoZW4gaXQgd29ya3MsIGZvciBub3cgZG8gYSBjcnVkZSBmdWxsIHBhZ2UgcmVsb2FkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCIvXCIpO1xuICAgIH1cbn1cblxuYm9vdHN0cmFwKEFwcCwgW3JvdXRlckluamVjdGFibGVzLCBBdXRoZW50aWNhdGlvblNlcnZpY2VdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==