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
        this.authenticationService = authenticationService;
        this.taskService = taskService;
        console.log("tasks.ts constructor");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFFekQsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0UscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFFdkQ7SUFhSUEsZUFBbUJBLHFCQUE0Q0EsRUFBU0EsV0FBd0JBO1FBYnBHQyxpQkF3Q0NBO1FBM0JzQkEsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFBU0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO1FBQzVGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVwQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsR0FBR0E7Z0JBQ2pDQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQTtnQkFDOUJBLEtBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBO2dCQUNuQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtZQUNoRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBQ0EsS0FBS0E7Z0JBQ1hBLEtBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBO1lBQ2pDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSwyQ0FBMkNBLENBQUNBO1FBQy9EQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVERCx1QkFBT0EsR0FBUEEsVUFBUUEsS0FBS0EsRUFBRUEsT0FBT0E7UUFBdEJFLGlCQVNDQTtRQVJHQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsV0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEdBQUdBO1lBQ3ZDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNwQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLE9BQU9BLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVQQSxDQUFDQTtJQXZDTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxZQUFZQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLEVBQUVBLHlCQUFXQSxDQUFDQTtTQUNyREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsZ0RBQWdEQTtZQUM3REEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO1NBQ3RCQSxDQUFDQTs7Y0FpQ0RBO0lBQURBLFlBQUNBO0FBQURBLENBeENBLElBd0NDO0FBaENZLGFBQUssUUFnQ2pCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90YXNrcy90YXNrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7VGFza30gZnJvbSAnY29tcG9uZW50cy90YXNrcy90YXNrJztcbmltcG9ydCB7VGFza1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Rhc2tTZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMicsXG4gICAgdmlld0luamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlLCBUYXNrU2VydmljZV1cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvdGFza3MvdGFza3MuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgICBkaXJlY3RpdmVzOiBbTmdGb3JdXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tzIHtcbiAgICB0YXNrczogQXJyYXk8VGFzaz47XG4gICAgbnJPZlRhc2tzOiBudW1iZXI7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwdWJsaWMgdGFza1NlcnZpY2U6IFRhc2tTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFza3MudHMgY29uc3RydWN0b3JcIik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrU2VydmljZS5nZXRUYXNrcygpLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3MgPSBvYmouYWN0aW9uUmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMubnJPZlRhc2tzID0gdGhpcy50YXNrcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZCBnZXR0aW5nIHRhc2tzOiBcIiArIHRoaXMudGFza3MubGVuZ3RoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiWW91IGFyZSBub3QgYXV0aGVudGljYXRlZCwgcGxlYXNlIGxvZyBpbi5cIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFRhc2soZXZlbnQsIG5ld25hbWUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBuYXRpdmUgcGFnZSByZWZyZXNoXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmV3bmFtZS52YWx1ZSk7XG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UuYWRkVGFzayhuZXdUYXNrKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgICAgIG5ld1Rhc2suc2V0SWQob2JqLmFjdGlvblJlc3VsdC5faWQpO1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgbmV3bmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUT0RPIGNhdGNoIGVycm9yXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9