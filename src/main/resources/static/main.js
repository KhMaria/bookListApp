(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Book.ts":
/*!*************************!*\
  !*** ./src/app/Book.ts ***!
  \*************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, author, name) {
        this.id = id;
        this.author = author;
        this.name = name;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\r\n    width: 100%; margin: auto;\r\n    position: relative; /* Относительное позиционирование */ \r\n}\r\n.sidebar, .content { position: absolute; }\r\n.sidebar {\r\n    background: rgb(255, 255, 255); /* Цвет фона */\r\n    width: 50%; /* Ширина колонки */\r\n}\r\n.content {\r\n    background: rgb(255, 255, 255); /* Цвет фона */\r\n    left: 25%; /* Сдвиг вправо */\r\n    width: 75%; /* Ширина колонки */\r\n}\r\n.book-card {\r\n    max-width: 200px;\r\n    max-height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLEVBQUUsWUFBWTtJQUN6QixrQkFBa0IsRUFBRSxtQ0FBbUM7QUFDM0Q7QUFDQSxxQkFBcUIsa0JBQWtCLEVBQUU7QUFDekM7SUFDSSw4QkFBOEIsRUFBRSxjQUFjO0lBQzlDLFVBQVUsRUFBRSxtQkFBbUI7QUFDbkM7QUFDQTtJQUNJLDhCQUE4QixFQUFFLGNBQWM7SUFDOUMsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QixVQUFVLEVBQUUsbUJBQW1CO0FBQ25DO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICAgIHdpZHRoOiAxMDAlOyBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qINCe0YLQvdC+0YHQuNGC0LXQu9GM0L3QvtC1INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNC1ICovIFxyXG59XHJcbi5zaWRlYmFyLCAuY29udGVudCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxyXG4uc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qINCm0LLQtdGCINGE0L7QvdCwICovXHJcbiAgICB3aWR0aDogNTAlOyAvKiDQqNC40YDQuNC90LAg0LrQvtC70L7QvdC60LggKi9cclxufVxyXG4uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7IC8qINCm0LLQtdGCINGE0L7QvdCwICovXHJcbiAgICBsZWZ0OiAyNSU7IC8qINCh0LTQstC40LMg0LLQv9GA0LDQstC+ICovXHJcbiAgICB3aWR0aDogNzUlOyAvKiDQqNC40YDQuNC90LAg0LrQvtC70L7QvdC60LggKi9cclxufVxyXG4uYm9vay1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_books_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/data/books-data.service */ "./src/app/service/data/books-data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(bookService) {
        this.bookService = bookService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.retrieveAllBooks().subscribe(function (data) {
            _this.books = data;
        });
    };
    AppComponent.prototype.onAddBook = function (book) {
        this.books.push(book);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n  <div class=\"layout\">\n  <div class=\"sidebar\"></div>\n    <div class=\"content\">\n        <app-books-list [books]=\"books\"></app-books-list>\n        <app-new-book-form (onAddBook)=\"onAddBook($event)\"></app-new-book-form>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_books_data_service__WEBPACK_IMPORTED_MODULE_2__["BooksDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:8080';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./books-list/books-list.component */ "./src/app/books-list/books-list.component.ts");
/* harmony import */ var _new_book_form_new_book_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-book-form/new-book-form.component */ "./src/app/new-book-form/new-book-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _books_list_books_list_component__WEBPACK_IMPORTED_MODULE_5__["BooksListComponent"],
                _new_book_form_new_book_form_component__WEBPACK_IMPORTED_MODULE_6__["NewBookFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books-list/books-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/books-list/books-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLWxpc3QvYm9va3MtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/books-list/books-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/books-list/books-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let book of books\">\r\n    <li>{{book.author}} \"{{book.name}}\"</li>\r\n</ul>"

/***/ }),

/***/ "./src/app/books-list/books-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/books-list/books-list.component.ts ***!
  \****************************************************/
