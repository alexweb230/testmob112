module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "\r\n", ""]);

// exports
;
    if (false) {}


/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/news-detail/news-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { routes } from './app.routes';


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'detail', component: _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_3__["NewsDetailComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.css":
/***/ (function(module, exports) {

module.exports = "ActionBar .action-bar-title {\r\n    horizontal-align: center;\r\n\r\n}\r\n\r\n.fa {\r\n    font-family: \"FontAwesome\";\r\n}\r\n\r\nActionBar .action-bar-title {\r\n    horizontal-align: center;\r\n}\r\n\r\n.sidedrawer.sidedrawer-left {\r\n    background-color: blue;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header {\r\n    background-color: #222E50;\r\n    height: auto;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .sidedrawer-header-brand {\r\n    color: red;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .main-search {\r\n    background-color: #CFCFCF;\r\n    border-radius: 30;\r\n    height: 45;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .header-action {\r\n    padding-top: 20;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .header-action .header-action-logo {\r\n    background-image: url(\"~/assets/img/png/logo-menu.png\");\r\n    background-repeat: no-repeat;\r\n    width: 70;\r\n    height: 70;\r\n    background-size: cover;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .header-action .live {\r\n    font-size: 30;\r\n    text-transform: uppercase;\r\n    color: #CE3330;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .lang-btns {\r\n    height: 45;\r\n    border-radius: 20;\r\n    background-color: #2D3A59;\r\n    margin-top: 15;\r\n    margin-bottom: 15;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .lang-btns .lang-ua, .sidedrawer .sidedrawer-header .lang-btns .lang-ru {\r\n    font-size: 18;\r\n    text-transform: capitalize;\r\n    color: #000000;\r\n    padding-left: 20;\r\n    padding-right: 20;\r\n    border-right-width: 1;\r\n    border-right-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .lang-btns .lang-ua.active, .sidedrawer .sidedrawer-header .lang-btns .active.lang-ru {\r\n    color: #FAFBFD;\r\n}\r\n\r\n.sidedrawer .sidedrawer-header .lang-btns .lang-ru {\r\n    border-right-width: 0;\r\n}\r\n\r\n.sidedrawer .sidedrawer-content {\r\n    background-color: #222E50;\r\n}\r\n\r\n.sidedrawer .sidedrawer-content .sidedrawer-list-item {\r\n    padding-left: 15;\r\n    border-bottom-width: 1;\r\n    border-bottom-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n.sidedrawer .sidedrawer-content .sidedrawer-list-item Label {\r\n    font-size: 25;\r\n    vertical-align: middle;\r\n    color: #FAFBFD;\r\n    text-transform: capitalize;\r\n    font-weight: 300;\r\n}\r\n\r\n.sidedrawer .sidedrawer-content .sidedrawer-list-item .arr {\r\n    width: 19;\r\n    height: 19;\r\n    background-image: url(\"~/assets/img/png/arr.png\");\r\n    background-repeat: no-repeat;\r\n    horizontal-align: left;\r\n    margin-left: 15;\r\n    background-size: cover;\r\n    margin-top: 7;\r\n\r\n}\r\n\r\n.sidedrawer .sidedrawer-content .sidedrawer-list-item.selected {\r\n    background-color: red;\r\n}\r\n\r\n.sidedrawer .sidedrawer-content .sidedrawer-list-item.selected Label {\r\n    color: gold;\r\n}"

/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<RadSideDrawer [drawerTransition]=\"sideDrawerTransition\">\r\n  <GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\r\n      <StackLayout row=\"0\" class=\"sidedrawer-header\">\r\n          <DockLayout class=\"main-search\">\r\n              <SearchBar hint=\"{{sPlaceHolder}}\"\r\n                         (loaded)=\"sBLoaded($event)\"\r\n                         (submit)=\"onSearchSubmit($event)\">\r\n\r\n              </SearchBar>\r\n          </DockLayout>\r\n          <FlexboxLayout class=\"header-action\" justifyContent=\"space-between\" alignItems=\"center\">\r\n              <Label text=\"\" class=\"header-action-logo\"></Label>\r\n              <Label text=\"{{textLive}}\" class=\"live\"></Label>\r\n          </FlexboxLayout>\r\n          <FlexboxLayout class=\"lang-btns\" justifyContent=\"center\" alignItems=\"center\">\r\n              <Label text=\"{{textUA}}\" class=\"lang-ua\" [ngClass]=\"active ? 'active': ''\" (tap)=\"toggleActive()\"></Label>\r\n              <Label  text=\"{{textRU}}\" class=\"lang-ru\"  [ngClass]=\"activeSibling ? 'active': ''\" (tap)=\"toggleActive()\"></Label>\r\n          </FlexboxLayout>\r\n      </StackLayout>\r\n  \r\n      <ScrollView row=\"1\">\r\n          <StackLayout class=\"sidedrawer-content\">\r\n              <GridLayout\r\n                      columns=\"auto, *\"\r\n                      class=\"sidedrawer-list-item\">\r\n                  <Label col=\"0\" text=\"{{navLIst[0]}}\"></Label>\r\n                  <Label col=\"1\"  class=\"arr\" ></Label>\r\n              </GridLayout>\r\n              <GridLayout\r\n\r\n                      columns=\"auto, *\"\r\n                      class=\"sidedrawer-list-item\">\r\n                  <Label col=\"0\" text=\"{{navLIst[1]}}\"></Label>\r\n                  <Label col=\"1\"  class=\"arr\"></Label>\r\n              </GridLayout>\r\n              <GridLayout\r\n                      columns=\"auto, *\"\r\n                      class=\"sidedrawer-list-item\">\r\n                  <Label col=\"0\" text=\"{{navLIst[2]}}\"></Label>\r\n                  <Label col=\"1\"  class=\"arr\"></Label>\r\n              </GridLayout>\r\n              <GridLayout\r\n                      columns=\"auto, *\"\r\n                      class=\"sidedrawer-list-item\">\r\n                  <Label col=\"0\" text=\"{{navLIst[3]}}\"></Label>\r\n                  <Label col=\"1\"  class=\"arr\"></Label>\r\n              </GridLayout>\r\n              <GridLayout\r\n                      columns=\"auto, *\"\r\n                      class=\"sidedrawer-list-item\">\r\n                  <Label col=\"0\" text=\"{{navLIst[4]}}\"></Label>\r\n                  <Label col=\"1\"  class=\"arr\"></Label>\r\n              </GridLayout>\r\n              <GridLayout\r\n                      columns=\"auto, *\"\r\n                      class=\"sidedrawer-list-item\">\r\n                  <Label col=\"0\" text=\"{{navLIst[5]}}\"></Label>\r\n                  <Label col=\"1\"  class=\"arr\"></Label>\r\n              </GridLayout>\r\n          </StackLayout>\r\n      </ScrollView>\r\n  </GridLayout>\r\n\r\n  <page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\r\n</RadSideDrawer>"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.sPlaceHolder = "пошук";
        this.textLive = "live";
        this.textUA = "украiнська";
        this.textRU = "pociйська";
        this.active = true;
        this.activeSibling = false;
        this.navLIst = [
            "новости",
            "аналітика",
            "Архів",
            "телеканал",
            "хроніки 112",
            "Досьє"
        ];
    }
    AppComponent.prototype.toggleActive = function () {
        this.active = !this.active;
        this.activeSibling = !this.activeSibling;
    };
    AppComponent.prototype.sBLoaded = function (args) {
        var searchbar = args.object;
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
            searchbar.android.clearFocus();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./app/app.component.html"),
            styles: [__webpack_require__("./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/news-detail/news-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_6__["NewsDetailComponent"],
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n.action-bar {\r\n    background-color: #E4E4E4;\r\n}\r\n.action-bar .action-bar-inner {\r\n    padding-right: 15;\r\n}\r\n.action-bar .action-bar-inner .btn-nav {\r\n    color: #474747;\r\n    font-size: 30;\r\n    padding: 0;\r\n}\r\n.action-bar .action-bar-inner .logo {\r\n    background-image: url('~/assets/img/png/logo.png');\r\n    background-repeat: no-repeat;\r\n    width: 96;\r\n    height: 32;\r\n    /*background-color: red;*/\r\n    background-size: cover;\r\n}\r\n.news-list {\r\n    padding: 10;\r\n}\r\n.news-list-wrap {\r\n    border-bottom-width: 1;\r\n    border-bottom-color: #b2a6a7;\r\n    padding-bottom: 10;\r\n}\r\n.news-list-item {\r\n    font-size: 16;\r\n    color: #212121;\r\n    width: 100%;\r\n}\r\n.news-list .ic {\r\n    margin-left: 15;\r\n}\r\n.news-list .ic.camera {\r\n    width: 24;\r\n    height: 24;\r\n}\r\nTabView StackLayout{\r\n    font-size: 18;\r\n}\r\n\r\n"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <ActionBar [title]=\"title\"></ActionBar> -->\r\n<ActionBar class=\"action-bar\">\r\n    <GridLayout columns=\"*,*\" width=\"100%\" class=\"action-bar-inner\">\r\n        <Label\r\n                col=\"0\"\r\n                textAlignment=\"center\"\r\n                horizontalAlignment=\"left\"\r\n                class=\"logo\">\r\n        </Label>\r\n        <Label text=\"&#xf0c9;\"\r\n               col=\"1\"\r\n               (tap)=\"onDrawerButtonTap()\"\r\n               textAlignment=\"center\"\r\n               horizontalAlignment=\"right\"\r\n               class=\"btn-nav fa fa-bars\">\r\n        </Label>\r\n    </GridLayout>\r\n</ActionBar>\r\n<GridLayout columns=\"*\" rows=\"250, *\" width=\"100%\">\r\n    <WebView src=\"{{liveBox}}\" row=\"0\" col=\"0\" backgroundColor=\"red\"></WebView>\r\n    <TabView\r\n            id=\"tabViewContainer\"\r\n            row=\"1\"\r\n\r\n            tabTextFontSize=\"18\"\r\n            selectedTabTextColor=\"#212121\"\r\n            androidSelectedTabHighlightColor=\"#DE373A\">\r\n        <StackLayout *tabItem=\"{title: 'новости'}\" class=\"test\">\r\n            <GridLayout rows=\"*\">\r\n                <ScrollView row=\"0\">\r\n                    <FlexboxLayout\r\n                            flexDirection=\"column\"\r\n                            alignItems=\"flex-start\"\r\n                            class=\"news-list\">\r\n                        <StackLayout\r\n                                *ngFor=\"let list of  newsListMain\"\r\n                                [nsRouterLink]=\"['/detail']\"\r\n                                class=\"news-list-wrap\"\r\n                                orientation=\"vertical\">\r\n                            <Label text=\"{{list.title}}\" textWrap=\"true\" class=\"news-list-item\"></Label>\r\n                            <FlexboxLayout flexDirection=\"row\" justifyContent=\"flex-start\">\r\n                                <Label text=\"{{list.data}}\" textWrap=\"true\" class=\"data-time\"></Label>\r\n                                <Image src=\"~/assets/img/png/photo-camera.png\" class=\"ic camera\"\r\n                                       horizontalAlignment=\"left\"></Image>\r\n                            </FlexboxLayout>\r\n                        </StackLayout>\r\n                    </FlexboxLayout>\r\n                </ScrollView>\r\n            </GridLayout>\r\n        </StackLayout>\r\n        <StackLayout *tabItem=\"{title: 'топ-новости'}\">\r\n            <GridLayout rows=\"*\">\r\n                <ScrollView row=\"0\">\r\n                    <FlexboxLayout\r\n                            flexDirection=\"column\"\r\n                            [nsRouterLink]=\"['/detail']\"\r\n                            alignItems=\"flex-start\"\r\n                            class=\"news-list\">\r\n                        <StackLayout *ngFor=\"let list of  newsListMain\" class=\"news-list-wrap\" orientation=\"vertical\">\r\n                            <Label text=\"{{list.title}}\" textWrap=\"true\" class=\"news-list-item\"></Label>\r\n                            <FlexboxLayout flexDirection=\"row\" justifyContent=\"flex-start\">\r\n                                <Label text=\"{{list.data}}\" textWrap=\"true\" class=\"data-time\"></Label>\r\n                                <Image src=\"~/assets/img/png/photo-camera.png\" class=\"ic camera\"\r\n                                       horizontalAlignment=\"left\"></Image>\r\n                            </FlexboxLayout>\r\n                        </StackLayout>\r\n                    </FlexboxLayout>\r\n                </ScrollView>\r\n            </GridLayout>\r\n\r\n        </StackLayout>\r\n    </TabView>\r\n</GridLayout>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'appshematick';
        this.liveBox = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GatWoipbkSg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        this.newsListMain = [
            {
                title: 'Краска, которой печатали защитные элементы на бюллетенях для президентских выборов, никому не продается, - ЦИК',
                data: '14:30 23.10.19'
            },
            {
                title: 'Полиция открыла 189 уголовных производств за нарушения избирательного законодательства',
                data: '14:30 23.10.19'
            },
            {
                title: 'В Одесской обл. СБУ ликвидировала канал контрабанды кокаина из страны Южной Америки',
                data: '14:30 23.10.19'
            },
            {
                title: 'Группа "Время и Стекло" выпустила черно-белый клип на свою первую украиноязычную песню',
                data: '14:30 23.10.19'
            },
            {
                title: 'Вступили в силу новые санкции Украины против лиц, причастных к российской агрессии',
                data: '14:30 23.10.19'
            },
            {
                title: 'На печать бюллетеней для президентских выборов в Украине потратили более 165 млн грн, - ЦИК',
                data: '14:30 23.10.19'
            },
            {
                title: 'Украина не заинтересована в китайских инвестициях? А зря',
                data: '14:30 23.10.19'
            },
            {
                title: 'Карта ООС по состоянию на 21 марта',
                data: '14:30 23.10.19'
            },
            {
                title: 'СБУ разоблачила антиукраинских интернет-агитаторов из Николаева и Одессы',
                data: '14:30 23.10.19'
            },
            {
                title: 'Межбанк открылся долларом по 27,25-27,30 грн, евро – по 31,13-31,20 грн',
                data: '14:30 23.10.19'
            },
        ];
    }
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./app/home/home.component.html"),
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/news-detail/news-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".action-bar-detail {\n    background-color: silver;\n}\n\n.action-bar-detail .title-detail {\n    font-size: 20;\n    color: #212121;\n}\n\n.news-det-cont .detail-text {\n    padding: 10 15;\n    font-size: 16;\n    color: #212121;\n}\n\n.news-det-cont .date {\n    padding-left: 15;\n    color: #888;\n    padding-top: 5;\n    font-size: 17;\n}"

/***/ }),

/***/ "./app/news-detail/news-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"новости\" class=\"action-bar-detail\">\r\n    <NavigationButton\r\n            android.systemIcon=\"ic_menu_back\"\r\n            text=\"Back to ActionBar\"\r\n            [nsRouterLink]=\"['/home']\"></NavigationButton>\r\n    <Label text=\"новости\" class=\"title-detail\"></Label>\r\n</ActionBar>\r\n<GridLayout>\r\n    <ScrollView>\r\n        <StackLayout class=\"news-det-cont\">\r\n            <Image src=\"~/assets/img/jpg/1.png\"></Image>\r\n            <Label text=\"22:21 12.03.19\"  textWrap=\"true\" class=\"date\"></Label>\r\n            <Label text=\"{{test}}\"  textWrap=\"true\" class=\"detail-text\"></Label>\r\n        </StackLayout>\r\n    </ScrollView>\r\n</GridLayout>"

/***/ }),

/***/ "./app/news-detail/news-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent() {
        this.test = "Фермер организовал целую операцию по выявлению того, кто убирает в сараеФермеру из Великобритании с уборкой в сарае помогает мышь.Фермер организовал целую операцию по выявлению того, кто убирает в сарае, после того как обнаружил, что разбросанные хозяйственные приспособления и инструменты сложены в ящик. Стивен МакКрис начал специально разбрасывать инструменты по сараю, чтобы убедиться, что на утро они все собраны в ящик. После нескольких недель таких разбирательств он решил установить камеру и обнаружил, что инструменты по ночам в ящик складывает мышь. После нескольких недель таких разбирательств он решил установить камеру и обнаружил, что инструменты по ночам в ящик складывает мышь. После нескольких недель таких разбирательств он решил установить камеру и обнаружил, что инструменты по ночам в ящик складывает мышь.";
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
    };
    NewsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__("./app/news-detail/news-detail.component.html"),
            styles: [__webpack_require__("./app/news-detail/news-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)


// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-sidedrawer/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/angular");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

/******/ });