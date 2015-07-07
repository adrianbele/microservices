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
        this.taskService = taskService;
        if (authenticationService.isLoggedIn()) {
            this.taskService.getTasks().then(function (obj) {
                _this.tasks = obj.actionResult;
                _this.nrOfTasks = _this.tasks.length;
                console.log("finished getting tasks: " + _this.tasks.length);
            });
        }
        else {
            console.log("user not authenticated");
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
            appInjector: [AuthenticationService_1.AuthenticationService, TaskService_1.TaskService]
        }),
        angular2_1.View({
            templateUrl: './components/tasks/tasks.html?v=0.4.0',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService, TaskService_1.TaskService])
    ], Tasks);
    return Tasks;
})();
exports.Tasks = Tasks;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFFekQsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0UscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFFdkQ7SUFjSUEsZUFBWUEscUJBQTRDQSxFQUFFQSxXQUF3QkE7UUFkdEZDLGlCQXlDQ0E7UUExQk9BLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7UUFDcENBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFdBQVdBLENBQUNBO1FBRS9CQSxFQUFFQSxDQUFDQSxDQUFDQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3JDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxHQUFHQTtnQkFDakNBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBO2dCQUM5QkEsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQ25DQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ2hFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVQQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUVKQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBO1FBQzFDQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVERCx1QkFBT0EsR0FBUEEsVUFBUUEsS0FBS0EsRUFBRUEsT0FBT0E7UUFBdEJFLGlCQVNDQTtRQVJHQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsV0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEdBQUdBO1lBQ3ZDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNwQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLE9BQU9BLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVQQSxDQUFDQTtJQXhDTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxXQUFXQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLEVBQUVBLHlCQUFXQSxDQUFDQTtTQUNwREEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsZ0RBQWdEQTtZQUM3REEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO1NBQ3RCQSxDQUFDQTs7Y0FrQ0RBO0lBQURBLFlBQUNBO0FBQURBLENBekNBLEFBeUNDQSxJQUFBO0FBaENZLGFBQUssUUFnQ2pCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90YXNrcy90YXNrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcbmltcG9ydCB7VGFza30gZnJvbSAnY29tcG9uZW50cy90YXNrcy90YXNrJztcbmltcG9ydCB7VGFza1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Rhc2tTZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMicsXG4gICAgYXBwSW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2UsIFRhc2tTZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy90YXNrcy90YXNrcy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbn0pXG4vLyBUT0RPIGNyZWF0ZSBhICdQcm90ZWN0ZWRDb21wb25lbnQnIHN1cGVyY2xhc3Mgd2hpY2ggd2lsbCBjaGVjayBzZXNzaW9uXG5leHBvcnQgY2xhc3MgVGFza3Mge1xuICAgIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZTtcbiAgICB0YXNrczogQXJyYXk8YW55PjtcbiAgICBuck9mVGFza3M6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLCB0YXNrU2VydmljZTogVGFza1NlcnZpY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrcy50cyBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgdGhpcy50YXNrU2VydmljZSA9IHRhc2tTZXJ2aWNlO1xuXG4gICAgICAgIGlmIChhdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLmdldFRhc2tzKCkudGhlbigob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcyA9IG9iai5hY3Rpb25SZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5uck9mVGFza3MgPSB0aGlzLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIGdldHRpbmcgdGFza3M6IFwiICsgdGhpcy50YXNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBUT0RPIGNhdGNoIGVycm9yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUT0RPIGhhbmRsZSBubyB0b2tlbiBzaXR1YXRpb25cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFRhc2soZXZlbnQsIG5ld25hbWUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBuYXRpdmUgcGFnZSByZWZyZXNoXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmV3bmFtZS52YWx1ZSk7XG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UuYWRkVGFzayhuZXdUYXNrKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgICAgIG5ld1Rhc2suc2V0SWQob2JqLmFjdGlvblJlc3VsdC5faWQpO1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgbmV3bmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUT0RPIGNhdGNoIGVycm9yXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9