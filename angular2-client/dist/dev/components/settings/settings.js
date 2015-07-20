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
var Settings = (function () {
    function Settings(authenticationService) {
        this.authenticationService = authenticationService;
        this.message = null;
    }
    Settings = __decorate([
        angular2_1.Component({
            selector: 'component-4',
            viewInjector: [AuthenticationService_1.AuthenticationService]
        }),
        angular2_1.View({
            templateUrl: './components/settings/settings.html?v=0.7.1',
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
    ], Settings);
    return Settings;
})();
exports.Settings = Settings;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJTZXR0aW5ncy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCxzQ0FBb0Msc0NBQXNDLENBQUMsQ0FBQTtBQUUzRTtJQVVJQSxrQkFBbUJBLHFCQUE0Q0E7UUFBNUNDLDBCQUFxQkEsR0FBckJBLHFCQUFxQkEsQ0FBdUJBO1FBQzNEQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFaTEQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxZQUFZQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLENBQUNBO1NBQ3hDQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxXQUFXQSxFQUFFQSxzREFBc0RBO1NBQ3RFQSxDQUFDQTs7aUJBT0RBO0lBQURBLGVBQUNBO0FBQURBLENBYkEsSUFhQztBQU5ZLGdCQUFRLFdBTXBCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtNCcsXG4gICAgdmlld0luamVjdG9yOiBbQXV0aGVudGljYXRpb25TZXJ2aWNlXVxufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9