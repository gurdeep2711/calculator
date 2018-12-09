webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_items__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_long_press_long_press__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.ITEMS_LIST = __WEBPACK_IMPORTED_MODULE_2__models_items__["a" /* ITEMS */];
        this.CURRUNT_SHIFT = 'morning';
        this.toogleShifts = false;
        this.SHIFTS = __WEBPACK_IMPORTED_MODULE_2__models_items__["b" /* SHIFTS */];
        this.previousShit = 'morning';
    }
    HomePage.prototype.addNewOrder = function (item) {
        item.qty++;
    };
    HomePage.prototype.longPressEvent = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_long_press_long_press__["a" /* LongPressComponent */], { data: item });
        modal.onDidDismiss(function (data) {
            if (data) {
                console.log(data);
            }
        });
        modal.present();
    };
    HomePage.prototype.restItem = function () {
        this.ITEMS_LIST[this.previousShit].forEach(function (item) {
            item.qty = 0;
        });
        this.previousShit = this.CURRUNT_SHIFT;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/gurdeepsingh/Documents/calculator/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      CALCULATOR APP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div margin-bottom text-right>\n    <ion-item>\n      <ion-label>List:</ion-label>\n      <ion-toggle [(ngModel)]="toogleShifts"></ion-toggle>\n    </ion-item>\n  </div>\n  <div *ngIf="toogleShifts" margin-horizontal>\n    <ion-segment [(ngModel)]="CURRUNT_SHIFT" (ionChange)="restItem()">\n      <ion-segment-button [value]="item.name" *ngFor="let item of SHIFTS" text-capitalize>\n        {{item.name}}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 *ngFor="let item of ITEMS_LIST[CURRUNT_SHIFT]">\n        <ion-card class="s-card" (click)="addNewOrder(item)" (press)="longPressEvent(item)">\n          <ion-badge class="s-badge" *ngIf="item.qty">{{item.qty}}</ion-badge>\n          <ion-card-content class="s-content">\n            <img [src]="item.img" [alt]="item.name">\n            <div class="s-price" text-center>{{item.price}}</div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/gurdeepsingh/Documents/calculator/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongPressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LongPressComponent = /** @class */ (function () {
    function LongPressComponent(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.currentQty = 0;
        if (this.navParams.get('data')) {
            this.DATA = this.navParams.get('data');
            this.currentQty = this.DATA['qty'];
        }
    }
    LongPressComponent.prototype.closeModal = function (data) {
        var _DATA = this.DATA;
        if (data) {
            data = Math.abs(data);
            data = Math.floor(data);
            Object.assign(_DATA, { qty: data });
        }
        this.viewCtrl.dismiss(_DATA);
    };
    LongPressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'long-press',template:/*ion-inline-start:"/Users/gurdeepsingh/Documents/calculator/src/components/long-press/long-press.html"*/'<div class="s-modal-container">\n  <div class="s-modal-content">\n    <div class="s-modal-heading">\n      {{DATA[\'name\']}}\n      <div class="s-close" (click)="closeModal(null)">\n        <ion-icon name="close-circle" color="danger"></ion-icon>\n      </div>\n    </div>\n    <div class="s-modal-body">\n      <form #editQtyForm="ngForm" (submit)="closeModal(currentQty)">\n        <ion-item>\n          <ion-label floating>QTY</ion-label>\n          <ion-input type="tel" name="qty" minlength="1" maxlength="3" pattern="[0-9]+" [(ngModel)]="currentQty" #qty="ngModel"\n            required></ion-input>\n        </ion-item>\n        <div class="s-errors" *ngIf="qty.invalid && (qty.dirty || qty.touched)">\n          <div *ngIf="qty.errors[\'pattern\']">\n            QTY is invalid.\n          </div>\n          <div *ngIf="qty.errors[\'required\']">\n            QTY is required\n          </div>\n        </div>\n        <div text-right>\n          <button ion-button type="submit" [disabled]="editQtyForm.invalid">\n            Done\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/gurdeepsingh/Documents/calculator/src/components/long-press/long-press.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], LongPressComponent);
    return LongPressComponent;
}());

//# sourceMappingURL=long-press.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_long_press_long_press__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_long_press_long_press__["a" /* LongPressComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_long_press_long_press__["a" /* LongPressComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/gurdeepsingh/Documents/calculator/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/gurdeepsingh/Documents/calculator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHIFTS; });
var ITEMS = {
    'morning': [
        {
            id: 1,
            name: "Parle G",
            price: 4,
            img: 'assets/imgs/16.png',
            qty: 0
        },
        {
            id: 2,
            name: "Monaco",
            price: 4,
            img: 'assets/imgs/11.png',
            qty: 0
        },
        {
            id: 3,
            name: "Tea",
            price: 5,
            img: 'assets/imgs/22.png',
            qty: 0
        },
        {
            id: 4,
            name: "Rusk",
            price: 3,
            img: 'assets/imgs/18.png',
            qty: 0
        },
        {
            id: 5,
            name: "Burger",
            price: 6,
            img: 'assets/imgs/4.png',
            qty: 0
        },
        {
            id: 6,
            name: "Jumpin",
            price: 9,
            img: 'assets/imgs/8.png',
            qty: 0
        },
        {
            id: 7,
            name: "Chaach",
            price: 4,
            img: 'assets/imgs/5.png',
            qty: 0
        }
    ],
    'afternoon': [
        {
            id: 1,
            name: "Parle G",
            price: 4,
            img: 'assets/imgs/16.png',
            qty: 0
        },
        {
            id: 2,
            name: "Monaco",
            price: 4,
            img: 'assets/imgs/11.png',
            qty: 0
        },
        {
            id: 3,
            name: "Tea",
            price: 5,
            img: 'assets/imgs/22.png',
            qty: 0
        },
        {
            id: 4,
            name: "Rusk",
            price: 3,
            img: 'assets/imgs/18.png',
            qty: 0
        },
        {
            id: 5,
            name: "Burger",
            price: 6,
            img: 'assets/imgs/4.png',
            qty: 0
        },
        {
            id: 6,
            name: "Jumpin",
            price: 9,
            img: 'assets/imgs/8.png',
            qty: 0
        },
        {
            id: 7,
            name: "Chaach",
            price: 4,
            img: 'assets/imgs/5.png',
            qty: 0
        },
        {
            id: 8,
            name: "Thali",
            price: 27,
            img: 'assets/imgs/23.png',
            qty: 0
        },
        {
            id: 9,
            name: "Raita",
            price: 0,
            img: 'assets/imgs/17.png',
            qty: 0
        },
        {
            id: 10,
            name: "Packed Lunch",
            price: 2,
            img: 'assets/imgs/13.png',
            qty: 0
        },
        {
            id: 11,
            name: "Subzi",
            price: 4,
            img: 'assets/imgs/21.png',
            qty: 0
        }
    ],
    'evening': [
        {
            id: 1,
            name: "Parle G",
            price: 4,
            img: 'assets/imgs/16.png',
            qty: 0
        },
        {
            id: 2,
            name: "Monaco",
            price: 4,
            img: 'assets/imgs/11.png',
            qty: 0
        },
        {
            id: 3,
            name: "Tea",
            price: 5,
            img: 'assets/imgs/22.png',
            qty: 0
        },
        {
            id: 4,
            name: "Rusk",
            price: 3,
            img: 'assets/imgs/18.png',
            qty: 0
        },
        {
            id: 5,
            name: "Burger",
            price: 6,
            img: 'assets/imgs/4.png',
            qty: 0
        },
        {
            id: 6,
            name: "Jumpin",
            price: 9,
            img: 'assets/imgs/8.png',
            qty: 0
        },
        {
            id: 7,
            name: "Chaach",
            price: 4,
            img: 'assets/imgs/5.png',
            qty: 0
        },
        {
            id: 12,
            name: "Pakora",
            price: 6,
            img: 'assets/imgs/14.png',
            qty: 0
        },
        {
            id: 13,
            name: "Sandwich",
            price: 6,
            img: 'assets/imgs/19.png',
            qty: 0
        }
    ],
    'night': [
        {
            id: 14,
            name: "Milk",
            price: 9,
            img: 'assets/imgs/10.png',
            qty: 0
        }
    ]
};
var SHIFTS = [
    {
        name: 'morning'
    },
    {
        name: 'afternoon'
    },
    {
        name: 'evening'
    },
    {
        name: 'night'
    }
];
//# sourceMappingURL=items.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map