/*! exports provided: BooksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksListComponent", function() { return BooksListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BooksListComponent = /** @class */ (function () {
    function BooksListComponent() {
    }
    BooksListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BooksListComponent.prototype, "books", void 0);
    BooksListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books-list',
            template: __webpack_require__(/*! ./books-list.component.html */ "./src/app/books-list/books-list.component.html"),
            styles: [__webpack_require__(/*! ./books-list.component.css */ "./src/app/books-list/books-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BooksListComponent);
    return BooksListComponent;
}());



/***/ }),

/***/ "./src/app/new-book-form/new-book-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/new-book-form/new-book-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-card {\r\n    max-width: 200px;\r\n    max-height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWJvb2stZm9ybS9uZXctYm9vay1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmV3LWJvb2stZm9ybS9uZXctYm9vay1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vay1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/new-book-form/new-book-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/new-book-form/new-book-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"book-card\">\r\n    <mat-card-header>\r\n        <h3>Add new book</h3>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <form name=\"new-book-form\" (ngSubmit)=\"!bookForm.invalid && addBook()\" #bookForm=\"ngForm\">\r\n            <div>Author:</div> \r\n            <div><input name=\"author\" type=\"text\" [(ngModel)]=\"author\" size=\"25\" maxlength=\"30\" #authorName=\"ngModel\"\r\n                required /></div>\r\n            <div>Book name:</div> \r\n            <div><input name=\"name\" type=\"text\" [(ngModel)]=\"name\" size=\"25\" maxlength=\"30\" #bookName=\"ngModel\" required />\r\n            </div>\r\n\r\n            <button mat-raised-button type=\"submit\">Add</button>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/new-book-form/new-book-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/new-book-form/new-book-form.component.ts ***!
  \**********************************************************/
/*! exports provided: NewBookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBookFormComponent", function() { return NewBookFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_books_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/books-data.service */ "./src/app/service/data/books-data.service.ts");



var NewBookFormComponent = /** @class */ (function () {
    function NewBookFormComponent(bookService) {
        this.bookService = bookService;
        this.author = '';
        this.name = '';
        this.onAddBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewBookFormComponent.prototype.addBook = function () {
        var _this = this;
        this.bookService.addBook(this.author, this.name).subscribe(function (data) { return _this.addBookToList(data); });
        this.author = '';
        this.name = '';
    };
    NewBookFormComponent.prototype.addBookToList = function (book) {
        this.onAddBook.emit(book);
    };
    NewBookFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewBookFormComponent.prototype, "onAddBook", void 0);
    NewBookFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-book-form',
            template: __webpack_require__(/*! ./new-book-form.component.html */ "./src/app/new-book-form/new-book-form.component.html"),
            styles: [__webpack_require__(/*! ./new-book-form.component.css */ "./src/app/new-book-form/new-book-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_books_data_service__WEBPACK_IMPORTED_MODULE_2__["BooksDataService"]])
    ], NewBookFormComponent);
    return NewBookFormComponent;
}());



/***/ }),

/***/ "./src/app/service/data/books-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/data/books-data.service.ts ***!
  \****************************************************/
/*! exports provided: HelloWorldBean, BooksDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldBean", function() { return HelloWorldBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksDataService", function() { return BooksDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Book */ "./src/app/Book.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app.constants */ "./src/app/app.constants.ts");





var HelloWorldBean = /** @class */ (function () {
    function HelloWorldBean(message) {
        this.message = message;
    }
    return HelloWorldBean;
}());

var BooksDataService = /** @class */ (function () {
    function BooksDataService(httpClient) {
        this.httpClient = httpClient;
    }
    BooksDataService.prototype.retrieveAllBooks = function () {
        return this.httpClient.get(_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/books-list');
    };
    BooksDataService.prototype.addBook = function (author, name) {
        return this.httpClient.post(_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + '/books-list', new src_app_Book__WEBPACK_IMPORTED_MODULE_3__["Book"](-1, author, name));
    };
    BooksDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BooksDataService);
    return BooksDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hvost\OneDrive\Documents\GitHub\booksListApp\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map