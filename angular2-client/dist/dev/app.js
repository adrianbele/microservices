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
var LoggingService_1 = require('services/LoggingService');
var EventManager_1 = require("utils/eventbus/EventManager");
var App = (function () {
    function App(authenticationService, router, loggingService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.loggingService = loggingService;
        this.eventManager = EventManager_1.EventManager.getInstance();
        this.loggedIn = authenticationService.isLoggedIn();
        this.eventManager.subscribe("authenticationStateChange", function (event) {
            _this.loggedIn = event[0];
            console.log("App caught event, loggedIn: " + event[0]);
            loggingService.log(event);
        });
        this.eventManager.subscribe("tasksResult", function (event) {
            loggingService.log(event);
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
            viewInjector: [AuthenticationService_1.AuthenticationService, LoggingService_1.LoggingService]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home' },
            { path: '/home', component: home_1.Home, as: 'home' },
            { path: '/tasks', component: tasks_1.Tasks, as: 'tasks' },
            { path: '/login', component: login_1.Login, as: 'login' },
            { path: '/settings', component: settings_1.Settings, as: 'settings' }
        ]),
        angular2_1.View({
            templateUrl: './app.html?v=0.7.0',
            directives: [router_1.RouterOutlet, router_1.RouterLink, notifications_1.Notifications]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService, router_1.Router, LoggingService_1.LoggingService])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [router_1.routerInjectables, AuthenticationService_1.AuthenticationService]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJBcHAiLCJBcHAuY29uc3RydWN0b3IiLCJBcHAubG9nb3V0Il0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7OztBQUU1Qyx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBK0UsaUJBQWlCLENBQUMsQ0FBQTtBQUVqRyxxQkFBbUIsd0JBQXdCLENBQUMsQ0FBQTtBQUM1QyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyxzQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMvQyx5QkFBdUIsZ0NBQWdDLENBQUMsQ0FBQTtBQUN4RCw4QkFBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUV2RSxzQ0FBb0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUNyRSwrQkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQW1CSUEsYUFBbUJBLHFCQUE0Q0EsRUFBU0EsTUFBY0EsRUFBU0EsY0FBOEJBO1FBbkJqSUMsaUJBMENDQTtRQXZCc0JBLDBCQUFxQkEsR0FBckJBLHFCQUFxQkEsQ0FBdUJBO1FBQVNBLFdBQU1BLEdBQU5BLE1BQU1BLENBQVFBO1FBQVNBLG1CQUFjQSxHQUFkQSxjQUFjQSxDQUFnQkE7UUFGeEhBLGlCQUFZQSxHQUFpQkEsMkJBQVlBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBO1FBR3pEQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1FBRXREQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSwyQkFBMkJBLEVBQUVBLFVBQUNBLEtBQWlCQTtZQUNwRUEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDhCQUE4QkEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0RBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3hCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxhQUFhQSxFQUFFQSxVQUFDQSxLQUFpQkE7WUFDNURBLGNBQWNBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw2QkFBNkJBLENBQUNBLENBQUNBO0lBQy9DQSxDQUFDQTtJQUVERCxvQkFBTUEsR0FBTkEsVUFBT0EsS0FBS0E7UUFDUkUsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7UUFDcENBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3RCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSwyQkFBMkJBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDbEZBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQXpDTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFlBQVlBLEVBQUVBLENBQUNBLDZDQUFxQkEsRUFBRUEsK0JBQWNBLENBQUNBO1NBQ3hEQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDVEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsV0FBSUEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDMUNBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLFdBQUlBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO1lBQzlDQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFFQSxhQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNqREEsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7WUFDakRBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLG1CQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQTtTQUM3REEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsNkJBQTZCQTtZQUMxQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxFQUFFQSw2QkFBYUEsQ0FBQ0E7U0FDdERBLENBQUNBOztZQTRCREE7SUFBREEsVUFBQ0E7QUFBREEsQ0ExQ0EsSUEwQ0M7QUFFRCxvQkFBUyxDQUFDLEdBQUcsRUFBQyxDQUFDLDBCQUFpQixFQUFFLDZDQUFxQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIFJvdXRlciwgcm91dGVySW5qZWN0YWJsZXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5pbXBvcnQge1Rhc2tzfSBmcm9tICcuL2NvbXBvbmVudHMvdGFza3MvdGFza3MnO1xuaW1wb3J0IHtMb2dpbn0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7U2V0dGluZ3N9IGZyb20gJy4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncyc7XG5pbXBvcnQge05vdGlmaWNhdGlvbnN9IGZyb20gJy4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMnO1xuXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gJ3NlcnZpY2VzL0xvZ2dpbmdTZXJ2aWNlJztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyfSBmcm9tIFwidXRpbHMvZXZlbnRidXMvRXZlbnRNYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB2aWV3SW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2UsIExvZ2dpbmdTZXJ2aWNlXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdob21lJyB9LFxuICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lLCBhczogJ2hvbWUnIH0sXG4gICAgeyBwYXRoOiAnL3Rhc2tzJywgY29tcG9uZW50OiBUYXNrcywgYXM6ICd0YXNrcycgfSxcbiAgICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luLCBhczogJ2xvZ2luJyB9LFxuICAgIHsgcGF0aDogJy9zZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3MsIGFzOiAnc2V0dGluZ3MnIH1cbl0pXG5AVmlldyh7XG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldCwgUm91dGVyTGluaywgTm90aWZpY2F0aW9uc11cbn0pXG5jbGFzcyBBcHAge1xuICAgIHB1YmxpYyBsb2dnZWRJbjogYm9vbGVhbjtcblx0cHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBsb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG5cblx0ICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZShcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgKGV2ZW50OiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gZXZlbnRbMF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcCBjYXVnaHQgZXZlbnQsIGxvZ2dlZEluOiBcIiArIGV2ZW50WzBdKTtcblx0XHQgICAgbG9nZ2luZ1NlcnZpY2UubG9nKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKFwidGFza3NSZXN1bHRcIiwgKGV2ZW50OiBBcnJheTxhbnk+KSA9PiB7XG5cdCAgICAgICAgbG9nZ2luZ1NlcnZpY2UubG9nKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhcHAudHMgZmluaXNoZWQgY29uc3RydWN0b3JcIik7XG4gICAgfVxuXG4gICAgbG9nb3V0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ091dCgpO1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIFtmYWxzZSwgXCJZb3UgbG9nZ2VkIG91dFwiXSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFwiL2hvbWVcIik7XG4gICAgfVxufVxuXG5ib290c3RyYXAoQXBwLFtyb3V0ZXJJbmplY3RhYmxlcywgQXV0aGVudGljYXRpb25TZXJ2aWNlXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=