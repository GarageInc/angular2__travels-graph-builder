System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var BaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            BaseService = (function () {
                function BaseService(http) {
                    this.http = http;
                }
                BaseService.prototype.getHeaders = function () {
                    var headers = new http_1.Headers();
                    headers.set('Content-Type', 'application/x-www-form-urlencoded');
                    headers.set('Accept', 'text/xml');
                    return headers;
                };
                BaseService.prototype.post = function (url, params) {
                    var bodyArray = [];
                    for (var key in params) {
                        var value = params[key];
                        bodyArray.push(key + '=' + encodeURIComponent(value));
                    }
                    var body = bodyArray.join("&");
                    var headers = this.getHeaders();
                    console.log(body);
                    return this.http
                        .post(url, body, {
                        headers: headers
                    });
                };
                BaseService.prototype.extractData = function (res) {
                };
                BaseService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                BaseService.GATEWAY_GRAPHS = "http://127.0.0.1:3000/index.php/graph/index";
                BaseService.GATEWAY_USER_LOGIN = "http://127.0.0.1:3000/index.php/site/login";
                BaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BaseService);
                return BaseService;
            }());
            exports_1("BaseService", BaseService);
        }
    }
});
//# sourceMappingURL=base.service.js.map