import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
//import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { API_CONFIG } from 'src/config/api.config';
import { AuthService } from 'src/services/domain/auth.service';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(
    //private authService: AuthService,
    loadingCtrl, toastCtrl, keyboard, authService, router) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.authService = authService;
        this.router = router;
        this.wavesPosition = 0;
        this.wavesDifference = 100;
        this.userLogin = {};
        this.userRegister = {};
        this.imageUrl = API_CONFIG.baseUrl;
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.segmentChanged = function (event) {
        if (event.detail.value === 'login') {
            this.slides.slidePrev();
        }
        else {
            this.slides.slideNext();
        }
    };
    LoginPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.login(this.userLogin)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        this.presentToast(error_1.error.error);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        this.router.navigate(['tabs/search']);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.register(this.userRegister)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        this.presentToast(error_2.error.error);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        this.router.navigate(['tabs/search']);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({ message: 'Aguarde...' })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: message, duration: 2000 })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChild(IonSlides),
        tslib_1.__metadata("design:type", IonSlides)
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            ToastController,
            Keyboard,
            AuthService,
            Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map