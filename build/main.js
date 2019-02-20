webpackJsonp([3],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\config\config.html"*/'<!--\n  Generated template for the ConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>config</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, fds) {
        this.navCtrl = navCtrl;
        this.fds = fds;
        this.itemTurn = {};
        this.actualComponent = '0';
    }
    DetailPage.prototype.ngOnInit = function () {
        //called after the constructor and called  after the first ngOnChanges() 
        this.itemTurn = this.fds.actualItemTurn;
        if (this.itemTurn.event === 'Q') {
            this.actualComponent = '1'; //Items
        }
        else {
            this.actualComponent = '2'; //Chats
        }
    };
    DetailPage.prototype.showDetaComponent = function (i) {
        this.actualComponent = i;
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\detail\detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <span class="title">{{ itemTurn.server_title }}:</span>\n      <span class="sub-title">{{ itemTurn.server_title }}</span>\n    <ion-buttons end>\n      <button ion-button round outline (click)="showDetaComponent(\'1\')" class="cmargin">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n      <button ion-button round outline (click)="showDetaComponent(\'2\')" class="cmargin">\n        <ion-icon color="secondary" name="chatboxes"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <deta-item *ngIf="actualComponent===\'1\'"></deta-item>\n  <deta-chat *ngIf="actualComponent===\'2\'"></deta-chat>\n</ion-content>\n'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, fds) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fds = fds;
        this.itemClient = {};
        this.itemClient = this.fds.itemClient;
        this.infoIsPage = this.fds.infoIsPage;
    }
    InfoPage.prototype.saveItemClient = function () {
        this.fds.updateClient(this.itemClient);
        if (this.infoIsPage) {
            this.navCtrl.pop();
        }
        else {
            this.fds.actualItemTurn.security = this.itemClient.security_level;
            this.fds.someEvent(this.fds.actualItemTurn, String(this.fds.actualItemTurn.security), '');
        }
        ;
    };
    InfoPage.prototype.onBackClick = function () {
        this.navCtrl.pop();
        ;
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\info\info.html"*/'<ion-header *ngIf="infoIsPage === true">\n\n  <ion-navbar color="primary">\n    <ion-title>información</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Nombre</ion-label>\n      <ion-input [(ngModel)]="itemClient.title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Identificación</ion-label>\n      <ion-input autocomplete="on" [(ngModel)]="itemClient.id"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label color="primary" floating>Foto</ion-label>\n      <ion-input [(ngModel)]="itemClient.logo"></ion-input>\n    </ion-item>\n    \n      <ion-item>\n        <ion-label color="primary" floating>Teléfono</ion-label>\n        <ion-input autocomplete="on" type="tel" [(ngModel)]="itemClient.phone"></ion-input>\n      </ion-item>\n    \n    <ion-item>\n      <ion-label color="primary" floating>Dirección</ion-label>\n      <ion-input autocomplete="on" [(ngModel)]="itemClient.addr"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label color="primary" floating>Correo</ion-label>\n      <ion-input type="email" autocomplete="on" [(ngModel)]="itemClient.email"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label color="primary" floating>Nivel de seguridad</ion-label>\n      <ion-select [(ngModel)]="itemClient.security_level" ok-text="Ok" cancel-text="Cancelar">\n        <ion-option value="0">Ocultar información</ion-option>\n        <ion-option value="1">Solo Nombre</ion-option>\n        <ion-option value="2">Nombre e identifación</ion-option>\n        <ion-option value="3">Toda la información</ion-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item>\n      <button ion-button shape="round" color="primary" full (click)="saveItemClient()">Salvar</button>   \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 233:
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
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/config/config.module": [
		594,
		2
	],
	"../pages/detail/detail.module": [
		595,
		1
	],
	"../pages/info/info.module": [
		596,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 274;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_menu_main_menu__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_qscanner_qscanner__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_detail__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fds, af, popCtrl, QrScanner, toastMsg, alertCtrl) {
        this.navCtrl = navCtrl;
        this.fds = fds;
        this.af = af;
        this.popCtrl = popCtrl;
        this.QrScanner = QrScanner;
        this.toastMsg = toastMsg;
        this.alertCtrl = alertCtrl;
        this.turnList = [];
        this.turnOrder = 0;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.af.get('clientId').then(function (data) {
            //recupero de firestore la información del registro
            var myId = data;
            if (!data) {
                myId = _this.onCreateClient();
            }
            _this.fds.getClientInfo(myId).then(function (doc) {
                if (doc.data()) {
                    //si la obtengo, la guardo en una variable del servicio firestoredata.service
                    _this.fds.itemClient = doc.data();
                    //No se ha llenado el formulario
                    if (_this.fds.itemClient.title == '' || _this.fds.itemClient.id == '') {
                        _this.presentToast('Es buen momento para completar su perfil', 5000);
                    }
                    ;
                    _this.TurnEventSubsc = _this.fds.addTurnObservable().subscribe(function (aList) {
                        _this.turnList = [];
                        _this.turnList = aList;
                        //ordenar
                        _this.turnList.sort(function (a, b) {
                            return a.stat - b.stat;
                        });
                        for (var i = 0; i < _this.turnList.length; i++) {
                            _this.onchangeEventTurn(i);
                        }
                        ;
                    });
                }
                else {
                    _this.onAlert('Error datos eliminados', 'Debe ingresar de nuevo la información');
                    _this.onCreateClient();
                }
            }).catch(function (error) { return console.log(error); });
        }, function (error) {
            _this.onAlert('Error datos eliminados', 'Debe ingresar de nuevo la información');
            _this.onCreateClient();
        });
    };
    HomePage.prototype.showMainMenu = function (thisEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pvr;
            return __generator(this, function (_a) {
                pvr = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_main_menu_main_menu__["a" /* MainMenuComponent */]);
                pvr.present({ ev: thisEvent });
                pvr.onDidDismiss(function (dt) {
                    if (dt) {
                        _this.navigateTo(dt);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.navigateTo = function (rt) {
        switch (rt) {
            case 't':
                this.navCtrl.push(HomePage_1);
                break;
            case 'i':
                this.fds.infoIsPage = true;
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */]);
                break;
            case 's':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* ConfigPage */]);
                break;
        }
    };
    /********************************** SCANNER SCANNER SCANER ********************************** */
    HomePage.prototype.showQScanner = function (ev) {
        var _this = this;
        this.QrScanner.scan().then(function (barcodeData) {
            var msg = _this.fds.Securityinfo(_this.fds.itemClient.security_level);
            _this.fds.addTurnEvent(barcodeData.text, msg);
        }).catch(function (err) {
            _this.presentToast(err, 2000);
            _this.showQScannerAlternative();
        });
    };
    /*async showQScanner(ev:any) {
      const modal = await this.modalCtrl.create({component: QscannerComponent});
      await modal.present();
    }*/
    HomePage.prototype.showQScannerAlternative = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pvr;
            return __generator(this, function (_a) {
                pvr = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_8__components_qscanner_qscanner__["a" /* QscannerComponent */]);
                pvr.present();
                pvr.onDidDismiss(function (data) {
                    var msg = _this.fds.Securityinfo(_this.fds.itemClient.security_level);
                    _this.fds.addTurnEvent(data, msg);
                    navigator.vibrate(100);
                });
                return [2 /*return*/];
            });
        });
    };
    /*************************************************************************** */
    HomePage.prototype.onCreateClient = function () {
        var client = {};
        client.myId = this.fds.NewId();
        client.addr = '';
        client.addr_geo = '';
        client.security_level = 0;
        client.email = '';
        client.id = '';
        client.logo = '';
        client.phone = '';
        client.title = '';
        client.type = 'C';
        this.fds.updateClient(client);
        this.fds.itemClient = client;
        this.af.set('clientId', client.myId);
        return client.myId;
    };
    /*
    async presentToast() {
      const toast = await this.toastMsg.create({
        message: 'Your settings have been saved.',
        duration: 2000
      });
      toast.present();
    }
    */
    HomePage.prototype.presentToast = function (msg, timeOn) {
        this.tostOptions = {
            message: msg,
            showCloseButton: true,
            duration: timeOn,
            position: 'bottom',
            closeButtonText: 'Editar'
        };
        this.toastMsg.create(this.tostOptions).present();
    };
    ;
    //******************************* TURN TURN EVENTS EVENTS ***************************/
    HomePage.prototype.onchangeEventTurn = function (index) {
        var t = this.turnList[index];
        t.open = t.status == 'A' || t.status == 'C' || t.status == 'P';
        if (t.event === '_') {
            switch (t.status) {
                case 'A':
                    t.status_string = 'Atendiendo...';
                    break;
                case 'C':
                    t.status_string = 'Llamada...';
                    break;
                case 'P':
                    t.status_string = 'Pausado...';
                    break;
                case 'S':
                    t.status_string = 'Asignado...';
                    break;
                case 'K':
                    t.status_string = 'Aplazado...';
                    break;
            }
        }
    };
    HomePage.prototype.onDeleteEvent = function (turnId) {
        this.fds.someEvent(this.turnList[turnId], 'D', '');
        //Elimino el registro para asegurar que borra aun si el servidor esta inactivo.
        this.turnList.splice(turnId, 1);
    };
    HomePage.prototype.onPauseEvent = function (thisTurn) {
        this.fds.someEvent(thisTurn, 'P', '');
    };
    HomePage.prototype.onContinueEvent = function (thisTurn) {
        this.fds.someEvent(thisTurn, 'S', '');
    };
    HomePage.prototype.onTapCard = function (thisTurn) {
        this.fds.infoIsPage = false; //Para esconder el navegador de info
        this.fds.actualItemTurn = thisTurn;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__detail_detail__["a" /* DetailPage */]);
    };
    HomePage.prototype.onStateOfTurn = function (turnItem) {
        if (turnItem.status == 'S' || turnItem.status == 'K') {
            var s = turnItem.assignedTurn.substr(0, 10) + ' | Pos: ' + turnItem.pos + ' | ' + turnItem.stat + ' min';
            return s;
        }
        else if (turnItem.status == 'C' || turnItem.status == 'A') {
            return turnItem.window_title;
        }
    };
    HomePage.prototype.onOrder = function () {
        if (this.turnOrder == 1) {
            this.turnOrder = 0;
        }
        else {
            this.turnOrder = 1;
        }
        switch (this.turnOrder) {
            case 0:
                return 'Posicion';
            case 1:
                return 'Tiempo';
        }
    };
    HomePage.prototype.onAlert = function (title, msg) {
        this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Dismiss']
        }).present();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    Tiket\n    <ion-title>\n      <img src="/assets/imgs/add.png" class="logo" (click)="showQScanner($event)">\n    </ion-title>     \n    <ion-buttons end>\n      <!--<button ion-button round outline class="cmargin" (click)="onOrder()">\n        <ion-icon color="warning" name="funnel"></ion-icon>\n      </button> -->\n      <button ion-button (click)="showMainMenu($event)">\n        <ion-icon slot="icon-only" name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let turn of turnList; let i = index">\n      <button ion-item (click)="onTapCard(turn)">\n        <ion-avatar item-start>\n          <img [src]="turn.server_downloadURL || null"/>\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ turn.server_title }}</h2>\n          <h3>{{ onStateOfTurn(turn) }}</h3>\n          <p>{{ turn.status_string }}</p>\n        </ion-label>\n      </button>\n      <ion-item-options side="left">\n        <button ion-button (click)="onContinueEvent(turn)">\n          <ion-icon name="arrow-dropright"></ion-icon>\n        </button>   \n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button (click)="onPauseEvent(turn)">\n          <ion-icon name="pause"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="onDeleteEvent(i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>   \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(popCtrl) {
        this.popCtrl = popCtrl;
        console.log('Hello MainMenuComponent Component');
        this.text = 'Hello World';
    }
    MainMenuComponent.prototype.onDataNav = function (arute) {
        this.popCtrl.dismiss(arute);
    };
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-menu',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\components\main-menu\main-menu.html"*/'<ion-list no-lines>\n  <ion-item button (click)="onDataNav(\'t\')">\n    <ion-label><strong>Listado de turnos</strong></ion-label>\n  </ion-item>\n  <button ion-item (click)="onDataNav(\'i\')" no-lines>\n    <ion-label>Información</ion-label>\n    <ion-icon name="finger-print" item-start></ion-icon>\n  </button>\n  <button ion-item (click)="onDataNav(\'s\')" no-lines>\n    <ion-label>Configuración</ion-label>\n    <ion-icon name="settings" item-start></ion-icon>\n  </button>\n</ion-list>'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\components\main-menu\main-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());

//# sourceMappingURL=main-menu.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QscannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zxing_ngx_scanner__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the QscannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QscannerComponent = /** @class */ (function () {
    function QscannerComponent(popCtrl) {
        this.popCtrl = popCtrl;
        this.hasCameras = false;
        this.code = 'NJHCVGMe4XHocFlZguNI'; //OJO SOLO POR AHORA
    }
    QscannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foundCmrSubs = this.scanner.camerasFound.subscribe(function (devices) {
            _this.hasCameras = true;
            console.log('Devices: ', devices);
            _this.availableDevices = devices;
            //selects the devices's back camera by default
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (/back|rear|environment/gi.test(device.label)) {
                    _this.scanner.changeDevice(device);
                    _this.selectedDevice = device;
                    break;
                }
            }
        });
        this.noFoundCmrSubs = this.scanner.camerasNotFound.subscribe(function (devices) {
            console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
        });
        this.permSubs = this.scanner.permissionResponse.subscribe(function (answer) {
            _this.hasPermission = answer;
        });
    };
    QscannerComponent.prototype.handleQrCodeResult = function (resultString) {
        //console.log('Result: ', resultString);
        //this.fds.addTurnEvent(resultString);
        //navigator.vibrate(100);
        this.popCtrl.dismiss(resultString);
    };
    QscannerComponent.prototype.onDeviceSelectChange = function (selectedValue) {
        //console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    };
    QscannerComponent.prototype.onManualIng = function () {
        //this.fds.addTurnEvent(this.code);
        //navigator.vibrate(100);
        this.code = prompt('Escriba el código de acceso', '');
        if (this.code) {
            this.popCtrl.dismiss(this.code);
        }
        ;
        //this.router.navigate(['/turns']); //.catch(rason => console.log(rason));
    };
    QscannerComponent.prototype.ngOnDestroy = function () {
        this.foundCmrSubs.unsubscribe();
        this.noFoundCmrSubs.unsubscribe();
        this.permSubs.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scanner'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__zxing_ngx_scanner__["a" /* ZXingScannerComponent */])
    ], QscannerComponent.prototype, "scanner", void 0);
    QscannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qscanner',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\components\qscanner\qscanner.html"*/'\n<ion-item>\n    <ion-label color="primary" floating>Cámaras</ion-label>\n    <ion-select \n      (value)="device.label" \n      (ionChange)="onDeviceSelectChange($event.target.value)" \n      ok-text="Ok" cancel-text="Cancelar"\n    >\n    <ion-option *ngFor="let device of availableDevices" value="device.deviceId">{{device.label}}</ion-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n<button ion-button round outline full (click)="onManualIng()">INGRESO MANUAL</button>\n</ion-item>\n\n<div [hidden]="!hasCameras">  \n  <zxing-scanner #scanner class="test-class" start="true" [device]="selectedDevice" (scanSuccess)="handleQrCodeResult($event)"></zxing-scanner>\n  \n  <h2 *ngIf="!this.selectedDevice">Debe seleccionar una cámara.</h2>\n \n</div>\n  \n<div *ngIf="!hasCameras && hasPermission === true">\n  <h1>No hay cámaras disponibles. </h1>\n</div>\n  \n<div *ngIf="hasPermission === undefined">\n  <h1>Esperando por permiso.</h1>\n</div>\n  \n<div *ngIf="hasPermission === false">\n  <h1>Autorize el uso de la cámara para continuar</h1>\n</div>'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\components\qscanner\qscanner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */]])
    ], QscannerComponent);
    return QscannerComponent;
}());

