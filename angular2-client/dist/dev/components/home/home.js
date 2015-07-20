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
var Home = (function () {
    function Home() {
        console.log("home.ts constructor");
    }
    Home = __decorate([
        angular2_1.Component({
            selector: 'component-1'
        }),
        angular2_1.View({
            templateUrl: './components/home/home.html?v=0.7.1',
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWxEO0lBT0lBO1FBQ0lDLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHFCQUFxQkEsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBVExEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTtTQUMxQkEsQ0FBQ0E7UUFDREEsZUFBSUEsQ0FBQ0E7WUFDRkEsV0FBV0EsRUFBRUEsOENBQThDQTtTQUM5REEsQ0FBQ0E7O2FBS0RBO0lBQURBLFdBQUNBO0FBQURBLENBVkEsSUFVQztBQUpZLFlBQUksT0FJaEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJob21lLnRzIGNvbnN0cnVjdG9yXCIpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=