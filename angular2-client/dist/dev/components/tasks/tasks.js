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
var task_1 = require('components/tasks/task');
var TaskService_1 = require('../../services/TaskService');
var Tasks = (function () {
    function Tasks(authenticationService, taskService) {
        var _this = this;
        console.log("tasks.ts constructor");
        this.authenticationService = authenticationService;
        this.taskService = taskService;
        this.message = null;
        if (this.authenticationService.isLoggedIn()) {
            this.taskService.getTasks().then(function (obj) {
                _this.tasks = obj.actionResult;
                _this.nrOfTasks = _this.tasks.length;
                console.log("finished getting tasks: " + _this.tasks.length);
            }).catch(function (error) {
                _this.message = error.message;
            });
        }
        else {
            this.message = "You are not authenticated, please log in.";
        }
    }
    Tasks.prototype.addTask = function (event, newname) {
        var _this = this;
        event.preventDefault();
        var newTask = new task_1.Task(newname.value);
        this.taskService.addTask(newTask).then(function (obj) {
            newTask.setId(obj.actionResult._id);
            _this.tasks.push(newTask);
            newname.value = "";
        });
    };
    Tasks = __decorate([
        angular2_1.Component({
            selector: 'component-2',
            viewInjector: [AuthenticationService_1.AuthenticationService, TaskService_1.TaskService]
        }),
        angular2_1.View({
            templateUrl: './components/tasks/tasks.html?v=0.6.1',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService, TaskService_1.TaskService])
    ], Tasks);
    return Tasks;
})();
exports.Tasks = Tasks;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFFekQsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0UscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFFdkQ7SUFlSUEsZUFBWUEscUJBQTRDQSxFQUFFQSxXQUF3QkE7UUFmdEZDLGlCQTRDQ0E7UUE1Qk9BLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7UUFDcENBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EscUJBQXFCQSxDQUFBQTtRQUNsREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsV0FBV0EsQ0FBQ0E7UUFDL0JBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO1FBRXBCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQzFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxHQUFHQTtnQkFDakNBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBO2dCQUM5QkEsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQ25DQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ2hFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFDQSxLQUFLQTtnQkFDWEEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ0pBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLDJDQUEyQ0EsQ0FBQ0E7UUFDL0RBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURELHVCQUFPQSxHQUFQQSxVQUFRQSxLQUFLQSxFQUFFQSxPQUFPQTtRQUF0QkUsaUJBU0NBO1FBUkdBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxXQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsR0FBR0E7WUFDdkNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3BDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUN6QkEsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO0lBRVBBLENBQUNBO0lBM0NMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7WUFDdkJBLFlBQVlBLEVBQUVBLENBQUNBLDZDQUFxQkEsRUFBRUEseUJBQVdBLENBQUNBO1NBQ3JEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxXQUFXQSxFQUFFQSxnREFBZ0RBO1lBQzdEQSxVQUFVQSxFQUFFQSxDQUFDQSxnQkFBS0EsQ0FBQ0E7U0FDdEJBLENBQUNBOztjQXFDREE7SUFBREEsWUFBQ0E7QUFBREEsQ0E1Q0EsSUE0Q0M7QUFwQ1ksYUFBSyxRQW9DakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHtUYXNrfSBmcm9tICdjb21wb25lbnRzL3Rhc2tzL3Rhc2snO1xuaW1wb3J0IHtUYXNrU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvVGFza1NlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0yJyxcbiAgICB2aWV3SW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2UsIFRhc2tTZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy90YXNrcy90YXNrcy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbn0pXG5leHBvcnQgY2xhc3MgVGFza3Mge1xuICAgIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlO1xuICAgIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZTtcbiAgICB0YXNrczogQXJyYXk8VGFzaz47XG4gICAgbnJPZlRhc2tzOiBudW1iZXI7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tzLnRzIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZSA9IGF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlID0gdGFza1NlcnZpY2U7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrU2VydmljZS5nZXRUYXNrcygpLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3MgPSBvYmouYWN0aW9uUmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMubnJPZlRhc2tzID0gdGhpcy50YXNrcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZCBnZXR0aW5nIHRhc2tzOiBcIiArIHRoaXMudGFza3MubGVuZ3RoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiWW91IGFyZSBub3QgYXV0aGVudGljYXRlZCwgcGxlYXNlIGxvZyBpbi5cIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFRhc2soZXZlbnQsIG5ld25hbWUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBuYXRpdmUgcGFnZSByZWZyZXNoXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmV3bmFtZS52YWx1ZSk7XG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UuYWRkVGFzayhuZXdUYXNrKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgICAgIG5ld1Rhc2suc2V0SWQob2JqLmFjdGlvblJlc3VsdC5faWQpO1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgbmV3bmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUT0RPIGNhdGNoIGVycm9yXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9