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
var Tasks = (function () {
    function Tasks(authenticationService, taskService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.taskService = taskService;
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
    Tasks.prototype.addTask = function (event, newname) {
        var _this = this;
        event.preventDefault();
        var newTask = new task_1.Task(newname.value);
        this.taskService.addTask(newTask).then(function (obj) {
            console.dir(obj);
            newTask.setId(obj.actionResult._id);
            console.log("before push: " + _this.tasks.length);
            _this.nrOfTasks = _this.tasks.push(newTask);
            _this.eventManager.publish("tasksResult", [true, "Added task '" + newTask.getId() + "'"]);
            newname.value = "";
        }).catch(function (error) {
            _this.eventManager.publish("tasksResult", [false, error.message]);
        });
    };
    Tasks = __decorate([
        angular2_1.Component({
            selector: 'component-2',
            viewInjector: [AuthenticationService_1.AuthenticationService, TaskService_1.TaskServiceImpl]
        }),
        angular2_1.View({
            templateUrl: './components/tasks/tasks.html?v=0.7.0',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService, TaskService_1.TaskServiceImpl])
    ], Tasks);
    return Tasks;
})();
exports.Tasks = Tasks;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza3MvdGFza3MudHMiXSwibmFtZXMiOlsiVGFza3MiLCJUYXNrcy5jb25zdHJ1Y3RvciIsIlRhc2tzLmFkZFRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTJDLG1CQUFtQixDQUFDLENBQUE7QUFJL0Qsc0NBQW9DLHNDQUFzQyxDQUFDLENBQUE7QUFDM0UscUJBQW1CLHVCQUF1QixDQUFDLENBQUE7QUFDM0MsNEJBQThCLDRCQUE0QixDQUFDLENBQUE7QUFDM0QsNkJBQTJCLDZCQUE2QixDQUFDLENBQUE7QUFFekQ7SUFhSUEsZUFBbUJBLHFCQUE0Q0EsRUFBU0EsV0FBNEJBO1FBYnhHQyxpQkEyQ0NBO1FBOUJzQkEsMEJBQXFCQSxHQUFyQkEscUJBQXFCQSxDQUF1QkE7UUFBU0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWlCQTtRQUY1RkEsaUJBQVlBLEdBQWlCQSwyQkFBWUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7UUFHNURBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7UUFFcENBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEdBQUdBO2dCQUNqQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7Z0JBQzlCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUMvREEsS0FBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDcENBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQUNBLEtBQUtBO2dCQUNkQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSxLQUFLQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDUEEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsMkJBQTJCQSxFQUFFQSxDQUFDQSxLQUFLQSxFQUFFQSwyQ0FBMkNBLENBQUNBLENBQUNBLENBQUNBO1FBQzlHQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVERCx1QkFBT0EsR0FBUEEsVUFBUUEsS0FBS0EsRUFBRUEsT0FBT0E7UUFBdEJFLGlCQWFDQTtRQVpHQSxLQUFLQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtRQUN2QkEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsV0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdENBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEdBQUdBO1lBQzFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNkQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN2Q0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBZUEsR0FBR0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7WUFDakRBLEtBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQzFDQSxLQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxFQUFFQSxDQUFDQSxJQUFJQSxFQUFFQSxjQUFjQSxHQUFHQSxPQUFPQSxDQUFDQSxLQUFLQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0RkEsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQUNBLEtBQUtBO1lBQ2RBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLENBQUNBO1FBQ2xFQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQTFDTEY7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxZQUFZQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLEVBQUVBLDZCQUFlQSxDQUFDQTtTQUN6REEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsZ0RBQWdEQTtZQUM3REEsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLEVBQUVBLGVBQUlBLENBQUNBO1NBQzVCQSxDQUFDQTs7Y0FvQ0RBO0lBQURBLFlBQUNBO0FBQURBLENBM0NBLElBMkNDO0FBbkNZLGFBQUssUUFtQ2pCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90YXNrcy90YXNrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBOZ0ZvciwgTmdJZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuXG4vL2ltcG9ydCB7Zm9ybURpcmVjdGl2ZXN9IGZyb20gJ2FuZ3VsYXIyL2Zvcm1zJztcblxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhlbnRpY2F0aW9uU2VydmljZSc7XG5pbXBvcnQge1Rhc2t9IGZyb20gJ2NvbXBvbmVudHMvdGFza3MvdGFzayc7XG5pbXBvcnQge1Rhc2tTZXJ2aWNlSW1wbH0gZnJvbSAnLi4vLi4vc2VydmljZXMvVGFza1NlcnZpY2UnO1xuaW1wb3J0IHtFdmVudE1hbmFnZXJ9IGZyb20gXCJ1dGlscy9ldmVudGJ1cy9FdmVudE1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMicsXG4gICAgdmlld0luamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlLCBUYXNrU2VydmljZUltcGxdXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG4gICAgZGlyZWN0aXZlczogW05nRm9yLCBOZ0lmXVxufSlcbmV4cG9ydCBjbGFzcyBUYXNrcyB7XG4gICAgdGFza3M6IEFycmF5PFRhc2s+O1xuXHRuck9mVGFza3M6IG51bWJlcjtcbiAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyID0gRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHB1YmxpYyB0YXNrU2VydmljZTogVGFza1NlcnZpY2VJbXBsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGFza3MudHMgY29uc3RydWN0b3JcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrU2VydmljZS5nZXRUYXNrcygpLnRoZW4oKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFza3MgPSBvYmouYWN0aW9uUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWQgZ2V0dGluZyB0YXNrczogXCIgKyB0aGlzLnRhc2tzLmxlbmd0aCk7XG5cdCAgICAgICAgICAgIHRoaXMubnJPZlRhc2tzID0gdGhpcy50YXNrcy5sZW5ndGg7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0ICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcInRhc2tzUmVzdWx0XCIsIFtmYWxzZSwgZXJyb3IubWVzc2FnZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcImF1dGhlbnRpY2F0aW9uU3RhdGVDaGFuZ2VcIiwgW2ZhbHNlLCBcIllvdSBhcmUgbm90IGF1dGhlbnRpY2F0ZWQsIHBsZWFzZSBsb2cgaW4uXCJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFRhc2soZXZlbnQsIG5ld25hbWUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBuYXRpdmUgcGFnZSByZWZyZXNoXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmV3bmFtZS52YWx1ZSk7XG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UuYWRkVGFzayhuZXdUYXNrKS50aGVuKChvYmopID0+IHtcblx0ICAgICAgICBjb25zb2xlLmRpcihvYmopO1xuICAgICAgICAgICAgbmV3VGFzay5zZXRJZChvYmouYWN0aW9uUmVzdWx0Ll9pZCk7XG5cdCAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmUgcHVzaDogXCIgKyB0aGlzLnRhc2tzLmxlbmd0aCk7XG5cdCAgICAgICAgdGhpcy5uck9mVGFza3MgPSB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG5cdCAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIucHVibGlzaChcInRhc2tzUmVzdWx0XCIsIFt0cnVlLCBcIkFkZGVkIHRhc2sgJ1wiICsgbmV3VGFzay5nZXRJZCgpICsgXCInXCJdKTtcbiAgICAgICAgICAgIG5ld25hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0ICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5wdWJsaXNoKFwidGFza3NSZXN1bHRcIiwgW2ZhbHNlLCBlcnJvci5tZXNzYWdlXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==