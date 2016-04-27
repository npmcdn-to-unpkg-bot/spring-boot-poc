System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'angular2/router', './crud'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, crud_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (crud_1_1) {
                crud_1 = crud_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.msg = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/template.html',
                        directives: [router_1.ROUTER_DIRECTIVES, crud_1.CreateComponent, crud_1.ReadComponent, crud_1.UpdateComponent, crud_1.DeleteComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/create', name: 'Create', component: crud_1.CreateComponent },
                        { path: '/read', name: 'Read', component: crud_1.ReadComponent },
                        { path: '/update', name: 'Update', component: crud_1.UpdateComponent },
                        { path: '/delete', name: 'Delete', component: crud_1.DeleteComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map