System.register(['angular2/core', 'angular2/router', './../../models/graph', './../../services/graph.service'], function(exports_1, context_1) {
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
    var core_1, router_1, graph_1, graph_service_1;
    var GraphDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (graph_1_1) {
                graph_1 = graph_1_1;
            },
            function (graph_service_1_1) {
                graph_service_1 = graph_service_1_1;
            }],
        execute: function() {
            GraphDetailComponent = (function () {
                function GraphDetailComponent(_graphService, _routeParams) {
                    this._graphService = _graphService;
                    this._routeParams = _routeParams;
                }
                GraphDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._graphService.getGraph(id)
                        .then(function (graph) { return _this.graph = graph; });
                };
                GraphDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', graph_1.Graph)
                ], GraphDetailComponent.prototype, "graph", void 0);
                GraphDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-graph-detail',
                        templateUrl: 'app/components/graphs/views/graphs/graph-detail.component.html',
                        styleUrls: ['app/assets/css/graph-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [graph_service_1.GraphService, router_1.RouteParams])
                ], GraphDetailComponent);
                return GraphDetailComponent;
            }());
            exports_1("GraphDetailComponent", GraphDetailComponent);
        }
    }
});
//# sourceMappingURL=graph-detail.component.js.map