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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFFekQsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0UscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFFdkQ7SUFZSUEsZUFBbUJBLHFCQUE0Q0EsRUFBU0EsV0FBd0JBO1FBWnBHQyxpQkFzQ0NBO1FBMUJzQkEsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFBU0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO1FBQzVGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVwQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EscUJBQXFCQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsR0FBR0E7Z0JBQ2pDQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQTtnQkFDOUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDBCQUEwQkEsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDaEVBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQUNBLEtBQUtBO2dCQUNYQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNqQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsMkNBQTJDQSxDQUFDQTtRQUMvREEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREQsdUJBQU9BLEdBQVBBLFVBQVFBLEtBQUtBLEVBQUVBLE9BQU9BO1FBQXRCRSxpQkFTQ0E7UUFSR0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLFdBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxHQUFHQTtZQUN2Q0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDcENBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ3pCQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFUEEsQ0FBQ0E7SUFyQ0xGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsWUFBWUEsRUFBRUEsQ0FBQ0EsNkNBQXFCQSxFQUFFQSx5QkFBV0EsQ0FBQ0E7U0FDckRBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLGdEQUFnREE7WUFDN0RBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtTQUN0QkEsQ0FBQ0E7O2NBK0JEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQXRDQSxJQXNDQztBQTlCWSxhQUFLLFFBOEJqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdGFza3MvdGFza3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQge1Rhc2t9IGZyb20gJ2NvbXBvbmVudHMvdGFza3MvdGFzayc7XG5pbXBvcnQge1Rhc2tTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9UYXNrU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTInLFxuICAgIHZpZXdJbmplY3RvcjogW0F1dGhlbnRpY2F0aW9uU2VydmljZSwgVGFza1NlcnZpY2VdXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gICAgZGlyZWN0aXZlczogW05nRm9yXVxufSlcbmV4cG9ydCBjbGFzcyBUYXNrcyB7XG4gICAgdGFza3M6IEFycmF5PFRhc2s+O1xuICAgIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHVibGljIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tzLnRzIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0VGFza3MoKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzID0gb2JqLmFjdGlvblJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIGdldHRpbmcgdGFza3M6IFwiICsgdGhpcy50YXNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkLCBwbGVhc2UgbG9nIGluLlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVGFzayhldmVudCwgbmV3bmFtZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IG5hdGl2ZSBwYWdlIHJlZnJlc2hcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXduYW1lLnZhbHVlKTtcbiAgICAgICAgdGhpcy50YXNrU2VydmljZS5hZGRUYXNrKG5ld1Rhc2spLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgbmV3VGFzay5zZXRJZChvYmouYWN0aW9uUmVzdWx0Ll9pZCk7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBuZXduYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE8gY2F0Y2ggZXJyb3JcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=