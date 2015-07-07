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
        this.taskService.getTasks().then(function (obj) {
            _this.tasks = obj.actionResult;
            _this.nrOfTasks = _this.tasks.length;
            console.log("finished getting tasks: " + _this.tasks.length);
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQXFDLG1CQUFtQixDQUFDLENBQUE7QUFFekQscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFFdkQ7SUFhSUEsZUFBWUEsV0FBd0JBO1FBYnhDQyxpQkFtQ0NBO1FBckJPQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxzQkFBc0JBLENBQUNBLENBQUNBO1FBQ3BDQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtRQUUvQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsR0FBR0E7WUFDakNBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBO1lBQzlCQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQTtZQUNuQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtRQUNoRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFUEEsQ0FBQ0E7SUFFREQsdUJBQU9BLEdBQVBBLFVBQVFBLEtBQUtBLEVBQUVBLE9BQU9BO1FBQXRCRSxpQkFTQ0E7UUFSR0EsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLFdBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3RDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxHQUFHQTtZQUN2Q0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDcENBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ3pCQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUN2QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFUEEsQ0FBQ0E7SUFsQ0xGO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsV0FBV0EsRUFBRUEsQ0FBQ0EseUJBQVdBLENBQUNBO1NBQzdCQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxXQUFXQSxFQUFFQSxnREFBZ0RBO1lBQzdEQSxVQUFVQSxFQUFFQSxDQUFDQSxnQkFBS0EsQ0FBQ0E7U0FDdEJBLENBQUNBOztjQTRCREE7SUFBREEsWUFBQ0E7QUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7QUEzQlksYUFBSyxRQTJCakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7VGFza30gZnJvbSAnY29tcG9uZW50cy90YXNrcy90YXNrJztcbmltcG9ydCB7VGFza1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Rhc2tTZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMicsXG4gICAgYXBwSW5qZWN0b3I6IFtUYXNrU2VydmljZV1cbn0pXG5AVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvdGFza3MvdGFza3MuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgICBkaXJlY3RpdmVzOiBbTmdGb3JdXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tzIHtcbiAgICB0YXNrU2VydmljZTogVGFza1NlcnZpY2U7XG4gICAgdGFza3M6IEFycmF5PGFueT47XG4gICAgbnJPZlRhc2tzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXNrU2VydmljZTogVGFza1NlcnZpY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrcy50cyBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgdGhpcy50YXNrU2VydmljZSA9IHRhc2tTZXJ2aWNlO1xuXG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0VGFza3MoKS50aGVuKChvYmopID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSBvYmouYWN0aW9uUmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5uck9mVGFza3MgPSB0aGlzLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWQgZ2V0dGluZyB0YXNrczogXCIgKyB0aGlzLnRhc2tzLmxlbmd0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUT0RPIGNhdGNoIGVycm9yXG4gICAgfVxuXG4gICAgYWRkVGFzayhldmVudCwgbmV3bmFtZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IG5hdGl2ZSBwYWdlIHJlZnJlc2hcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhuZXduYW1lLnZhbHVlKTtcbiAgICAgICAgdGhpcy50YXNrU2VydmljZS5hZGRUYXNrKG5ld1Rhc2spLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgbmV3VGFzay5zZXRJZChvYmouYWN0aW9uUmVzdWx0Ll9pZCk7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICBuZXduYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE8gY2F0Y2ggZXJyb3JcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=