webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<flash-messages></flash-messages>\r\n<!-- <div class=\"container\"> -->\r\n    <!-- <br> -->\r\n    <router-outlet></router-outlet>\r\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sensor Layout';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_add_sensor_add_sensor_component__ = __webpack_require__("./src/app/components/add-sensor/add-sensor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_gateway_add_gateway_component__ = __webpack_require__("./src/app/components/add-gateway/add-gateway.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_add_site_add_site_component__ = __webpack_require__("./src/app/components/add-site/add-site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_add_type_add_type_component__ = __webpack_require__("./src/app/components/add-type/add-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_add_manufacturer_add_manufacturer_component__ = __webpack_require__("./src/app/components/add-manufacturer/add-manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_add_protocol_add_protocol_component__ = __webpack_require__("./src/app/components/add-protocol/add-protocol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_multiple_choice_multiple_choice_component__ = __webpack_require__("./src/app/components/multiple-choice/multiple-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_sidenav_sidenav_component__ = __webpack_require__("./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_sensor_sensor_component__ = __webpack_require__("./src/app/components/sensor/sensor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_gateway_gateway_component__ = __webpack_require__("./src/app/components/gateway/gateway.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_site_site_component__ = __webpack_require__("./src/app/components/site/site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_add_element_add_element_component__ = __webpack_require__("./src/app/components/add-element/add-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_edit_element_edit_element_component__ = __webpack_require__("./src/app/components/edit-element/edit-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_edit_sensor_edit_sensor_component__ = __webpack_require__("./src/app/components/edit-sensor/edit-sensor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_edit_gateway_edit_gateway_component__ = __webpack_require__("./src/app/components/edit-gateway/edit-gateway.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_edit_site_edit_site_component__ = __webpack_require__("./src/app/components/edit-site/edit-site.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_edit_type_edit_type_component__ = __webpack_require__("./src/app/components/edit-type/edit-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_edit_manufacturer_edit_manufacturer_component__ = __webpack_require__("./src/app/components/edit-manufacturer/edit-manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_edit_protocol_edit_protocol_component__ = __webpack_require__("./src/app/components/edit-protocol/edit-protocol.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules








// Services



// Components


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-element', component: __WEBPACK_IMPORTED_MODULE_29__components_add_element_add_element_component__["a" /* AddElementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-element', component: __WEBPACK_IMPORTED_MODULE_30__components_edit_element_edit_element_component__["a" /* EditElementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-type', component: __WEBPACK_IMPORTED_MODULE_21__components_add_type_add_type_component__["a" /* AddTypeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-protocol', component: __WEBPACK_IMPORTED_MODULE_23__components_add_protocol_add_protocol_component__["a" /* AddProtocolComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-manufacturer', component: __WEBPACK_IMPORTED_MODULE_22__components_add_manufacturer_add_manufacturer_component__["a" /* AddManufacturerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sensor', component: __WEBPACK_IMPORTED_MODULE_26__components_sensor_sensor_component__["a" /* SensorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-gateway', component: __WEBPACK_IMPORTED_MODULE_18__components_add_gateway_add_gateway_component__["a" /* AddGatewayComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add-site', component: __WEBPACK_IMPORTED_MODULE_19__components_add_site_add_site_component__["a" /* AddSiteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_15__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_add_sensor_add_sensor_component__["a" /* AddSensorComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_add_gateway_add_gateway_component__["a" /* AddGatewayComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_add_site_add_site_component__["a" /* AddSiteComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_add_type_add_type_component__["a" /* AddTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_add_manufacturer_add_manufacturer_component__["a" /* AddManufacturerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_add_protocol_add_protocol_component__["a" /* AddProtocolComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_multiple_choice_multiple_choice_component__["a" /* MultipleChoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_sensor_sensor_component__["a" /* SensorComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_gateway_gateway_component__["a" /* GatewayComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_site_site_component__["a" /* SiteComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_add_element_add_element_component__["a" /* AddElementComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_edit_element_edit_element_component__["a" /* EditElementComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_edit_sensor_edit_sensor_component__["a" /* EditSensorComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_edit_gateway_edit_gateway_component__["a" /* EditGatewayComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_edit_site_edit_site_component__["a" /* EditSiteComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_edit_type_edit_type_component__["a" /* EditTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_edit_manufacturer_edit_manufacturer_component__["a" /* EditManufacturerComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_edit_protocol_edit_protocol_component__["a" /* EditProtocolComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatTooltipModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__services_validation_validation_service__["a" /* ValidationService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-element/add-element.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-element/add-element.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n    <mat-tab label=\"Sensor\"  position=11>\r\n      <app-add-sensor></app-add-sensor>\r\n    </mat-tab>\r\n    <mat-tab label=\"Gateway\">\r\n      <app-add-gateway></app-add-gateway>\r\n    </mat-tab>\r\n    <mat-tab label=\"Site\">\r\n      <app-add-site></app-add-site>\r\n    </mat-tab>\r\n    <mat-tab label=\"Type\">\r\n      <app-add-type></app-add-type>\r\n    </mat-tab>\r\n    <mat-tab label=\"Manufacturer\">\r\n      <app-add-manufacturer></app-add-manufacturer>\r\n    </mat-tab>\r\n    <mat-tab label=\"Protocol\">\r\n      <app-add-protocol></app-add-protocol>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/add-element/add-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddElementComponent; });
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

var AddElementComponent = /** @class */ (function () {
    function AddElementComponent() {
    }
    AddElementComponent.prototype.ngOnInit = function () {
    };
    AddElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-element',
            template: __webpack_require__("./src/app/components/add-element/add-element.component.html"),
            styles: [__webpack_require__("./src/app/components/add-element/add-element.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddElementComponent);
    return AddElementComponent;
}());



/***/ }),

/***/ "./src/app/components/add-gateway/add-gateway.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-gateway/add-gateway.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Add Gateway</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput placeholder=\"Name\"  [(ngModel)]=\"name\" name=\"name\">\r\n    </mat-form-field>\r\n    \r\n    <app-auto-complete [optionsSourceUrl]=\"'manufacturers/all'\" [placeHolder]=\"'Manufacturer'\" #manufacturer></app-auto-complete> \r\n    <app-multiple-choice [optionsSourceUrl]=\"'protocols/all'\" [placeHolder]=\"'Protocols'\" #protocols></app-multiple-choice>  \r\n    <app-auto-complete [optionsSourceUrl]=\"'gateways/all'\" [placeHolder]=\"'Parent Gateway'\" #parentGateway></app-auto-complete> \r\n    <app-auto-complete [optionsSourceUrl]=\"'sites/all'\" [placeHolder]=\"'Site'\" #site></app-auto-complete> \r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput type=\"number\" placeholder=\"Longitude\"  [(ngModel)]=\"longitude\" name=\"longitude\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput type=\"number\" placeholder=\"Latitude\"  [(ngModel)]=\"latitude\" name=\"latitude\">\r\n    </mat-form-field>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-gateway/add-gateway.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGatewayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__("./src/app/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multiple_choice_multiple_choice_component__ = __webpack_require__("./src/app/components/multiple-choice/multiple-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddGatewayComponent = /** @class */ (function () {
    function AddGatewayComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    AddGatewayComponent.prototype.ngOnInit = function () {
    };
    AddGatewayComponent.prototype.onSubmit = function () {
        var _this = this;
        var gateway = new __WEBPACK_IMPORTED_MODULE_2__types__["c" /* Gateway */](this.name, this.manufacturerAC.getSelectedOptionId(), this.protocolsAC.getSelectedOptionIds(), this.parentGatewayAC.getSelectedOptionId(), [], [], this.siteAC.getSelectedOptionId(), this.longitude, this.latitude);
        console.log('@@@', gateway, '@@@');
        this.authService.post('gateways/add', gateway).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Added Gateway: ", res.data);
            _this.flashMessage.show("Gateway Added Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('manufacturer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddGatewayComponent.prototype, "manufacturerAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('protocols'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__multiple_choice_multiple_choice_component__["a" /* MultipleChoiceComponent */])
    ], AddGatewayComponent.prototype, "protocolsAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parentGateway'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddGatewayComponent.prototype, "parentGatewayAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('site'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddGatewayComponent.prototype, "siteAC", void 0);
    AddGatewayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-gateway',
            template: __webpack_require__("./src/app/components/add-gateway/add-gateway.component.html"),
            styles: [__webpack_require__("./src/app/components/add-gateway/add-gateway.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]])
    ], AddGatewayComponent);
    return AddGatewayComponent;
}());



/***/ }),

/***/ "./src/app/components/add-manufacturer/add-manufacturer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-manufacturer/add-manufacturer.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Add Manufacturer</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput placeholder=\"Name\"  [(ngModel)]=\"name\" name=\"name\">\r\n    </mat-form-field>\r\n    \r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-manufacturer/add-manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManufacturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__("./src/app/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddManufacturerComponent = /** @class */ (function () {
    function AddManufacturerComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    AddManufacturerComponent.prototype.ngOnInit = function () {
    };
    AddManufacturerComponent.prototype.onSubmit = function () {
        var _this = this;
        var manufacturer = new __WEBPACK_IMPORTED_MODULE_2__types__["d" /* Manufacturer */](this.name);
        console.log('@@@', manufacturer, '@@@');
        this.authService.post('manufacturers/add', manufacturer).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Added Manufacturer: ", res.data);
            _this.flashMessage.show("Manufacturer Added Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    AddManufacturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-manufacturer',
            template: __webpack_require__("./src/app/components/add-manufacturer/add-manufacturer.component.html"),
            styles: [__webpack_require__("./src/app/components/add-manufacturer/add-manufacturer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], AddManufacturerComponent);
    return AddManufacturerComponent;
}());



/***/ }),

/***/ "./src/app/components/add-protocol/add-protocol.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-protocol/add-protocol.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Add Protocol</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput placeholder=\"Name\"  [(ngModel)]=\"name\" name=\"name\">\r\n    </mat-form-field>  \r\n    \r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-protocol/add-protocol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProtocolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__("./src/app/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProtocolComponent = /** @class */ (function () {
    function AddProtocolComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    AddProtocolComponent.prototype.ngOnInit = function () {
    };
    AddProtocolComponent.prototype.onSubmit = function () {
        var _this = this;
        var protocol = new __WEBPACK_IMPORTED_MODULE_2__types__["e" /* Protocol */](this.name);
        console.log('@@@', protocol, '@@@');
        this.authService.post('protocols/add', protocol).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Added Protocol: ", res.data);
            _this.flashMessage.show("Protocol Added Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    AddProtocolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-protocol',
            template: __webpack_require__("./src/app/components/add-protocol/add-protocol.component.html"),
            styles: [__webpack_require__("./src/app/components/add-protocol/add-protocol.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], AddProtocolComponent);
    return AddProtocolComponent;
}());



/***/ }),

/***/ "./src/app/components/add-sensor/add-sensor.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  "

/***/ }),

/***/ "./src/app/components/add-sensor/add-sensor.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Add Sensor</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput placeholder=\"Name\"  [(ngModel)]=\"name\" name=\"name\">\r\n    </mat-form-field>\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'types/all'\" [placeHolder]=\"'Type'\" #type></app-auto-complete>\r\n    <app-auto-complete [optionsSourceUrl]=\"'manufacturers/all'\" [placeHolder]=\"'Manufacturer'\" #manufacturer></app-auto-complete>\r\n    <app-multiple-choice [optionsSourceUrl]=\"'protocols/all'\" [placeHolder]=\"'Protocols'\" #protocols></app-multiple-choice>\r\n    <app-auto-complete [optionsSourceUrl]=\"'gateways/all'\"  [placeHolder]=\"'Gateway'\" #gateway></app-auto-complete>\r\n    <app-auto-complete [optionsSourceUrl]=\"'sites/all'\"  [placeHolder]=\"'Site'\" #site></app-auto-complete>\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput type=\"number\" placeholder=\"Longitude\"  [(ngModel)]=\"longitude\" name=\"longitude\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput type=\"number\" placeholder=\"Latitude\"  [(ngModel)]=\"latitude\" name=\"latitude\">\r\n    </mat-form-field>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-sensor/add-sensor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSensorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./src/app/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiple_choice_multiple_choice_component__ = __webpack_require__("./src/app/components/multiple-choice/multiple-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddSensorComponent = /** @class */ (function () {
    function AddSensorComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.types = [
            "Automotive",
            "Digital Component",
            "Flow",
            "Fluid Property",
            "Force",
            "Humidity",
            "Mass Air Flow",
            "Multi-Sensor Module",
            "Photo Optic",
            "Piezo Film",
            "Position",
            "Pressure",
            "Rate & Inertial",
            "Scanner & System",
            "Speed",
            "Temperature",
            "Torque",
            "Traffic",
            "Ultrasonic",
            "Vibration",
            "Water-Level",
            "Other"
        ];
    }
    AddSensorComponent.prototype.ngOnInit = function () {
    };
    AddSensorComponent.prototype.onSubmit = function () {
        var _this = this;
        var sensor = new __WEBPACK_IMPORTED_MODULE_1__types__["f" /* Sensor */](this.name, this.typeAC.getSelectedOptionId(), this.manufacturerAC.getSelectedOptionId(), this.protocolsAC.getSelectedOptionIds(), this.gatewayAC.getSelectedOptionId(), this.siteAC.getSelectedOptionId(), this.longitude, this.latitude);
        console.log('@@@', sensor, '@@@');
        this.authService.post('sensors/add', sensor).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Added Sensor: ", res.data);
            _this.flashMessage.show("Sensor Added Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('type'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddSensorComponent.prototype, "typeAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('manufacturer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddSensorComponent.prototype, "manufacturerAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('protocols'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__multiple_choice_multiple_choice_component__["a" /* MultipleChoiceComponent */])
    ], AddSensorComponent.prototype, "protocolsAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gateway'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddSensorComponent.prototype, "gatewayAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('site'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddSensorComponent.prototype, "siteAC", void 0);
    AddSensorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-sensor',
            template: __webpack_require__("./src/app/components/add-sensor/add-sensor.component.html"),
            styles: [__webpack_require__("./src/app/components/add-sensor/add-sensor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]])
    ], AddSensorComponent);
    return AddSensorComponent;
}());



/***/ }),

/***/ "./src/app/components/add-site/add-site.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  "

/***/ }),

/***/ "./src/app/components/add-site/add-site.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">  \r\n  <h2 class=\"page-header\">Add Site</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput placeholder=\"Name\"  [(ngModel)]=\"name\" name=\"name\">\r\n    </mat-form-field>\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'sites/all'\" [placeHolder]=\"'Parent Site'\" #parentSite></app-auto-complete> \r\n      \r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-site/add-site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__("./src/app/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddSiteComponent = /** @class */ (function () {
    function AddSiteComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    AddSiteComponent.prototype.ngOnInit = function () {
    };
    AddSiteComponent.prototype.onSubmit = function () {
        var _this = this;
        var site = new __WEBPACK_IMPORTED_MODULE_2__types__["g" /* Site */](this.name, [], this.parentSiteAC.getSelectedOptionId(), []);
        console.log('@@@', site, '@@@');
        this.authService.post('sites/add', site).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Added Site: ", res.data);
            _this.flashMessage.show("Site Added Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parentSite'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], AddSiteComponent.prototype, "parentSiteAC", void 0);
    AddSiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-site',
            template: __webpack_require__("./src/app/components/add-site/add-site.component.html"),
            styles: [__webpack_require__("./src/app/components/add-site/add-site.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]])
    ], AddSiteComponent);
    return AddSiteComponent;
}());



/***/ }),

/***/ "./src/app/components/add-type/add-type.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-type/add-type.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">  \r\n  <h2 class=\"page-header\">Add Type</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <mat-form-field class=\"mat-full-width\">\r\n      <input matInput placeholder=\"Name\"  [(ngModel)]=\"name\" name=\"name\">\r\n    </mat-form-field>  \r\n    \r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/add-type/add-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__("./src/app/types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTypeComponent = /** @class */ (function () {
    function AddTypeComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    AddTypeComponent.prototype.ngOnInit = function () {
    };
    AddTypeComponent.prototype.onSubmit = function () {
        var _this = this;
        var type = new __WEBPACK_IMPORTED_MODULE_2__types__["h" /* Type */](this.name);
        console.log('@@@', type, '@@@');
        this.authService.post('types/add', type).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Added Type: ", res.data);
            _this.flashMessage.show("Type Added Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    AddTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-type',
            template: __webpack_require__("./src/app/components/add-type/add-type.component.html"),
            styles: [__webpack_require__("./src/app/components/add-type/add-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], AddTypeComponent);
    return AddTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/auto-complete/auto-complete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auto-complete/auto-complete.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"mat-full-width\" >\r\n  <input\r\n    type=\"text\"\r\n    placeholder=\"{{placeHolder || 'Pick One'}}\"\r\n    aria-label=\"Number\"\r\n    matInput\r\n    [formControl]=\"myControl\"\r\n    [matAutocomplete]=\"auto\"\r\n    [(ngModel)]=\"selectedValue\"\r\n  >\r\n  <mat-autocomplete\r\n    autoActiveFirstOption\r\n    #auto=\"matAutocomplete\"\r\n    (optionSelected)=\"optionSelected($event)\"\r\n  >\r\n    <mat-option *ngFor=\"let option of filteredOptions | async; let i = index\" [value]=\"option.name\">\r\n      {{ option.name }}\r\n    </mat-option>\r\n  </mat-autocomplete>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/components/auto-complete/auto-complete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__types__ = __webpack_require__("./src/app/types.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AutoCompleteComponent = /** @class */ (function () {
    function AutoCompleteComponent(validateService, authService, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.onOptionSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = [];
    }
    AutoCompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.get(this.optionsSourceUrl).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            _this.options = res.data; //.map(option => new AutoCompleteOption(option._id,option.name));
            if (_this.initialId)
                _this.selectedValue = _this.getValueById(_this.initialId).name;
            _this.filteredOptions = _this.myControl.valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
        });
    };
    AutoCompleteComponent.prototype.optionSelected = function (event) {
        this.onOptionSelected.emit(this.getSelectedValue());
    };
    // filter(val: string): string[] {
    //   return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0).sort();
    // }
    AutoCompleteComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0; }).sort();
    };
    AutoCompleteComponent.prototype.getSelectedOption = function () {
        var option = this.options[this.options.map(function (option) { return option.name; }).indexOf(this.selectedValue)];
        return new __WEBPACK_IMPORTED_MODULE_7__types__["a" /* AutoCompleteOption */](option._id, option.name);
    };
    AutoCompleteComponent.prototype.getSelectedValue = function () {
        return this.options[this.options.map(function (option) { return option.name; }).indexOf(this.selectedValue)];
    };
    AutoCompleteComponent.prototype.getValueById = function (id) {
        return this.options[this.options.map(function (option) { return option._id; }).indexOf(id)];
    };
    AutoCompleteComponent.prototype.getSelectedOptionId = function () {
        var option = this.options[this.options.map(function (option) { return option.name; }).indexOf(this.selectedValue)];
        if (option)
            return option._id;
        else
            return undefined;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AutoCompleteComponent.prototype, "optionsSourceUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AutoCompleteComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AutoCompleteComponent.prototype, "onOptionSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AutoCompleteComponent.prototype, "initialId", void 0);
    AutoCompleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auto-complete',
            template: __webpack_require__("./src/app/components/auto-complete/auto-complete.component.html"),
            styles: [__webpack_require__("./src/app/components/auto-complete/auto-complete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesService"]])
    ], AutoCompleteComponent);
    return AutoCompleteComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Dashboard</h2>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"getSiteJson()\">Get Sensors Layout By Sites</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"getGatewayJson()\">Get Sensors Layout By Gateways</button>\r\n    <br><hr><br>\r\n    <pre *ngIf=\"jsonLayout\">{{jsonLayout | json}}</pre>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.getSiteJson = function () {
        var _this = this;
        this.authService.get('jsons/by-site').subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Sensors Layout By Site: ", res.data);
            _this.flashMessage.show("Sensors Layout By Site Retreived Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.jsonLayout = res.data;
        });
    };
    DashboardComponent.prototype.getGatewayJson = function () {
        var _this = this;
        this.authService.get('jsons/by-gateway').subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Sensors Layout By Gateway: ", res.data);
            _this.flashMessage.show("Sensors Layout By Gateway Retreived Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.jsonLayout = res.data;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-element/edit-element.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-element/edit-element.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Sensor\"  position=11>\r\n    <app-edit-sensor></app-edit-sensor>\r\n  </mat-tab>\r\n  <mat-tab label=\"Gateway\">\r\n    <app-edit-gateway></app-edit-gateway>\r\n  </mat-tab>\r\n  <mat-tab label=\"Site\">\r\n    <app-edit-site></app-edit-site>\r\n  </mat-tab>\r\n  <mat-tab label=\"Type\">\r\n    <app-edit-type></app-edit-type>\r\n  </mat-tab>\r\n  <mat-tab label=\"Manufacturer\">\r\n    <app-edit-manufacturer></app-edit-manufacturer>\r\n  </mat-tab>\r\n  <mat-tab label=\"Protocol\">\r\n    <app-edit-protocol></app-edit-protocol>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/edit-element/edit-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditElementComponent; });
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

var EditElementComponent = /** @class */ (function () {
    function EditElementComponent() {
    }
    EditElementComponent.prototype.ngOnInit = function () {
    };
    EditElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-element',
            template: __webpack_require__("./src/app/components/edit-element/edit-element.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-element/edit-element.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditElementComponent);
    return EditElementComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-gateway/edit-gateway.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-gateway/edit-gateway.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Edit Gateway</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'gateways/all'\" [placeHolder]=\"'Choose Gateway'\" (onOptionSelected)=\"onOptionSelected($event)\"  #gateway></app-auto-complete>\r\n    <br><hr>\r\n    <div *ngIf=\"selectedGateway\">\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput placeholder=\"Name\"  [(ngModel)]=\"selectedGateway.name\" name=\"name\">\r\n        </mat-form-field>\r\n\r\n        <app-auto-complete [optionsSourceUrl]=\"'manufacturers/all'\" [placeHolder]=\"'Manufacturer'\" [initialId]=\"selectedGateway.manufacturer\" #manufacturer></app-auto-complete>\r\n        <app-multiple-choice [optionsSourceUrl]=\"'protocols/all'\" [placeHolder]=\"'Protocols'\" [initialIds]=\"selectedGateway.protocols\" #protocols></app-multiple-choice>\r\n        <app-auto-complete [optionsSourceUrl]=\"'gateways/all'\"  [placeHolder]=\"'Gateway'\" [initialId]=\"selectedGateway.parentGateway\" #parentGateway></app-auto-complete>\r\n        <app-auto-complete [optionsSourceUrl]=\"'sites/all'\"  [placeHolder]=\"'Site'\" [initialId]=\"selectedGateway.site\" #site></app-auto-complete>\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput type=\"number\" placeholder=\"Longitude\"  [(ngModel)]=\"selectedGateway.longitude\" name=\"longitude\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput type=\"number\" placeholder=\"Latitude\"  [(ngModel)]=\"selectedGateway.latitude\" name=\"latitude\">\r\n        </mat-form-field>\r\n\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete()\">Delete</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-gateway/edit-gateway.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGatewayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiple_choice_multiple_choice_component__ = __webpack_require__("./src/app/components/multiple-choice/multiple-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditGatewayComponent = /** @class */ (function () {
    function EditGatewayComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    EditGatewayComponent.prototype.ngOnInit = function () {
    };
    EditGatewayComponent.prototype.onSubmit = function () {
        var _this = this;
        this.selectedGateway.manufacturer = this.manufacturerAC.getSelectedOptionId();
        this.selectedGateway.site = this.siteAC.getSelectedOptionId();
        this.selectedGateway.protocols = this.protocolsMC.getSelectedOptionIds();
        this.selectedGateway.parentGateway = this.parentGatewayAC.getSelectedOptionId();
        console.log('@@@ selectedGateway ', this.selectedGateway, '@@@');
        this.authService.post('gateways/edit', this.selectedGateway).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Edit Gateway: ", res.data);
            _this.flashMessage.show("Gateway Changed Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditGatewayComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('@@@ selectedGateway ', this.selectedGateway, '@@@');
        this.authService.post('gateways/delete', this.selectedGateway).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Delete Gateway: ", res.data);
            _this.flashMessage.show("Gateway Deleted Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditGatewayComponent.prototype.onOptionSelected = function (selectedOption) {
        this.selectedGateway = selectedOption;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gateway'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditGatewayComponent.prototype, "gatewayAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('manufacturer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditGatewayComponent.prototype, "manufacturerAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('site'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditGatewayComponent.prototype, "siteAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('protocols'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__multiple_choice_multiple_choice_component__["a" /* MultipleChoiceComponent */])
    ], EditGatewayComponent.prototype, "protocolsMC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parentGateway'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditGatewayComponent.prototype, "parentGatewayAC", void 0);
    EditGatewayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-gateway',
            template: __webpack_require__("./src/app/components/edit-gateway/edit-gateway.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-gateway/edit-gateway.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], EditGatewayComponent);
    return EditGatewayComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-manufacturer/edit-manufacturer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-manufacturer/edit-manufacturer.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Edit Manufacturer</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'manufacturers/all'\" [placeHolder]=\"'Choose Manufacturer'\" (onOptionSelected)=\"onOptionSelected($event)\"  #manufacturer></app-auto-complete>\r\n    <br><hr>\r\n    <div *ngIf=\"selectedManufacturer\">\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput placeholder=\"Name\"  [(ngModel)]=\"selectedManufacturer.name\" name=\"name\">\r\n        </mat-form-field>\r\n\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete()\">Delete</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-manufacturer/edit-manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditManufacturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditManufacturerComponent = /** @class */ (function () {
    function EditManufacturerComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    EditManufacturerComponent.prototype.ngOnInit = function () {
    };
    EditManufacturerComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('@@@ selectedManufacturer ', this.selectedManufacturer, '@@@');
        this.authService.post('manufacturers/edit', this.selectedManufacturer).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Edit Manufacturer: ", res.data);
            _this.flashMessage.show("Manufacturer Changed Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditManufacturerComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('@@@ selectedManufacturer ', this.selectedManufacturer, '@@@');
        this.authService.post('manufacturers/delete', this.selectedManufacturer).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Delete Manufacturer: ", res.data);
            _this.flashMessage.show("Manufacturer Deleted Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditManufacturerComponent.prototype.onOptionSelected = function (selectedOption) {
        this.selectedManufacturer = selectedOption;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('manufacturer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditManufacturerComponent.prototype, "manufacturerAC", void 0);
    EditManufacturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-manufacturer',
            template: __webpack_require__("./src/app/components/edit-manufacturer/edit-manufacturer.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-manufacturer/edit-manufacturer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], EditManufacturerComponent);
    return EditManufacturerComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-protocol/edit-protocol.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-protocol/edit-protocol.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Edit Protocol</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'protocols/all'\" [placeHolder]=\"'Choose Protocol'\" (onOptionSelected)=\"onOptionSelected($event)\"  #protocol></app-auto-complete>\r\n    <br><hr>\r\n    <div *ngIf=\"selectedProtocol\">\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput placeholder=\"Name\"  [(ngModel)]=\"selectedProtocol.name\" name=\"name\">\r\n        </mat-form-field>\r\n\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete()\">Delete</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-protocol/edit-protocol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProtocolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProtocolComponent = /** @class */ (function () {
    function EditProtocolComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    EditProtocolComponent.prototype.ngOnInit = function () {
    };
    EditProtocolComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('@@@ selectedProtocol ', this.selectedProtocol, '@@@');
        this.authService.post('protocols/edit', this.selectedProtocol).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Edit Protocol: ", res.data);
            _this.flashMessage.show("Protocol Changed Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditProtocolComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('@@@ selectedProtocol ', this.selectedProtocol, '@@@');
        this.authService.post('protocols/delete', this.selectedProtocol).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Delete Protocol: ", res.data);
            _this.flashMessage.show("Protocol Deleted Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditProtocolComponent.prototype.onOptionSelected = function (selectedOption) {
        this.selectedProtocol = selectedOption;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('protocol'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditProtocolComponent.prototype, "protocolAC", void 0);
    EditProtocolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-protocol',
            template: __webpack_require__("./src/app/components/edit-protocol/edit-protocol.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-protocol/edit-protocol.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], EditProtocolComponent);
    return EditProtocolComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-sensor/edit-sensor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-sensor/edit-sensor.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Edit Sensor</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'sensors/all'\" [placeHolder]=\"'Choose Sensor'\" (onOptionSelected)=\"onOptionSelected($event)\"  #sensor></app-auto-complete>\r\n    <br><hr>\r\n    <div *ngIf=\"selectedSensor\">\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput placeholder=\"Name\"  [(ngModel)]=\"selectedSensor.name\" name=\"name\">\r\n        </mat-form-field>\r\n        <app-auto-complete [optionsSourceUrl]=\"'types/all'\" [placeHolder]=\"'Type'\" [initialId]=\"selectedSensor.type\" #type></app-auto-complete>\r\n        <app-auto-complete [optionsSourceUrl]=\"'manufacturers/all'\" [placeHolder]=\"'Manufacturer'\" [initialId]=\"selectedSensor.manufacturer\" #manufacturer></app-auto-complete>\r\n        <app-multiple-choice [optionsSourceUrl]=\"'protocols/all'\" [placeHolder]=\"'Protocols'\" [initialIds]=\"selectedSensor.protocols\" #protocols></app-multiple-choice>\r\n        <app-auto-complete [optionsSourceUrl]=\"'gateways/all'\"  [placeHolder]=\"'Gateway'\" [initialId]=\"selectedSensor.gateway\" #gateway></app-auto-complete>\r\n        <app-auto-complete [optionsSourceUrl]=\"'sites/all'\"  [placeHolder]=\"'Site'\" [initialId]=\"selectedSensor.site\" #site></app-auto-complete>\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput type=\"number\" placeholder=\"Longitude\"  [(ngModel)]=\"selectedSensor.longitude\" name=\"longitude\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput type=\"number\" placeholder=\"Latitude\"  [(ngModel)]=\"selectedSensor.latitude\" name=\"latitude\">\r\n        </mat-form-field>\r\n\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete()\">Delete</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-sensor/edit-sensor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSensorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiple_choice_multiple_choice_component__ = __webpack_require__("./src/app/components/multiple-choice/multiple-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditSensorComponent = /** @class */ (function () {
    function EditSensorComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    EditSensorComponent.prototype.ngOnInit = function () {
    };
    EditSensorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.selectedSensor.type = this.typeAC.getSelectedOptionId();
        this.selectedSensor.manufacturer = this.manufacturerAC.getSelectedOptionId();
        this.selectedSensor.protocols = this.protocolsMC.getSelectedOptionIds();
        this.selectedSensor.gateway = this.gatewayAC.getSelectedOptionId();
        this.selectedSensor.site = this.siteAC.getSelectedOptionId();
        console.log('@@@ selectedSensor ', this.selectedSensor, '@@@');
        this.authService.post('sensors/edit', this.selectedSensor).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Edit Sensor: ", res.data);
            _this.flashMessage.show("Sensor Changed Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditSensorComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('@@@ selectedSensor ', this.selectedSensor, '@@@');
        this.authService.post('sensors/delete', this.selectedSensor).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Delte Sensor: ", res.data);
            _this.flashMessage.show("Sensor Deleted Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditSensorComponent.prototype.onOptionSelected = function (selectedOption) {
        this.selectedSensor = selectedOption;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sensor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditSensorComponent.prototype, "sensorAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('type'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditSensorComponent.prototype, "typeAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('manufacturer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditSensorComponent.prototype, "manufacturerAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('protocols'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__multiple_choice_multiple_choice_component__["a" /* MultipleChoiceComponent */])
    ], EditSensorComponent.prototype, "protocolsMC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gateway'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditSensorComponent.prototype, "gatewayAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('site'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditSensorComponent.prototype, "siteAC", void 0);
    EditSensorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-sensor',
            template: __webpack_require__("./src/app/components/edit-sensor/edit-sensor.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-sensor/edit-sensor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]])
    ], EditSensorComponent);
    return EditSensorComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-site/edit-site.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-site/edit-site.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Edit Site</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'sites/all'\" [placeHolder]=\"'Choose Site'\" (onOptionSelected)=\"onOptionSelected($event)\"  #site></app-auto-complete>\r\n    <br><hr>\r\n    <div *ngIf=\"selectedSite\">\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput placeholder=\"Name\"  [(ngModel)]=\"selectedSite.name\" name=\"name\">\r\n        </mat-form-field>\r\n\r\n        <app-auto-complete [optionsSourceUrl]=\"'sites/all'\" [placeHolder]=\"'Parent Site'\" [initialId]=\"selectedSite.parentSite\" #parentSite></app-auto-complete>\r\n\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete()\">Delete</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-site/edit-site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditSiteComponent = /** @class */ (function () {
    function EditSiteComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    EditSiteComponent.prototype.ngOnInit = function () {
    };
    EditSiteComponent.prototype.onSubmit = function () {
        var _this = this;
        this.selectedSite.parentSite = this.parentSiteAC.getSelectedOptionId();
        console.log('@@@ selectedSite ', this.selectedSite, '@@@');
        this.authService.post('sites/edit', this.selectedSite).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Edit Site: ", res.data);
            _this.flashMessage.show("Site Changed Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditSiteComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('@@@ selectedSite ', this.selectedSite, '@@@');
        this.authService.post('sites/delete', this.selectedSite).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Delete Site: ", res.data);
            _this.flashMessage.show("Site Deleted Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditSiteComponent.prototype.onOptionSelected = function (selectedOption) {
        this.selectedSite = selectedOption;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('site'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditSiteComponent.prototype, "siteAC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('parentSite'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditSiteComponent.prototype, "parentSiteAC", void 0);
    EditSiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-site',
            template: __webpack_require__("./src/app/components/edit-site/edit-site.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-site/edit-site.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], EditSiteComponent);
    return EditSiteComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-type/edit-type.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-type/edit-type.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Edit Type</h2>\r\n\r\n  <form class=\"mat-form\" (submit)=\"onSubmit()\">\r\n\r\n    <app-auto-complete [optionsSourceUrl]=\"'types/all'\" [placeHolder]=\"'Choose Type'\" (onOptionSelected)=\"onOptionSelected($event)\"  #type></app-auto-complete>\r\n    <br><hr>\r\n    <div *ngIf=\"selectedType\">\r\n        <mat-form-field class=\"mat-full-width\">\r\n          <input matInput placeholder=\"Name\"  [(ngModel)]=\"selectedType.name\" name=\"name\">\r\n        </mat-form-field>\r\n\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Edit\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete()\">Delete</button>        \r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-type/edit-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__ = __webpack_require__("./src/app/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditTypeComponent = /** @class */ (function () {
    function EditTypeComponent(router, validateService, authService, flashMessage) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    EditTypeComponent.prototype.ngOnInit = function () {
    };
    EditTypeComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('@@@ selectedType ', this.selectedType, '@@@');
        this.authService.post('types/edit', this.selectedType).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Edit Type: ", res.data);
            _this.flashMessage.show("Type Changed Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditTypeComponent.prototype.onDelete = function () {
        var _this = this;
        console.log('@@@ selectedType ', this.selectedType, '@@@');
        this.authService.post('types/delete', this.selectedType).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            console.log("Delete Type: ", res.data);
            _this.flashMessage.show("Type Deleted Successfully", { cssClass: 'alert-success', timeout: 5000 });
            _this.router.navigate(['/']);
        });
    };
    EditTypeComponent.prototype.onOptionSelected = function (selectedOption) {
        this.selectedType = selectedOption;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('type'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__auto_complete_auto_complete_component__["a" /* AutoCompleteComponent */])
    ], EditTypeComponent.prototype, "typeAC", void 0);
    EditTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-type',
            template: __webpack_require__("./src/app/components/edit-type/edit-type.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-type/edit-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], EditTypeComponent);
    return EditTypeComponent;
}());



/***/ }),

/***/ "./src/app/components/gateway/gateway.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gateway/gateway.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  gateway works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/gateway/gateway.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayComponent; });
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

var GatewayComponent = /** @class */ (function () {
    function GatewayComponent() {
    }
    GatewayComponent.prototype.ngOnInit = function () {
    };
    GatewayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gateway',
            template: __webpack_require__("./src/app/components/gateway/gateway.component.html"),
            styles: [__webpack_require__("./src/app/components/gateway/gateway.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GatewayComponent);
    return GatewayComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <h2 class=\"page-header\">Login</h2>\r\n  <form (submit)=\"onLoginSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label>Username</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"credentials.username\" name=\"username\" placeholder=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"credentials.password\" name=\"password\" placeholder=\"password\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types__ = __webpack_require__("./src/app/types.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, flashMessage, validateService, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.credentials = new __WEBPACK_IMPORTED_MODULE_5__types__["b" /* Credentials */]('', '');
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // Validate Fields
        var valid = this.validateService.validateLogin(this.credentials);
        if (!valid.success) {
            this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        this.authService.authenticateUser(this.credentials)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.credentials);
                _this.flashMessage.show('You are now logged in.', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            _this.router.navigate(['/']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/multiple-choice/multiple-choice.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/multiple-choice/multiple-choice.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field *ngIf=\"myControl\" class=\"mat-full-width\">  \r\n  <mat-select\r\n    placeholder=\"{{placeHolder || 'Pick A Few'}}\"\r\n    [formControl]=\"myControl\"\r\n    [(ngModel)]=\"selectedValues\"\r\n    multiple\r\n  >\r\n    <mat-option *ngFor=\"let option of options\" [value]=\"option\">{{option.name}}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/components/multiple-choice/multiple-choice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleChoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types__ = __webpack_require__("./src/app/types.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MultipleChoiceComponent = /** @class */ (function () {
    function MultipleChoiceComponent(validateService, authService, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.options = [];
    }
    MultipleChoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.get(this.optionsSourceUrl).subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
                return _this.flashMessage.show(res.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            _this.options = res.data.map(function (option) { return new __WEBPACK_IMPORTED_MODULE_5__types__["a" /* AutoCompleteOption */](option._id, option.name); });
            if (_this.initialIds)
                _this.selectedValues = _this.getValuesByIds(_this.initialIds);
            else
                _this.selectedValues = [];
            _this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](_this.selectedValues);
        });
    };
    MultipleChoiceComponent.prototype.getValuesByIds = function (ids) {
        var _this = this;
        return ids.map(function (id) { return _this.getValueById(id); });
    };
    MultipleChoiceComponent.prototype.getValueById = function (id) {
        return this.options[this.options.map(function (option) { return option._id; }).indexOf(id)];
    };
    MultipleChoiceComponent.prototype.getSelectedOptions = function () {
        return this.selectedValues;
    };
    MultipleChoiceComponent.prototype.getSelectedOptionIds = function () {
        return this.selectedValues.map(function (val) { return val._id; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleChoiceComponent.prototype, "optionsSourceUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleChoiceComponent.prototype, "placeHolder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MultipleChoiceComponent.prototype, "initialIds", void 0);
    MultipleChoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multiple-choice',
            template: __webpack_require__("./src/app/components/multiple-choice/multiple-choice.component.html"),
            styles: [__webpack_require__("./src/app/components/multiple-choice/multiple-choice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], MultipleChoiceComponent);
    return MultipleChoiceComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n  "

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar  color=\"primary\">\r\n    <span>Application Title</span>\r\n\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n\r\n    <span>Right Aligned Text</span>\r\n</mat-toolbar> -->\r\n\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">Sensor Layout</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n    </ul>\r\n    <ul class=\"navbar-nav my-2\">\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Dashboard</a></li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/add-element']\">Create Element</a></li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/edit-element']\">Edit Element</a></li>      \r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Register User</a></li>\r\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" (click)=\"onLogoutClick()\">Logout</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, flashMessage, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.dropdownClass = { 'dropdown': true, 'open': false };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.query = '';
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>404 PAGE NOT FOUND!</h1>\r\n  <p class=\"lead\">The URL you requested dose not exist in this server.</p>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Go back to the home page</a> \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n<h2 class=\"page-header\">Register User</h2>\r\n  <form (submit)=\"onRegisterSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"fname\">First name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.fname\" name=\"fname\" placeholder=\"first name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lname\">Last name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lname\" name=\"lname\" placeholder=\"last name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"email\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__ = __webpack_require__("./src/app/services/validation/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__types__ = __webpack_require__("./src/app/types.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, flashMessage, validateService, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = Object(__WEBPACK_IMPORTED_MODULE_5__types__["j" /* newUser */])();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.user.fname = Object(__WEBPACK_IMPORTED_MODULE_5__types__["i" /* formatName */])(this.user.fname);
        this.user.lname = Object(__WEBPACK_IMPORTED_MODULE_5__types__["i" /* formatName */])(this.user.lname);
        // Validate Fields
        var valid = this.validateService.validateRegister(this.user);
        if (!valid.success) {
            this.flashMessage.show(valid.msg, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // Register User
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            }
            _this.router.navigate(['/']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sensor/sensor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sensor/sensor.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Add Sensor\"  position=11>\r\n    <app-add-sensor></app-add-sensor>\r\n  </mat-tab>\r\n  <mat-tab label=\"Edit Sensor\">\r\n    <app-add-sensor></app-add-sensor>\r\n  </mat-tab>\r\n  <mat-tab label=\"Remove Sensor\">\r\n    <app-add-sensor></app-add-sensor>\r\n  </mat-tab>\r\n    \r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/components/sensor/sensor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorComponent; });
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

var SensorComponent = /** @class */ (function () {
    function SensorComponent() {
    }
    SensorComponent.prototype.ngOnInit = function () {
    };
    SensorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sensor',
            template: __webpack_require__("./src/app/components/sensor/sensor.component.html"),
            styles: [__webpack_require__("./src/app/components/sensor/sensor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SensorComponent);
    return SensorComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n    margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n        causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n        `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n    <h1 class=\"example-app-name\">Responsive App</h1>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"example-sidenav-container\"\r\n                          >\r\n    <mat-sidenav class= #snav>\r\n      <mat-nav-list>\r\n        <!-- <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a> -->\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n      <app-add-sensor></app-add-sensor>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n  "

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
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

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("./src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("./src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/site/site.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/site/site.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  site works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/site/site.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteComponent; });
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

var SiteComponent = /** @class */ (function () {
    function SiteComponent() {
    }
    SiteComponent.prototype.ngOnInit = function () {
    };
    SiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-site',
            template: __webpack_require__("./src/app/components/site/site.component.html"),
            styles: [__webpack_require__("./src/app/components/site/site.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteComponent);
    return SiteComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("./src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn())
            return true;
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    AuthService.prototype.get = function (url, page) {
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.getToken());
        headers.append('Content-type', 'application/json');
        var params = { page: page };
        var options = { headers: headers, params: params };
        return this.http.get(this.baseUrl + url, options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.getToken());
        headers.append('Content-type', 'application/json');
        return this.http.post(this.baseUrl + url, data, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        return this.post('users/register', user);
    };
    AuthService.prototype.authenticateUser = function (credentials) {
        return this.post('users/authenticate', credentials);
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.setUsername = function (username) {
        localStorage.setItem('username', username);
    };
    AuthService.prototype.getId = function () {
        return localStorage.getItem('user_id');
    };
    AuthService.prototype.setId = function (id) {
        localStorage.setItem('user_id', id);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('authToken');
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem('authToken', token);
    };
    AuthService.prototype.storeUserData = function (token, credentials) {
        this.setToken(token);
        this.setId(credentials._id);
        this.setUsername(credentials.username);
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('authToken');
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validation/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
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

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateName = function (name) {
        var nameRegExp = /^[A-Za-z]+$/;
        return nameRegExp.test(name);
    };
    ValidationService.prototype.validateEmail = function (email) {
        var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegExp.test(email);
    };
    ValidationService.prototype.validateUsername = function (username) {
        var usernameRegExp = /^[\w]+$/;
        return usernameRegExp.test(username);
    };
    ValidationService.prototype.validatePassword = function (password) {
        var passRegExp = /^[\S]+$/;
        return passRegExp.test(password);
    };
    ValidationService.prototype.validateRegister = function (user) {
        if (!this.validateName(user.fname))
            return { success: false, msg: 'Please enter a valid first name.' };
        if (!this.validateName(user.lname))
            return { success: false, msg: 'Please enter a valid last name.' };
        if (!this.validateEmail(user.email))
            return { success: false, msg: 'Please enter a valid email.' };
        if (!this.validateUsername(user.username))
            return { success: false, msg: 'Please enter a valid username.' };
        if (!this.validatePassword(user.password))
            return { success: false, msg: 'Please enter a valid password.' };
        return { success: true, msg: 'All good.' };
    };
    ValidationService.prototype.validateLogin = function (user) {
        if (!this.validateUsername(user.username))
            return { success: false, msg: 'Please enter a valid username.' };
        if (!this.validatePassword(user.password))
            return { success: false, msg: 'Please enter a valid password.' };
        return { success: true, msg: 'All good.' };
    };
    ValidationService.prototype.validatePost = function (user) {
        return { success: true, msg: 'All good.' };
    };
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (immutable) */ __webpack_exports__["i"] = formatName;
/* harmony export (immutable) */ __webpack_exports__["j"] = newUser;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Credentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCompleteOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Type; });
/* unused harmony export newType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Protocol; });
/* unused harmony export newProtocol */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Manufacturer; });
/* unused harmony export newManufacturer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Sensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Gateway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Site; });
// User Class
var User = /** @class */ (function () {
    function User(username, password, fname, lname, email) {
        this.username = username;
        this.password = password;
        this.fname = formatName(fname);
        this.lname = formatName(lname);
        this.email = email;
    }
    return User;
}());

function formatName(name) {
    return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
}
function newUser() {
    return new User('', '', '', '', '');
}
// Credentials Class
var Credentials = /** @class */ (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());

// Auto Complete Option Class
var AutoCompleteOption = /** @class */ (function () {
    function AutoCompleteOption(_id, name) {
        this._id = _id;
        this.name = name;
    }
    return AutoCompleteOption;
}());

// export function newAutoCompleteOption() {
//     return new AutoCompleteOption('');
// }
// Type Class
var Type = /** @class */ (function () {
    function Type(name) {
        this.name = name;
    }
    return Type;
}());

function newType() {
    return new Type('');
}
// Protocol Class
var Protocol = /** @class */ (function () {
    function Protocol(name) {
        this.name = name;
    }
    return Protocol;
}());

function newProtocol() {
    return new Protocol('');
}
// Manufacturer Class
var Manufacturer = /** @class */ (function () {
    function Manufacturer(name) {
        this.name = name;
    }
    return Manufacturer;
}());

function newManufacturer() {
    return new Manufacturer('');
}
// Sensor Class
var Sensor = /** @class */ (function () {
    function Sensor(name, type, manufacturer, protocols, gateway, site, longitude, latitude) {
        this.name = name;
        this.type = type;
        this.manufacturer = manufacturer;
        this.protocols = protocols;
        this.gateway = gateway;
        this.site = site;
        this.longitude = longitude;
        this.latitude = latitude;
    }
    return Sensor;
}());

// export function newSensor() {
//     return new Sensor(newAutoCompleteOption, , '', '', '', '');
// }
// Gateway Class
var Gateway = /** @class */ (function () {
    function Gateway(name, manufacturer, protocols, parentGateway, childGateways, sensors, site, longitude, latitude) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.protocols = protocols;
        this.parentGateway = parentGateway;
        this.childGateways = childGateways;
        this.sensors = sensors;
        this.site = site;
        this.longitude = longitude;
        this.latitude = latitude;
    }
    return Gateway;
}());

// export function newGateway() {
//     return new Gateway('', '', '', [], '', [], []);
// }
// Site Class
var Site = /** @class */ (function () {
    function Site(name, gateways, parentSite, childSites) {
        this.name = name;
        this.gateways = gateways;
        this.parentSite = parentSite;
        this.childSites = childSites;
    }
    return Site;
}());

// export function newSite() {
//     return new Site('', [], '', []);
// }


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map