//# sourceMappingURL=qscanner.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(488);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_firestore__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_firebase_service_firebase_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_main_menu_main_menu__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_config_config__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_info_info__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_qscanner_qscanner__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_detail_detail__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_deta_chat_deta_chat__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_deta_item_deta_item__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__zxing_ngx_scanner__ = __webpack_require__(327);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__components_main_menu_main_menu__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_qscanner_qscanner__["a" /* QscannerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_deta_chat_deta_chat__["a" /* DetaChatComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_deta_item_deta_item__["a" /* DetaItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environment__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_firestore__["b" /* AngularFirestoreModule */].enablePersistence({ experimentalTabSynchronization: true }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20__zxing_ngx_scanner__["b" /* ZXingScannerModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__components_main_menu_main_menu__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_qscanner_qscanner__["a" /* QscannerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_detail_detail__["a" /* DetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(321);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyCbgW_NyW6R1Ys9_DTMGrAsla-kuse0nU8",
    authDomain: "turnero002-c11e2.firebaseapp.com",
    databaseURL: "https://turnero002-c11e2.firebaseio.com",
    projectId: "turnero002-c11e2",
    storageBucket: "turnero002-c11e2.appspot.com",
    messagingSenderId: "737807924237"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetaChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_service_firebase_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetaChatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DetaChatComponent = /** @class */ (function () {
    function DetaChatComponent(fds, SecuritySelect) {
        this.fds = fds;
        this.SecuritySelect = SecuritySelect;
        this.chats = [];
        this.message = '';
    }
    DetaChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.windClient = this.fds.actualItemTurn.window_title;
        this.itemChatSubs = this.fds.addTurnChatObservable(this.fds.actualItemTurn.chatId)
            .subscribe(function (chatInfo) {
            debugger;
            if (chatInfo && chatInfo.stream) {
                _this.chats = JSON.parse(chatInfo.stream);
                setTimeout(function () {
                    if (_this.content._scroll) {
                        _this.content.scrollToBottom(0);
                    }
                }, 200);
            }
        });
    };
    DetaChatComponent.prototype.sendMessage = function () {
        if (this.message) {
            this.fds.chatEvent(this.chats, this.message);
            this.message = '';
        }
    };
    DetaChatComponent.prototype.showSecuritySel = function () {
        var _this = this;
        var act = this.SecuritySelect.create();
        act.setTitle('Seguridad');
        act.setMessage('Información disponible para el proveedor');
        act.addInput({ type: 'radio', label: 'No información', value: '0', checked: this.fds.actualItemTurn.security == 0 });
        act.addInput({ type: 'radio', label: 'Nombre', value: '1', checked: this.fds.actualItemTurn.security == 1 });
        act.addInput({ type: 'radio', label: 'Nombre + identificación', value: '2', checked: this.fds.actualItemTurn.security == 2 });
        act.addInput({ type: 'radio', label: 'Información contacto', value: '3', checked: this.fds.actualItemTurn.security == 3 });
        act.addButton('Salir');
        act.addButton({
            text: 'Salvar',
            handler: function (data) {
                var m = '';
                _this.fds.actualItemTurn.security = Number(data);
                if (_this.fds.actualItemTurn.security > 0) {
                    m = _this.fds.itemClient.title;
                }
                else {
                    m = _this.fds.actualItemTurn.turnCode;
                }
                _this.fds.actualItemTurn.assignedTurn = m;
                _this.fds.someEvent(_this.fds.actualItemTurn, data, m);
                var levelInfo = _this.fds.Securityinfo(_this.fds.actualItemTurn.security);
                //levelInfo = this.fds.Securityinfo();
                _this.fds.chatEvent(_this.chats, levelInfo);
            }
        });
        act.present();
    };
    DetaChatComponent.prototype.ngOnDestroy = function () {
        this.itemChatSubs.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mycontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
    ], DetaChatComponent.prototype, "content", void 0);
    DetaChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'deta-chat',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\components\deta-chat\deta-chat.html"*/'\n<ion-content #mycontent no-padding>\n  <div>\n\n      <span *ngFor="let chat of chats">\n          <ng-template [ngIf]="chat.origin === \'C\'" [ngIfElse]="clientarea">\n            <div class="chat-message message-right">\n              <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n              <div class="msg-msg" [innerHTML]=chat.msg></div>\n            </div>\n          </ng-template>\n    \n          <ng-template #clientarea>\n            <div class="chat-message message-left">\n              <span class="msg-date">{{chat.date | date:\'short\'}}</span>\n              <div class="msg-msg" [innerHTML]=chat.msg></div>\n            </div>\n          </ng-template>\n        </span>\n        \n  </div>\n \n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n          <button ion-button (click)="showSecuritySel()">\n            <ion-icon name="person"></ion-icon>\n          </button>\n        </ion-col>\n      <ion-col col-8>\n        <ion-input type="text" placeholder="Mensaje" [(ngModel)]="message" (keyup.enter)="sendMessage()" name="message">\n        </ion-input>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button outline (click)="sendMessage()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\components\deta-chat\deta-chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], DetaChatComponent);
    return DetaChatComponent;
}());

