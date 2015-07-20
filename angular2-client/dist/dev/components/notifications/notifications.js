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
var EventManager_1 = require("utils/eventbus/EventManager");
var Notifications = (function () {
    function Notifications() {
        var _this = this;
        var eventManager = EventManager_1.EventManager.getInstance();
        eventManager.subscribe("authenticationStateChange", function (event) {
            _this.message = event[1];
        });
        eventManager.subscribe("tasksResult", function (event) {
            _this.message = event[1];
        });
    }
    Notifications.prototype.close = function () {
        this.message = null;
    };
    Notifications = __decorate([
        angular2_1.Component({
            selector: 'app-notifications'
        }),
        angular2_1.View({
            templateUrl: './components/notifications/notifications.html?v=0.7.1',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], Notifications);
    return Notifications;
})();
exports.Notifications = Notifications;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbnMiLCJOb3RpZmljYXRpb25zLmNvbnN0cnVjdG9yIiwiTm90aWZpY2F0aW9ucy5jbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBcUMsbUJBQW1CLENBQUMsQ0FBQTtBQUN6RCw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUd6RDtJQVdDQTtRQVhEQyxpQkEwQkNBO1FBZENBLElBQUlBLFlBQVlBLEdBQUdBLDJCQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUU5Q0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxVQUFDQSxLQUFpQkE7WUFDckVBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxhQUFhQSxFQUFFQSxVQUFDQSxLQUFpQkE7WUFDdkRBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVERCw2QkFBS0EsR0FBTEE7UUFDQ0UsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDckJBLENBQUNBO0lBekJGRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsbUJBQW1CQTtTQUU3QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDTEEsV0FBV0EsRUFBRUEsZ0VBQWdFQTtZQUM3RUEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO1NBQ25CQSxDQUFDQTs7c0JBbUJEQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0ExQkEsSUEwQkM7QUFsQlkscUJBQWEsZ0JBa0J6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0V2ZW50TWFuYWdlcn0gZnJvbSBcInV0aWxzL2V2ZW50YnVzL0V2ZW50TWFuYWdlclwiO1xuLy9pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXBwLW5vdGlmaWNhdGlvbnMnXG5cdC8vLHZpZXdJbmplY3RvcjogW0F1dGhlbnRpY2F0aW9uU2VydmljZSwgVGFza1NlcnZpY2VdXG59KVxuQFZpZXcoe1xuXHR0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuaHRtbD92PTwlPSBWRVJTSU9OICU+Jyxcblx0ZGlyZWN0aXZlczogW05nRm9yXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcblx0bWVzc2FnZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBldmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcblxuXHRcdGV2ZW50TWFuYWdlci5zdWJzY3JpYmUoXCJhdXRoZW50aWNhdGlvblN0YXRlQ2hhbmdlXCIsIChldmVudDogQXJyYXk8YW55PikgPT4ge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gZXZlbnRbMV07XG5cdFx0fSk7XG5cblx0XHRldmVudE1hbmFnZXIuc3Vic2NyaWJlKFwidGFza3NSZXN1bHRcIiwgKGV2ZW50OiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSBldmVudFsxXTtcblx0XHR9KTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMubWVzc2FnZSA9IG51bGw7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=