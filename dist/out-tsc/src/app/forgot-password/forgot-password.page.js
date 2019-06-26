import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from 'src/services/domain/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(loadingCtrl, toastCtrl, keyboard, authService, router) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.authService = authService;
        this.router = router;
        this.userLogin = {};
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.login = function () {
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
                        return [4 /*yield*/, this.authService.forgot_password(this.userLogin)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        this.presentToast(error_1.message);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        this.router.navigate(['reset-password']);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage.prototype.presentLoading = function () {
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
    ForgotPasswordPage.prototype.presentToast = function (message) {
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
    ForgotPasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.page.html',
            styleUrls: ['./forgot-password.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            ToastController,
            Keyboard,
            AuthService,
            Router])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());
export { ForgotPasswordPage };
//# sourceMappingURL=forgot-password.page.js.map