//# sourceMappingURL=deta-chat.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetaItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_firebase_service_firebase_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetaItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DetaItemComponent = /** @class */ (function () {
    function DetaItemComponent(fds, moreDetaSelect) {
        this.fds = fds;
        this.moreDetaSelect = moreDetaSelect;
        this.items = [];
        this.windClient = '';
        this.edited = false;
        this.itemstaxTtl = '';
        this.itemsTtl = '';
        this.alternateclass = '';
    }
    DetaItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.itemSubs = this.fds.addTurnItemObservable(this.fds.actualItemTurn.itemId).subscribe(function (chatList) {
            debugger;
            _this.windClient = _this.fds.actualItemTurn.window_title;
            if (chatList.stream) {
                try {
                    _this.items = JSON.parse(chatList.stream);
                    _this.calculate();
                    _this.edited = false;
                    _this.alternateclass = 'values';
                }
                catch (error) {
                    console.log(error);
                }
            }
        });
    };
    DetaItemComponent.prototype.ngOnDestroy = function () {
        debugger;
        this.itemSubs.unsubscribe();
    };
    DetaItemComponent.prototype.onMore = function (item) {
        item.amount++;
        item.total = item.amount * item.price;
        this.edited = true;
        this.alternateclass = 'values-before';
        this.calculate();
    };
    DetaItemComponent.prototype.onLess = function (item) {
        if (item.amount > 0) {
            item.amount--;
            item.total = item.amount * item.price;
            this.edited = true;
            this.alternateclass = 'values-before';
            this.calculate();
        }
    };
    DetaItemComponent.prototype.calculate = function () {
        var tx = 0;
        var tt = 0;
        this.items.forEach(function (i) {
            tx += (i.amount * i.tax);
            tt += (i.amount * i.price);
        });
        this.itemstaxTtl = 'Imp.' + this.toCurrencyStr(tx);
        this.itemsTtl = 'Total' + this.toCurrencyStr(tt);
    };
    DetaItemComponent.prototype.sendItemList = function () {
        if (this.edited) {
            this.fds.itemEvent(this.items);
        }
    };
    ;
    DetaItemComponent.prototype.reloadItems = function () {
    };
    DetaItemComponent.prototype.showDetaItem = function (item) {
        var act = this.moreDetaSelect.create();
        act.setTitle(item.title);
        act.setMessage(item.description);
        act.addButton('Salir');
        act.present();
    };
    DetaItemComponent.prototype.toCurrencyStr = function (n) {
        return '$ ' + (n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        ;
    };
    DetaItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'deta-item',template:/*ion-inline-start:"I:\Proyectos\turnero\ionic\takitCli003\src\components\deta-item\deta-item.html"*/'\n<ion-content no-padding no-margin>\n  <ion-grid no-padding>\n    <span *ngFor="let item of items">\n      <ng-template [ngIf]="item.type === \'I\'" [ngIfElse]="grouphead">    \n\n        <ion-item no-margin no-padding class="ItemSpace">\n          <ion-row no-padding (click)="showDetaItem(item)">\n            <ion-col no-padding col-3>\n              <img class="image" [src]="item.downloadURL || null"/>\n            </ion-col>\n            <ion-col col-9>\n              <ion-row>\n                <ion-col align-self-start class="title">\n                  <label text-wrap>{{item.title}}</label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class="description">\n                  {{item.description}}\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-3 style="text-align: center;">\n              <span class="values price">{{item.price | currency}}</span>\n            </ion-col>\n            <ion-col col-4 class="values value-decoration" style="text-align: right;">\n              <span no-padding no-margin>\n                <button (click)="onMore(item)">+</button>\n                {{item.amount}}\n                <button (click)="onLess(item)">-</button>\n              </span>          \n            </ion-col>\n            <ion-col col-5 justify-content-right class="value-decoration values">\n              <span item-end class="values">{{item.total | currency}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ng-template>\n\n      <ng-template #grouphead>\n        \n        <ion-row no-margin no-padding>\n          <ion-col col-12 class="group-space">\n          </ion-col>\n        </ion-row>\n          <ion-row no-margin no-padding>\n            <ion-col col-12>\n            <img class="group-image" [src]="item.downloadURL || null"/>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12 class="group-title" no-margin no-padding>\n              {{ item.title }}\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="group-description" col-12>\n              {{ item.description }}\n            </ion-col>\n          </ion-row>\n        \n      </ng-template>\n\n  </span>\n\n  </ion-grid>\n    \n</ion-content>\n\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-5>\n          <span [className]="alternateclass">{{ itemstaxTtl }}</span>\n      </ion-col>\n      <ion-col col-6>\n          <span  [className]="alternateclass">{{ itemsTtl }}</span>\n      </ion-col>\n      <ion-col col-1>\n        <span *ngIf="edited">\n          <ion-icon name="send" (click)="sendItemList()"></ion-icon>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"I:\Proyectos\turnero\ionic\takitCli003\src\components\deta-item\deta-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], DetaItemComponent);
    return DetaItemComponent;
}());

