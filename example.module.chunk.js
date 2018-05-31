webpackJsonp(["example.module"],{

/***/ "./src/app/routes/example/example-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_maps_component__ = __webpack_require__("./src/app/routes/example/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_grid_component__ = __webpack_require__("./src/app/routes/example/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_bootstrap_ngx_bootstrap_component__ = __webpack_require__("./src/app/routes/example/ngx-bootstrap/ngx-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__ = __webpack_require__("./src/app/routes/example/tree/tree.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * example总路由
 */
var routes = [
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_2__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_3__grid_grid_component__["a" /* GridComponent */] },
    { path: 'ngx-bootstrap', component: __WEBPACK_IMPORTED_MODULE_4__ngx_bootstrap_ngx_bootstrap_component__["a" /* NgxBootstrapComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__["a" /* TreeComponent */] }
];
var ExampleRoutingModule = /** @class */ (function () {
    function ExampleRoutingModule() {
    }
    ExampleRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ],
            providers: []
        })
    ], ExampleRoutingModule);
    return ExampleRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/example/example.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModule", function() { return ExampleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_maps_component__ = __webpack_require__("./src/app/routes/example/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__example_routing_module__ = __webpack_require__("./src/app/routes/example/example-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__ = __webpack_require__("./src/app/routes/example/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_grid_base_grid_base_module__ = __webpack_require__("./src/app/shared/grid-base/grid-base.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_bootstrap_ngx_bootstrap_component__ = __webpack_require__("./src/app/routes/example/ngx-bootstrap/ngx-bootstrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__ = __webpack_require__("./src/app/routes/example/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_tree_base_tree_base_module__ = __webpack_require__("./src/app/shared/tree-base/tree-base.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_map_map_module__ = __webpack_require__("./src/app/shared/map/map.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__example_routing_module__["a" /* ExampleRoutingModule */],
                // ngx-components
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["c" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["g" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["i" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["j" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["k" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["l" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["m" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["n" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["o" /* SortableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["p" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["q" /* TimepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["r" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["s" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__shared_grid_base_grid_base_module__["a" /* GridBaseModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_tree_base_tree_base_module__["a" /* TreeBaseModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_map_map_module__["a" /* MapModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__["a" /* GridComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_bootstrap_ngx_bootstrap_component__["a" /* NgxBootstrapComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__["a" /* TreeComponent */]
            ]
        })
    ], ExampleModule);
    return ExampleModule;
}());



/***/ }),

/***/ "./src/app/routes/example/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-content\">\n\t<div>\n\t\t<alert type=\"info\">\n\t\t\t表格\n\t\t</alert>\n\t</div>\n\t<div class=\"c-content-inner container-fluid\">\n\t\t<app-grid-base (onRowClicked)=\"rowClick($event)\"\n\t\t\t\t\t   [columnDefs]=\"columnDefs\"\n\t\t\t\t\t   [rowData]=\"rowData\"\n\t\t\t\t\t   [sizeColumnsToFit]=\"true\"\n\t\t\t\t\t   [ttars]=\"ttars\"\n\t\t></app-grid-base>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/example/grid/grid.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/example/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_grid_base_grid_base_component__ = __webpack_require__("./src/app/shared/grid-base/grid-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_toast_service_toast_service__ = __webpack_require__("./src/app/shared/toast/service/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridComponent = /** @class */ (function () {
    function GridComponent(toastService) {
        var _this = this;
        this.toastService = toastService;
        this.rowClick = function (data) {
            console.log(data);
        };
        this.setData = function () {
            var data = [];
            for (var i = 0; i < 500; i++) {
                data.push({
                    make: "Toyota",
                    model: "Celica",
                    price: 35000
                });
            }
            setTimeout(function () { return _this.grid.setGridData(data); });
        };
        this.test = function () {
            console.log("asdfasdfasd");
        };
        this.create = function () {
            _this.toastService.confirm('确定删除?').subscribe(function (res) { return res.resolved ? _this.toastService.info('sdfaasd') : _this.toastService.success('sdfaasd'); });
        };
        this.columnDefs = [
            { headerName: "Make", field: "make", width: 300 },
            { headerName: "Model", field: "model", width: 300 },
            { headerName: "Price", field: "price", width: 300 }
        ];
        this.rowData = [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];
        this.ttars = [
            { name: '新增', cls: 'btn-success', iconCls: 'fa fa-plus-square-o mr-2', onClick: this.create },
            { name: '删除', cls: 'btn-danger', iconCls: 'fa fa-trash mr-2', onClick: this.test },
            { name: '修改', cls: 'btn-dark', iconCls: 'fa fa-plus-circle mr-2', onClick: this.test },
            { name: '详情', cls: 'btn-success', iconCls: 'fa fa-plus-circle mr-2', onClick: this.test }
        ];
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent.prototype.ngAfterViewInit = function () {
        this.setData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__shared_grid_base_grid_base_component__["a" /* GridBaseComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_grid_base_grid_base_component__["a" /* GridBaseComponent */])
    ], GridComponent.prototype, "grid", void 0);
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__("./src/app/routes/example/grid/grid.component.html"),
            styles: [__webpack_require__("./src/app/routes/example/grid/grid.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_toast_service_toast_service__["a" /* ToastService */]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/routes/example/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-content\">\n\t<div>\n\t\t<alert type=\"info\">\n\t\t\t百度地图\n\t\t</alert>\n\t</div>\n\t<div class=\"c-content-inner container-fluid\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<app-grid-ttar [ttars]=\"ttars\"></app-grid-ttar>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<app-map #testMap (onClicked)=\"click($event)\"></app-map>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<ng-template let-context let-modal=\"modal\" #modalTemplate>\n\t<div class=\"header\">Example</div>\n\t<div class=\"content\">\n\t\t<p>asdfasdf</p>\n\t</div>\n\t<div class=\"actions\">\n\t\t<button class=\"ui red button\" (click)=\"modal.deny('denied')\">Cancel</button>\n\t\t<button class=\"ui green button\" (click)=\"modal.approve('approved')\" autofocus>OK</button>\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/routes/example/maps/maps.component.scss":
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/routes/example/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_semantic_ui__ = __webpack_require__("./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_map_map_component__ = __webpack_require__("./src/app/shared/map/map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsComponent = /** @class */ (function () {
    function MapsComponent(modalService) {
        var _this = this;
        this.modalService = modalService;
        this.panTo = function () {
            _this.testMap.panTo();
        };
        this.zoom = function () {
            _this.testMap.zoom();
        };
        this.infoWindow = function () {
            _this.testMap.infoWindow();
        };
        this.all = function () {
            _this.testMap.all();
        };
        this.ttars = [
            { name: '改变中心', cls: 'btn-success', iconCls: 'fa fa-plus-square-o mr-2', onClick: this.panTo },
            { name: '缩放', cls: 'btn-danger', iconCls: 'fa fa-trash mr-2', onClick: this.zoom },
            { name: '添加标记', cls: 'btn-dark', iconCls: 'fa fa-plus-circle mr-2', onClick: this.infoWindow },
            { name: '添加全景', cls: 'btn-success', iconCls: 'fa fa-plus-circle mr-2', onClick: this.all },
            { name: '位置', cls: 'btn-success', iconCls: 'fa fa-plus-circle mr-2', onClick: this.click }
        ];
    }
    MapsComponent.prototype.open = function () {
        var config = new __WEBPACK_IMPORTED_MODULE_1_ng2_semantic_ui__["e" /* TemplateModalConfig */](this.modalTemplate);
        this.modalService.open(config);
    };
    MapsComponent.prototype.click = function (e) {
        var point = e.point;
        this.testMap.geoc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            // 基础地址信息
            var baseAddress = addComp.province + addComp.city + addComp.district;
            if (addComp.city === addComp.province) {
                baseAddress = addComp.province + addComp.district;
            }
            if (addComp.district.indexOf("市辖区") !== -1) {
                baseAddress = addComp.province + addComp.city;
            }
            console.log(addComp, baseAddress);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_semantic_ui__["a" /* ModalTemplate */])
    ], MapsComponent.prototype, "modalTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('testMap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_map_map_component__["a" /* MapComponent */])
    ], MapsComponent.prototype, "testMap", void 0);
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/routes/example/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/routes/example/maps/maps.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_semantic_ui__["b" /* SuiModalService */]])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/routes/example/ngx-bootstrap/ngx-bootstrap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-content\">\n\t<div>\n\t\t<alert type=\"info\">\n\t\t\tngx-bootstrap\n\t\t</alert>\n\t</div>\n\t<div class=\"c-content-inner container-fluid\">\n\t\t<div class=\"card-body\">\n\t\t\t<accordion>\n\t\t\t\t<accordion-group heading=\"Static Header, initially expanded\">\n\t\t\t\t\tThis content is straight in the template.\n\t\t\t\t</accordion-group>\n\t\t\t\t<accordion-group heading=\"Another group\">\n\t\t\t\t\t<p>Some content</p>\n\t\t\t\t</accordion-group>\n\t\t\t\t<accordion-group heading=\"Another group\">\n\t\t\t\t\t<p>Some content</p>\n\t\t\t\t</accordion-group>\n\t\t\t\t<accordion-group heading=\"Another group\">\n\t\t\t\t\t<p>Some content</p>\n\t\t\t\t</accordion-group>\n\t\t\t</accordion>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<alert type=\"success\">\n\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\n\t\t\t</alert>\n\t\t\t<alert type=\"info\">\n\t\t\t\t<strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n\t\t\t</alert>\n\t\t\t<alert type=\"warning\">\n\t\t\t\t<strong>Warning!</strong> Better check yourself, you're not looking too good.\n\t\t\t</alert>\n\t\t\t<alert type=\"danger\">\n\t\t\t\t<strong>Oh snap!</strong> Change a few things up and try submitting again.\n\t\t\t</alert>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<alert type=\"success\">\n\t\t\t\t<strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert\n\t\t\t\tmessage</a>.\n\t\t\t</alert>\n\t\t\t<alert type=\"info\">\n\t\t\t\t<strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's\n\t\t\t\tnot\n\t\t\t\tsuper important.\n\t\t\t</alert>\n\t\t\t<alert type=\"warning\">\n\t\t\t\t<strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too\n\t\t\t\tgood</a>.\n\t\t\t</alert>\n\t\t\t<alert type=\"danger\">\n\t\t\t\t<strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting\n\t\t\t\tagain.\n\t\t\t</alert>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<alert type=\"success\">\n\t\t\t\t<h4 class=\"alert-heading\">Well done!</h4>\n\t\t\t\t<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit\n\t\t\t\t\tlonger\n\t\t\t\t\tso that you can see how spacing within an alert works with this kind of content.</p>\n\t\t\t\t<p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n\t\t\t</alert>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<div *ngFor=\"let alert of alerts\">\n\t\t\t\t<alert [type]=\"alert.type\" [dismissible]=\"dismissible\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}\n\t\t\t\t</alert>\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible\n\t\t\t</button>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<div *ngFor=\"let alert of alerts1\">\n\t\t\t\t<alert [type]=\"alert.type\"><span [innerHtml]=\"alert.msg\"></span></alert>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<alert type=\"success\">{{messages[index]}}</alert>\n\n\t\t\t<div *ngIf=\"index !== messages.length -1; else elseBlock\">\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"changeText()\">Change text</button>\n\t\t\t</div>\n\t\t\t<ng-template #elseBlock>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"index = 0\">Reset</button>\n\t\t\t</ng-template>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<p>If you missed alert under me, just press <code>Add more</code> button</p>\n\t\t\t<div *ngFor=\"let alert of alerts2\">\n\t\t\t\t<alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed1(alert)\">{{ alert.msg\n\t\t\t\t\t}}\n\t\t\t\t</alert>\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add more</button>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<alert type=\"md-color\">\n\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\n\t\t\t</alert>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<alert type=\"md-local\">\n\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\n\t\t\t</alert>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<alert>\n\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\n\t\t\t</alert>\n\t\t\t<alert type=\"info\">\n\t\t\t\t<strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n\t\t\t</alert>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\">\n\t\t\t\tSingle Button\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<pre class=\"card card-block card-header\">{{checkModel | json}}</pre>\n\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.left\"\n\t\t\t\t\t   btnCheckbox>Left</label>\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.middle\" btnCheckbox>Middle</label>\n\t\t\t\t<label class=\"btn btn-primary\" [(ngModel)]=\"checkModel.right\" btnCheckbox>Right</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<pre class=\"card card-block card-header\">{{singleModel}}</pre>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\"\n\t\t\t\t\t[(ngModel)]=\"singleModel\" btnCheckbox\n\t\t\t\t\tbtnCheckboxTrue=\"1\" btnCheckboxFalse=\"0\">\n\t\t\t\tSingle Toggle\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<div class=\"card-header\">排序</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\n\t\t\t\t\t<bs-sortable\n\t\t\t\t\t\t[(ngModel)]=\"itemStringsLeft\"\n\t\t\t\t\t\titemClass=\"sortable-item\"\n\t\t\t\t\t\titemActiveClass=\"sortable-item-active\"\n\t\t\t\t\t\tplaceholderItem=\"Drag here\"\n\t\t\t\t\t\tplaceholderClass=\"placeholderStyle\"\n\t\t\t\t\t\twrapperClass=\"sortable-wrapper\"\n\t\t\t\t\t></bs-sortable>\n\t\t\t\t\t<pre class=\"card card-block card-header\">model: {{ itemStringsLeft | json }}</pre>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-6 col-6 col-md-5 col-lg-3\">\n\t\t\t\t\t<bs-sortable\n\t\t\t\t\t\t[(ngModel)]=\"itemStringsRight\"\n\t\t\t\t\t\titemClass=\"sortable-item\"\n\t\t\t\t\t\titemActiveClass=\"sortable-item-active\"\n\t\t\t\t\t\tplaceholderItem=\"Drag here\"\n\t\t\t\t\t\tplaceholderClass=\"sortable-item\"\n\t\t\t\t\t\twrapperClass=\"sortable-wrapper\"\n\t\t\t\t\t></bs-sortable>\n\t\t\t\t\t<pre class=\"card card-block card-header\">model: {{ itemStringsRight | json }}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button>\n\t\t\t<ng-template #template>\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h4 class=\"modal-title pull-left\">Modal</h4>\n\t\t\t\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\tThis is a modal.\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer text-right\">\n\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"modalRef.hide()\">取消</button>\n\t\t\t\t\t<button class=\"btn btn-success\">保存</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal.show()\">模板驱动表单</button>\n\n\t\t\t<div class=\"modal\" bsModal #staticModal=\"bs-modal\" [config]=\"config\">\n\t\t\t\t<div class=\"modal-dialog modal-lg\">\n\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t<h4 class=\"modal-title pull-left\">模板驱动表单</h4>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t(click)=\"staticModal.hide()\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<form #testForm=\"ngForm\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">姓名</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"user.name\" name=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t   required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">密码</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"user.pwd\" name=\"pwd\"\n\t\t\t\t\t\t\t\t\t\t\t   required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-footer text-right\">\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"staticModal.hide()\">取消</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-success\" [disabled]=\"!testForm.valid\"\n\t\t\t\t\t\t\t\t\t(click)=\"onTemplateSave(staticModal)\">保存\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"staticModal1.show()\">模型驱动表单</button>\n\n\t\t\t<div class=\"modal\" bsModal #staticModal1=\"bs-modal\" [config]=\"config\">\n\t\t\t\t<div class=\"modal-dialog modal-lg\" style=\"top: 20%;\">\n\t\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t<h4 class=\"modal-title pull-left\">模型驱动表单</h4>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\n\t\t\t\t\t\t\t\t\t(click)=\"staticModal1.hide()\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t<form [formGroup]=\"form\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-1 col-form-label\">姓名</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" formControlName=\"name\" id=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t   required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-1 col-form-label\">密码</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" formControlName=\"pwd\" id=\"pwd\" required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"modal-footer text-right\">\n\t\t\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"staticModal1.hide()\">取消</button>\n\t\t\t\t\t\t\t<button class=\"btn btn-success\" [disabled]=\"!form.valid\"\n\t\t\t\t\t\t\t\t\t(click)=\"onModelSave(staticModal1)\">保存\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<img src=\"../../../../assets/img/1.jpg\" alt=\"测试图片1\" class=\"w-25 mr-auto boximg\" (click)=\"openModal1($event, template1)\">\n\t\t\t<img src=\"../../../../assets/img/2.jpg\" alt=\"测试图片1\" class=\"w-25 mr-auto boximg\" (click)=\"openModal1($event, template1)\">\n\t\t\t<img src=\"../../../../assets/img/3.jpg\" alt=\"测试图片1\" class=\"w-25 mr-auto boximg\" (click)=\"openModal1($event, template1)\">\n\t\t\t<ng-template #template1>\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h4 class=\"modal-title pull-left\">浏览图片</h4>\n\t\t\t\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<carousel [interval] = \"false\">\n\t\t\t\t\t\t<slide *ngFor=\"let item of imgs\">\n\t\t\t\t\t\t\t<img src=\"{{item.src}}\" alt=\"{{item.alt}}\">\n\t\t\t\t\t\t</slide>\n\t\t\t\t\t</carousel>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t\t<button class=\"btn btn-danger\" (click)=\"openInfo()\">sdfsadfasdf</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/example/ngx-bootstrap/ngx-bootstrap.component.scss":
/***/ (function(module, exports) {

module.exports = ".alert-md-color {\n  background-color: #7B1FA2;\n  border-color: #4A148C;\n  color: #fff; }\n\n.alert-md-local {\n  background-color: #009688;\n  border-color: #00695C;\n  color: #fff; }\n\n.sortable-item {\n  padding: 6px 12px;\n  margin-bottom: 4px;\n  font-size: 14px;\n  line-height: 1.4em;\n  text-align: center;\n  cursor: -webkit-grab;\n  cursor: grab;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  border-color: #adadad; }\n"

/***/ }),

/***/ "./src/app/routes/example/ngx-bootstrap/ngx-bootstrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAlertConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxBootstrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_model_toast_model__ = __webpack_require__("./src/app/shared/toast/model/toast-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_toast_service_toast_service__ = __webpack_require__("./src/app/shared/toast/service/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function getAlertConfig() {
    return Object.assign(new __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* AlertConfig */](), { type: 'success' });
}
var NgxBootstrapComponent = /** @class */ (function () {
    function NgxBootstrapComponent(sanitizer, modalService, fb, toastService) {
        this.modalService = modalService;
        this.fb = fb;
        this.toastService = toastService;
        this.dismissible = true;
        this.defaultAlerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
        this.alerts = this.defaultAlerts;
        this.alerts1 = [
            {
                type: 'success',
                msg: "<strong>Well done!</strong> You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "<strong>Heads up!</strong> This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
            }
        ];
        this.alerts2 = [{
                type: 'success',
                msg: "Well done! You successfully read this important alert message. (added: " + new Date().toLocaleTimeString() + ")",
                timeout: 5000
            }];
        this.index = 0;
        this.messages = [
            'You successfully read this important alert message.',
            'Now this text is different from what it was before. Go ahead and click the button one more time',
            'Well done! Click reset button and you\'ll see the first message'
        ];
        this.checkModel = { left: false, middle: true, right: false };
        this.singleModel = '1';
        this.itemStringsLeft = [
            'Windstorm',
            'Bombasto',
            'Magneta',
            'Tornado'
        ];
        this.itemStringsRight = ['Mr. O', 'Tomato'];
        this.config = {
            ignoreBackdropClick: true,
            animated: true
        };
        this.user = {};
        this.activeSlideIndex = 0;
        this.alerts1 = this.alerts1.map(function (alert) { return ({
            type: alert.type,
            msg: sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, alert.msg)
        }); });
        this.form = fb.group({
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(20)]),
            'pwd': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
    }
    NgxBootstrapComponent.prototype.reset = function () {
        this.alerts = this.defaultAlerts;
    };
    NgxBootstrapComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    NgxBootstrapComponent.prototype.ngOnInit = function () {
    };
    NgxBootstrapComponent.prototype.changeText = function () {
        if (this.messages.length - 1 !== this.index) {
            this.index++;
        }
    };
    NgxBootstrapComponent.prototype.add = function () {
        this.alerts2.push({
            type: 'info',
            msg: "This alert will be closed in 5 seconds (added: " + new Date().toLocaleTimeString() + ")",
            timeout: 5000
        });
    };
    NgxBootstrapComponent.prototype.onClosed1 = function (dismissedAlert) {
        this.alerts2 = this.alerts2.filter(function (alert) { return alert !== dismissedAlert; });
    };
    NgxBootstrapComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, this.config);
    };
    NgxBootstrapComponent.prototype.openModal1 = function (img) {
        this.imgs = document.querySelectorAll('.boximg');
        var imgsArray = Array.from(this.imgs);
        // this.activeSlideIndex = imgsArray.indexOf(img.path[0]);
        this.modalRef = this.modalService.show(this.template1, this.config);
    };
    NgxBootstrapComponent.prototype.onTemplateSave = function (modal) {
        console.log('Template Submit Result:', this.user, modal);
    };
    NgxBootstrapComponent.prototype.onModelSave = function (modal) {
        console.log('Model Submit Result:', this.form.value, modal);
        modal.hide();
    };
    NgxBootstrapComponent.prototype.openInfo = function () {
        var toastCfg = new __WEBPACK_IMPORTED_MODULE_4__shared_toast_model_toast_model__["a" /* ToastConfig */](__WEBPACK_IMPORTED_MODULE_4__shared_toast_model_toast_model__["b" /* ToastType */].INFO, '这是一条INFO消息!', '', 3000);
        this.toastService.toast(toastCfg);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('template1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], NgxBootstrapComponent.prototype, "template1", void 0);
    NgxBootstrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ngx-bootstrap',
            template: __webpack_require__("./src/app/routes/example/ngx-bootstrap/ngx-bootstrap.component.html"),
            styles: [__webpack_require__("./src/app/routes/example/ngx-bootstrap/ngx-bootstrap.component.scss")],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* AlertConfig */],
                    useFactory: getAlertConfig
                }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["e" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__shared_toast_service_toast_service__["a" /* ToastService */]])
    ], NgxBootstrapComponent);
    return NgxBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/routes/example/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-content\">\n\t<div>\n\t\t<alert type=\"info\">\n\t\t\t百度地图\n\t\t</alert>\n\t</div>\n\t<div class=\"c-content-inner container-fluid\">\n\t\t<app-tree-base [nodes]=\"nodes\" [showCheckbox]=\"true\" treeTitle=\"测试\"></app-tree-base>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/example/tree/tree.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/example/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.nodes = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { id: 2, name: 'child1' },
                    { id: 3, name: 'child2' }
                ]
            },
            {
                id: 4,
                name: 'root2',
                children: [
                    { id: 5, name: 'child2.1' },
                    {
                        id: 6,
                        name: 'child2.2',
                        children: [
                            { id: 7, name: 'subsub' }
                        ]
                    }
                ]
            }
        ];
    }
    TreeComponent.prototype.ngOnInit = function () {
    };
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__("./src/app/routes/example/tree/tree.component.html"),
            styles: [__webpack_require__("./src/app/routes/example/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ })

});
//# sourceMappingURL=example.module.chunk.js.map