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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFFekQsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0UscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFFdkQ7SUFlSUEsZUFBWUEscUJBQTRDQSxFQUFFQSxXQUF3QkE7UUFmdEZDLGlCQTRDQ0E7UUE1Qk9BLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7UUFDcENBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EscUJBQXFCQSxDQUFBQTtRQUNsREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsV0FBV0EsQ0FBQ0E7UUFDL0JBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO1FBRXBCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxxQkFBcUJBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQzFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxHQUFHQTtnQkFDakNBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBO2dCQUM5QkEsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7Z0JBQ25DQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBQ2hFQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFDQSxLQUFLQTtnQkFDWEEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDakNBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ0pBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLDJDQUEyQ0EsQ0FBQ0E7UUFDL0RBLENBQUNBO0lBQ0xBLENBQUNBO0lBRURELHVCQUFPQSxHQUFQQSxVQUFRQSxLQUFLQSxFQUFFQSxPQUFPQTtRQUF0QkUsaUJBU0NBO1FBUkdBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxXQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN0Q0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsR0FBR0E7WUFDdkNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3BDQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUN6QkEsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO0lBRVBBLENBQUNBO0lBM0NMRjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7WUFDdkJBLFdBQVdBLEVBQUVBLENBQUNBLDZDQUFxQkEsRUFBRUEseUJBQVdBLENBQUNBO1NBQ3BEQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxXQUFXQSxFQUFFQSxnREFBZ0RBO1lBQzdEQSxVQUFVQSxFQUFFQSxDQUFDQSxnQkFBS0EsQ0FBQ0E7U0FDdEJBLENBQUNBOztjQXFDREE7SUFBREEsWUFBQ0E7QUFBREEsQ0E1Q0EsQUE0Q0NBLElBQUE7QUFwQ1ksYUFBSyxRQW9DakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHtUYXNrfSBmcm9tICdjb21wb25lbnRzL3Rhc2tzL3Rhc2snO1xuaW1wb3J0IHtUYXNrU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvVGFza1NlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0yJyxcbiAgICBhcHBJbmplY3RvcjogW0F1dGhlbnRpY2F0aW9uU2VydmljZSwgVGFza1NlcnZpY2VdXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gICAgZGlyZWN0aXZlczogW05nRm9yXVxufSlcbmV4cG9ydCBjbGFzcyBUYXNrcyB7XG4gICAgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2U7XG4gICAgdGFza1NlcnZpY2U6IFRhc2tTZXJ2aWNlO1xuICAgIHRhc2tzOiBBcnJheTxUYXNrPjtcbiAgICBuck9mVGFza3M6IG51bWJlcjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgdGFza1NlcnZpY2U6IFRhc2tTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFza3MudHMgY29uc3RydWN0b3JcIik7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlID0gYXV0aGVudGljYXRpb25TZXJ2aWNlXG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UgPSB0YXNrU2VydmljZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLmdldFRhc2tzKCkudGhlbigob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcyA9IG9iai5hY3Rpb25SZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5uck9mVGFza3MgPSB0aGlzLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIGdldHRpbmcgdGFza3M6IFwiICsgdGhpcy50YXNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkLCBwbGVhc2UgbG9nIGluLlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVGFzayhldmVudCwgbmV3bmFtZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IG5hdGl2ZSBwYWdlIHJlZnJlc2hcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXduYW1lLnZhbHVlKTtcbiAgICAgICAgdGhpcy50YXNrU2VydmljZS5hZGRUYXNrKG5ld1Rhc2spLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgbmV3VGFzay5zZXRJZChvYmouYWN0aW9uUmVzdWx0Ll9pZCk7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBuZXduYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE8gY2F0Y2ggZXJyb3JcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=