//# sourceMappingURL=deta-item.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(afs) {
        this.afs = afs;
        this.itemClient = { type: "N" };
        this.actualItemTurn = {};
        this.infoIsPage = false;
    }
    //Id inicial, para subscribirse
    FirebaseServiceProvider.prototype.getClientInfo = function (ClientId) {
        return this.afs.collection('client').doc(ClientId).ref.get();
    };
    FirebaseServiceProvider.prototype.updateClient = function (Client) {
        this.itemClient = Client;
        this.afs.collection('client').doc(Client.myId).ref.set(Client);
    };
    FirebaseServiceProvider.prototype.deleteClient = function (Client) {
    };
    FirebaseServiceProvider.prototype.NewId = function () {
        return this.afs.createId();
    };
    //............................. TURNOS ..............................
    //............................. TURNOS ..............................
    //............................. TURNOS ..............................
    //turnEventCollection : AngularFirestoreCollection<turn>;
    /* getTurnInfo(turnInd:string){
      return this.afs.collection('events').doc(turnInd).ref.get();
    } */
    //Observamos la lista de eventos hacia el servidor
    FirebaseServiceProvider.prototype.addTurnObservable = function () {
        var _this = this;
        return this.afs.collection('turn', function (ref) {
            return ref
                .where('active', '==', true)
                .where('key_client', '==', _this.itemClient.myId);
        }).valueChanges();
        //return this.turnEventCollection.valueChanges();
    };
    FirebaseServiceProvider.prototype.getOneTurnObservable = function (turnInd) {
        //return this.afs.collection('turn').doc(turnInd).ref.get();
        return this.afs.collection('turn', function (ref) {
            return ref
                .where('myId', '==', turnInd);
        }).valueChanges();
    };
    //................................ EVENTOS EVENTOS EVENTOS EVENTOS .....................................
    //................................ EVENTOS EVENTOS EVENTOS EVENTOS .....................................
    //................................ EVENTOS EVENTOS EVENTOS EVENTOS .....................................
    FirebaseServiceProvider.prototype.addEvent = function (myEvent) {
        myEvent.myId = this.afs.createId();
        myEvent.date = Date.now();
        this.afs.collection('events').doc(myEvent.myId).ref.set(myEvent);
    };
    //Solicita agregarse a la lista de turnos. El evento inicia en 
    FirebaseServiceProvider.prototype.addTurnEvent = function (serverId, clientInfo) {
        debugger;
        var myEvent = {};
        myEvent.event = 'N';
        myEvent.key_server = serverId;
        myEvent.request_id = this.itemClient.id || '...';
        myEvent.request_downloadURL = this.itemClient.downloadURL || '...';
        myEvent.request_myId = this.itemClient.myId;
        myEvent.request_title = this.itemClient.title || '...';
        myEvent.request_security = this.itemClient.security_level || 0;
        //Información de saludo de acuerdo a nivel de seguridad
        myEvent.key_turn = clientInfo || '...';
        this.addEvent(myEvent);
    };
    ;
    FirebaseServiceProvider.prototype.someEvent = function (thisTurn, thisEvent, msg) {
        var myEvent = {};
        myEvent.event = thisEvent; //S, P, cambio de nivel de seguridad 1 2 3, I mensaje
        myEvent.key_server = thisTurn.key_server;
        myEvent.key_turn = thisTurn.myId;
        myEvent.request_title = msg || '...'; //Mensaje
        myEvent.request_id = 'C'; //En caso de mensaje, si es C o es S
        this.addEvent(myEvent);
    };
    //................................... TURN CHAT ITEM ..............................
    //................................... TURN CHAT ITEM ..............................
    //................................... TURN CHAT ITEM ..............................  
    FirebaseServiceProvider.prototype.addTurnChatObservable = function (chatId) {
        return this.afs.doc('chats/' + chatId).valueChanges();
    };
    FirebaseServiceProvider.prototype.addTurnItemObservable = function (itemId) {
        return this.afs.doc('items/' + itemId).valueChanges();
    };
    FirebaseServiceProvider.prototype.updateItemChat = function (myId, type, list) {
        debugger;
        var itemChat = {};
        itemChat.stream = list;
        this.afs.collection(type).doc(myId).ref.set(itemChat);
    };
    FirebaseServiceProvider.prototype.chatEvent = function (chats, msg) {
        //agrego al chat
        var c = {};
        c.date = new (Date); //OJO
        c.msg = msg;
        c.origin = 'C';
        c.pos = chats.length;
        c.user = this.actualItemTurn.assignedTurn;
        chats.push(c);
        var cs = JSON.stringify(chats);
        this.updateItemChat(this.actualItemTurn.chatId, 'chats', cs);
        this.someEvent(this.actualItemTurn, 'I', msg);
    };
    FirebaseServiceProvider.prototype.itemEvent = function (items) {
        debugger;
        var cs = JSON.stringify(items);
        this.updateItemChat(this.actualItemTurn.itemId, 'items', cs);
        this.someEvent(this.actualItemTurn, 'Q', 'Items...');
    };
    FirebaseServiceProvider.prototype.Securityinfo = function (secLevel) {
        var msg = '';
        if (secLevel > 0) {
            msg = '<strong>Nombre: </strong>' + this.itemClient.title;
        }
        if (secLevel > 1) {
            msg = '<strong>Identificación: </strong>' + this.itemClient.id + '<br>' + msg;
        }
        if (secLevel > 2) {
            msg += '<strong>Teléfono/Celular: </strong>' + this.itemClient.phone + '<br>' +
                '<strong>Correo: </strong>' + this.itemClient.email + '<br>' +
                '<strong>Dirección: </strong>' + this.itemClient.addr + '<br>';
        }
        return msg;
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map