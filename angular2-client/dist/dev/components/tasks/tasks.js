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
var EventManager_1 = require("utils/eventbus/EventManager");
var forms_1 = require('angular2/forms');
var Tasks = (function () {
    function Tasks(authenticationService, taskService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.taskService = taskService;
        this.task = new task_1.Task();
        this.eventManager = EventManager_1.EventManager.getInstance();
        console.log("tasks.ts constructor");
        if (this.authenticationService.isLoggedIn()) {
            this.taskService.getTasks().then(function (obj) {
                _this.tasks = obj.actionResult;
                console.log("finished getting tasks: " + _this.tasks.length);
                _this.nrOfTasks = _this.tasks.length;
            }).catch(function (error) {
                _this.eventManager.publish("tasksResult", [false, error.message]);
            });
        }
        else {
            this.eventManager.publish("authenticationStateChange", [false, "You are not authenticated, please log in."]);
        }
    }
    Tasks.prototype.saveTask = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.task && (this.task._id == null || this.task._id == undefined)) {
            var newTask = this.task;
            this.taskService.addTask(newTask).then(function (obj) {
                console.dir(obj);
                newTask.setId(obj.actionResult._id);
                console.log("before push: " + _this.tasks.length);
                _this.nrOfTasks = _this.tasks.push(newTask);
                _this.eventManager.publish("tasksResult", [true, "Added task '" + newTask.getId() + "'"]);
                _this.task = new task_1.Task();
            }).catch(function (error) {
                _this.eventManager.publish("tasksResult", [false, error.message]);
            });
        }
        else {
            this.taskService.updateTask(this.task).then(function (obj) {
                _this.eventManager.publish("tasksResult", [true, "Updated task '" + _this.task._id + "'"]);
                _this.task = new task_1.Task();
            }).catch(function (error) {
                _this.eventManager.publish("tasksResult", [false, error.message]);
            });
        }
    };
    Tasks.prototype.loadTask = function (event, task) {
        event.preventDefault();
        console.log("load task " + task._id);
        this.task = task;
    };
    Tasks = __decorate([
        angular2_1.Component({
            selector: 'component-2',
            viewInjector: [AuthenticationService_1.AuthenticationService, TaskService_1.TaskServiceImpl]
        }),
        angular2_1.View({
            templateUrl: './components/tasks/tasks.html?v=0.7.0',
            directives: [angular2_1.NgFor, angular2_1.NgIf, forms_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService, TaskService_1.TaskServiceImpl])
    ], Tasks);
    return Tasks;
})();
exports.Tasks = Tasks;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLnNhdmVUYXNrIiwiVGFza3MubG9hZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTJDLG1CQUFtQixDQUFDLENBQUE7QUFFL0Qsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0UscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QsNkJBQTJCLDZCQUE2QixDQUFDLENBQUE7QUFFekQsc0JBQTZCLGdCQUFnQixDQUFDLENBQUE7QUFFOUM7SUFjSUEsZUFBbUJBLHFCQUE0Q0EsRUFBU0EsV0FBNEJBO1FBZHhHQyxpQkEyRENBO1FBN0NzQkEsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFBU0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWlCQTtRQUp2R0EsU0FBSUEsR0FBU0EsSUFBSUEsV0FBSUEsRUFBRUEsQ0FBQ0E7UUFFYkEsaUJBQVlBLEdBQWlCQSwyQkFBWUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFHNURBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7UUFFcENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEdBQUdBO2dCQUNqQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7Z0JBQzlCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMv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QUNBO1lBQ3hCQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFDQSxLQUFLQTtnQkFDZEEsS0FBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEVBLENBQUNBLENBQUNBLENBQUNBO1FBQ0pBLENBQUNBO0lBQ0xBLENBQUNBO0lBRUpGLHdCQUFRQSxHQUFSQSxVQUFTQSxLQUFVQSxFQUFFQSxJQUFVQTtRQUM5QkcsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3JDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUNsQkEsQ0FBQ0E7SUExREZIO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtZQUN2QkEsWUFBWUEsRUFBRUEsQ0FBQ0EsNkNBQXFCQSxFQUFFQSw2QkFBZUEsQ0FBQ0E7U0FDekRBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLGdEQUFnREE7WUFDN0RBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxFQUFFQSxlQUFJQSxFQUFFQSxzQkFBY0EsQ0FBQ0E7U0FDNUNBLENBQUNBOztjQW9EREE7SUFBREEsWUFBQ0E7QUFBREEsQ0EzREEsSUEyREM7QUFuRFksYUFBSyxRQW1EakIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoZW50aWNhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHtUYXNrfSBmcm9tICdjb21wb25lbnRzL3Rhc2tzL3Rhc2snO1xuaW1wb3J0IHtUYXNrU2VydmljZUltcGx9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Rhc2tTZXJ2aWNlJztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyfSBmcm9tIFwidXRpbHMvZXZlbnRidXMvRXZlbnRNYW5hZ2VyXCI7XG5cbmltcG9ydCB7Zm9ybURpcmVjdGl2ZXN9IGZyb20gJ2FuZ3VsYXIyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMicsXG4gICAgdmlld0luamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlLCBUYXNrU2VydmljZUltcGxdXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gICAgZGlyZWN0aXZlczogW05nRm9yLCBOZ0lmLCBmb3JtRGlyZWN0aXZlc11cbn0pXG5leHBvcnQgY2xhc3MgVGFza3Mge1xuICAgIHRhc2tzOiBBcnJheTxUYXNrPjtcblx0dGFzazogVGFzayA9IG5ldyBUYXNrKCk7XG5cdG5yT2ZUYXNrczogbnVtYmVyO1xuICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIgPSBFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgcHVibGljIHRhc2tTZXJ2aWNlOiBUYXNrU2VydmljZUltcGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXNrcy50cyBjb25zdHJ1Y3RvclwiKTtcblxuICAgICAgICBpZiAodGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLmdldFRhc2tzKCkudGhlbigob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrcyA9IG9iai5hY3Rpb25SZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaW5pc2hlZCBnZXR0aW5nIHRhc2tzOiBcIiArIHRoaXMudGFza3MubGVuZ3RoKTtcblx0ICAgICAgICAgICAgdGhpcy5uck9mVGFza3MgPSB0aGlzLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuXHQgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwidGFza3NSZXN1bHRcIiwgW2ZhbHNlLCBlcnJvci5tZXNzYWdlXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwiYXV0aGVudGljYXRpb25TdGF0ZUNoYW5nZVwiLCBbZmFsc2UsIFwiWW91IGFyZSBub3QgYXV0aGVudGljYXRlZCwgcGxlYXNlIGxvZyBpbi5cIl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVRhc2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IG5hdGl2ZSBwYWdlIHJlZnJlc2hcbiAgICAgICAgaWYgKHRoaXMudGFzayAmJiAodGhpcy50YXNrLl9pZCA9PSBudWxsIHx8IHRoaXMudGFzay5faWQgPT0gdW5kZWZpbmVkKSkge1xuXHQgICAgICAgIGxldCBuZXdUYXNrID0gdGhpcy50YXNrO1xuXHQgICAgICAgIHRoaXMudGFza1NlcnZpY2UuYWRkVGFzayhuZXdUYXNrKS50aGVuKChvYmopID0+IHtcblx0XHQgICAgICAgIGNvbnNvbGUuZGlyKG9iaik7XG5cdFx0ICAgICAgICBuZXdUYXNrLnNldElkKG9iai5hY3Rpb25SZXN1bHQuX2lkKTtcblx0XHQgICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlIHB1c2g6IFwiICsgdGhpcy50YXNrcy5sZW5ndGgpO1xuXHRcdCAgICAgICAgdGhpcy5uck9mVGFza3MgPSB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG5cdFx0ICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwidGFza3NSZXN1bHRcIiwgW3RydWUsIFwiQWRkZWQgdGFzayAnXCIgKyBuZXdUYXNrLmdldElkKCkgKyBcIidcIl0pO1xuXHRcdCAgICAgICAgdGhpcy50YXNrID0gbmV3IFRhc2soKTtcblx0ICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHQgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJ0YXNrc1Jlc3VsdFwiLCBbZmFsc2UsIGVycm9yLm1lc3NhZ2VdKTtcblx0ICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZVRhc2sodGhpcy50YXNrKS50aGVuKChvYmopID0+IHtcblx0XHQgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnB1Ymxpc2goXCJ0YXNrc1Jlc3VsdFwiLCBbdHJ1ZSwgXCJVcGRhdGVkIHRhc2sgJ1wiICsgdGhpcy50YXNrLl9pZCArIFwiJ1wiXSk7XG5cdFx0ICAgICAgICB0aGlzLnRhc2sgPSBuZXcgVGFzaygpO1xuXHQgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdCAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcInRhc2tzUmVzdWx0XCIsIFtmYWxzZSwgZXJyb3IubWVzc2FnZV0pO1xuXHQgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cdGxvYWRUYXNrKGV2ZW50OiBhbnksIHRhc2s6IFRhc2spOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IG5hdGl2ZSBwYWdlIHJlZnJlc2hcblx0XHRjb25zb2xlLmxvZyhcImxvYWQgdGFzayBcIiArIHRhc2suX2lkKTtcblx0XHR0aGlzLnRhc2sgPSB0YXNrO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=