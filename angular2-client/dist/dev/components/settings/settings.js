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
            appInjector: [AuthenticationService_1.AuthenticationService]
        }),
        angular2_1.View({
            templateUrl: './components/settings/settings.html?v=0.4.0',
        }), 
        __metadata('design:paramtypes', [AuthenticationService_1.AuthenticationService])
    ], Settings);
    return Settings;
})();
exports.Settings = Settings;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJTZXR0aW5ncy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5QkFBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNsRCxzQ0FBb0Msc0NBQXNDLENBQUMsQ0FBQTtBQUUzRTtJQVdJQSxrQkFBWUEscUJBQTRDQTtRQUNwREMsSUFBSUEsQ0FBQ0EscUJBQXFCQSxHQUFHQSxxQkFBcUJBLENBQUNBO1FBQ25EQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFkTEQ7UUFBQ0Esb0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxXQUFXQSxFQUFFQSxDQUFDQSw2Q0FBcUJBLENBQUNBO1NBQ3ZDQSxDQUFDQTtRQUNEQSxlQUFJQSxDQUFDQTtZQUNGQSxXQUFXQSxFQUFFQSxzREFBc0RBO1NBQ3RFQSxDQUFDQTs7aUJBU0RBO0lBQURBLGVBQUNBO0FBQURBLENBZkEsQUFlQ0EsSUFBQTtBQVJZLGdCQUFRLFdBUXBCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aGVudGljYXRpb25TZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtNCcsXG4gICAgYXBwSW5qZWN0b3I6IFtBdXRoZW50aWNhdGlvblNlcnZpY2VdXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmh0bWw/dj08JT0gVkVSU0lPTiAlPicsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcbiAgICBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZSA9IGF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=