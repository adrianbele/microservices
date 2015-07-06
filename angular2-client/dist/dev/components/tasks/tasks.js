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
var task_1 = require('components/tasks/task');
var TaskService_1 = require('../../services/TaskService');
var Tasks = (function () {
    function Tasks(taskService) {
        var _this = this;
        console.log("tasks.ts constructor");
        this.taskService = taskService;
        var token = localStorage.getItem("jwt");
        this.taskService.getTasks(token).then(function (obj) {
            _this.tasks = obj.actionResult;
            _this.nrOfTasks = _this.tasks.length;
            console.log("finished getting tasks: " + _this.tasks.length);
        });
    }
    Tasks.prototype.addTask = function (event, newname) {
        var _this = this;
        event.preventDefault();
        var token = localStorage.getItem("jwt");
        var newTask = new task_1.Task(newname.value);
        this.taskService.addTask(newTask, token).then(function (obj) {
            newTask.setId(obj.actionResult._id);
            _this.tasks.push(newTask);
            newname.value = "";
        });
    };
    Tasks = __decorate([
        angular2_1.Component({
            selector: 'component-2',
            appInjector: [TaskService_1.TaskService]
        }),
        angular2_1.View({
            templateUrl: './components/tasks/tasks.html?v=0.4.0',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [TaskService_1.TaskService])
    ], Tasks);
    return Tasks;
})();
exports.Tasks = Tasks;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFFekQscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFFdkQ7SUFhSUEsZUFBWUEsV0FBd0JBO1FBYnhDQyxpQkFzQ0NBO1FBeEJPQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUMvQkEsSUFBSUEsS0FBS0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFFeENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEdBQUdBO1lBQ3RDQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQTtZQUM5QkEsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDbkNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDBCQUEwQkEsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDaEVBLENBQUNBLENBQUNBLENBQUNBO0lBRVBBLENBQUNBO0lBRURELHVCQUFPQSxHQUFQQSxVQUFRQSxLQUFLQSxFQUFFQSxPQUFPQTtRQUF0QkUsaUJBV0NBO1FBVkdBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxJQUFJQSxLQUFLQSxHQUFHQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4Q0EsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsV0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFFdENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEdBQUdBO1lBQzlDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNwQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDekJBLE9BQU9BLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ3ZCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVQQSxDQUFDQTtJQXJDTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxXQUFXQSxFQUFFQSxDQUFDQSx5QkFBV0EsQ0FBQ0E7U0FDN0JBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLGdEQUFnREE7WUFDN0RBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtTQUN0QkEsQ0FBQ0E7O2NBK0JEQTtJQUFEQSxZQUFDQTtBQUFEQSxDQXRDQSxBQXNDQ0EsSUFBQTtBQTlCWSxhQUFLLFFBOEJqQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdGFza3MvdGFza3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtUYXNrfSBmcm9tICdjb21wb25lbnRzL3Rhc2tzL3Rhc2snO1xuaW1wb3J0IHtUYXNrU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvVGFza1NlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0yJyxcbiAgICBhcHBJbmplY3RvcjogW1Rhc2tTZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy90YXNrcy90YXNrcy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbn0pXG5leHBvcnQgY2xhc3MgVGFza3Mge1xuICAgIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZTtcbiAgICB0YXNrczogQXJyYXk8YW55PjtcbiAgICBuck9mVGFza3M6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRhc2tzLnRzIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlID0gdGFza1NlcnZpY2U7XG4gICAgICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0XCIpO1xuXG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0VGFza3ModG9rZW4pLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgdGhpcy50YXNrcyA9IG9iai5hY3Rpb25SZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLm5yT2ZUYXNrcyA9IHRoaXMudGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZCBnZXR0aW5nIHRhc2tzOiBcIiArIHRoaXMudGFza3MubGVuZ3RoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE8gY2F0Y2ggZXJyb3JcbiAgICB9XG5cbiAgICBhZGRUYXNrKGV2ZW50LCBuZXduYW1lKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgbmF0aXZlIHBhZ2UgcmVmcmVzaFxuICAgICAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFwiKTtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXduYW1lLnZhbHVlKTtcblxuICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLmFkZFRhc2sobmV3VGFzaywgdG9rZW4pLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgbmV3VGFzay5zZXRJZChvYmouYWN0aW9uUmVzdWx0Ll9pZCk7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBuZXduYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE8gY2F0Y2ggZXJyb3JcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=