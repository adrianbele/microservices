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
            templateUrl: './components/notifications/notifications.html?v=0.7.0',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], Notifications);
    return Notifications;
})();
exports.Notifications = Notifications;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnRzIl0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbnMiLCJOb3RpZmljYXRpb25zLmNvbnN0cnVjdG9yIiwiTm90aWZpY2F0aW9ucy5jbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBcUMsbUJBQW1CLENBQUMsQ0FBQTtBQUN6RCw2QkFBMkIsNkJBQTZCLENBQUMsQ0FBQTtBQUV6RDtJQVVDQTtRQVZEQyxpQkF5QkNBO1FBZENBLElBQUlBLFlBQVlBLEdBQUdBLDJCQUFZQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtRQUU5Q0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxVQUFDQSxLQUFpQkE7WUFDckVBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxZQUFZQSxDQUFDQSxTQUFTQSxDQUFDQSxhQUFhQSxFQUFFQSxVQUFDQSxLQUFpQkE7WUFDdkRBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3pCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVERCw2QkFBS0EsR0FBTEE7UUFDQ0UsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDckJBLENBQUNBO0lBeEJGRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsbUJBQW1CQTtTQUM3QkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDTEEsV0FBV0EsRUFBRUEsZ0VBQWdFQTtZQUM3RUEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO1NBQ25CQSxDQUFDQTs7c0JBbUJEQTtJQUFEQSxvQkFBQ0E7QUFBREEsQ0F6QkEsSUF5QkM7QUFsQlkscUJBQWEsZ0JBa0J6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0V2ZW50TWFuYWdlcn0gZnJvbSBcInV0aWxzL2V2ZW50YnVzL0V2ZW50TWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhcHAtbm90aWZpY2F0aW9ucydcbn0pXG5AVmlldyh7XG5cdHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuXHRkaXJlY3RpdmVzOiBbTmdGb3JdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xuXHRtZXNzYWdlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGV2ZW50TWFuYWdlciA9IEV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuXG5cdFx0ZXZlbnRNYW5hZ2VyLnN1YnNjcmliZShcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgKGV2ZW50OiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSBldmVudFsxXTtcblx0XHR9KTtcblxuXHRcdGV2ZW50TWFuYWdlci5zdWJzY3JpYmUoXCJ0YXNrc1Jlc3VsdFwiLCAoZXZlbnQ6IEFycmF5PGFueT4pID0+IHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IGV2ZW50WzFdO1xuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0dGhpcy5tZXNzYWdlID0gbnVsbDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==