System.register(['angular2/core', './DemoBean', 'angular2/http', 'rxjs/add/operator/map', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, DemoBean_1, http_1, common_1;
    var CreateComponent, ReadComponent, UpdateComponent, DeleteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DemoBean_1_1) {
                DemoBean_1 = DemoBean_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CreateComponent = (function () {
                function CreateComponent(http) {
                    //model = new DemoBean(123321, 1,'test',1.3);		//TODO - initialize blank form fields for these values.
                    this.model = new DemoBean_1.DemoBean(null, null, '', null);
                    this.http = http;
                }
                CreateComponent.prototype.onSubmit = function (id, str, num, d) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.model = new DemoBean_1.DemoBean(id, num, str, d);
                    this.http.post('http://localhost:8080/create', JSON.stringify(this.model), { headers: headers }).map(function (res) { return res.text(); })
                        .subscribe(function (msg) { return _this.msg = msg; });
                };
                CreateComponent = __decorate([
                    core_1.Component({
                        selector: 'form',
                        directives: [common_1.FORM_DIRECTIVES],
                        templateUrl: './app/templates/createTemplate.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CreateComponent);
                return CreateComponent;
            }());
            exports_1("CreateComponent", CreateComponent);
            ReadComponent = (function () {
                function ReadComponent(http) {
                    var _this = this;
                    http.get('http://localhost:8080/all').map(function (res) { return res.json(); }).subscribe(function (demoBeans) { return _this.demoBeans = demoBeans; });
                }
                ReadComponent = __decorate([
                    core_1.Component({ templateUrl: './app/templates/readTemplate.html' }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ReadComponent);
                return ReadComponent;
            }());
            exports_1("ReadComponent", ReadComponent);
            UpdateComponent = (function () {
                function UpdateComponent() {
                }
                UpdateComponent = __decorate([
                    core_1.Component({ templateUrl: './app/templates/updateTemplate.html' }), 
                    __metadata('design:paramtypes', [])
                ], UpdateComponent);
                return UpdateComponent;
            }());
            exports_1("UpdateComponent", UpdateComponent);
            DeleteComponent = (function () {
                function DeleteComponent(http) {
                    this.http = http;
                    this.response = '';
                }
                DeleteComponent.prototype.onSubmit = function (id) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/jsonp');
                    this.http.get('http://localhost:8080/delete?id=' + id).map(function (data) { return data.text(); }, { headers: headers }).
                        subscribe(function (response) { return _this.response = response; });
                    this.errorFlag = (this.response == 'true');
                    if (this.errorFlag == false)
                        this.msg = 'Bean with id : ' + id + ' not found in the database!';
                    else
                        this.msg = 'Bean with id : ' + id + ' successfully deleted from the database!';
                };
                DeleteComponent = __decorate([
                    core_1.Component({ templateUrl: './app/templates/deleteTemplate.html' }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DeleteComponent);
                return DeleteComponent;
            }());
            exports_1("DeleteComponent", DeleteComponent);
        }
    }
});
//# sourceMappingURL=crud.js.map