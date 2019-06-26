import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides, ToastController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ProductService } from 'src/services/domain/product.service';
import { Router } from '@angular/router';
import { BrandService } from 'src/services/domain/brand.service';
var NewProductPage = /** @class */ (function () {
    function NewProductPage(keyboard, loadingCtrl, toastCtrl, productService, brandService, router, actionSheetCtrl) {
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.productService = productService;
        this.brandService = brandService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.product = {};
        this.brand = {};
    }
    NewProductPage.prototype.ngOnInit = function () {
    };
    NewProductPage.prototype.segmentChanged = function (event) {
        if (event.detail.value === 'product') {
            this.slides.slidePrev();
        }
        else {
            this.slides.slideNext();
        }
    };
    NewProductPage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Selecione a fonte da imagem',
                            buttons: [{
                                    text: 'Galeria',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        //this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                }, {
                                    text: 'Camera',
                                    icon: 'share',
                                    handler: function () {
                                        // this.takePicture(this.camera.PictureSourceType.CAMERA);
                                    }
                                }, {
                                    text: 'Cancelar',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewProductPage.prototype.newProduct = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.Succes = true;
                        try {
                            //await this.productService.newProduct(this.product)
                        }
                        catch (error) {
                            if (error.status != 201)
                                this.Succes = false;
                            this.presentToast(error.error.error);
                        }
                        finally {
                            if (this.Succes) {
                                this.router.navigate(['tabs/search']);
                                this.presentToast("Produto adicionado na lista de pendentes");
                            }
                        }
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewProductPage.prototype.newBrand = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        this.Succes = true;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.brandService.newBrand(this.brand)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        if (error_1.status != 201)
                            this.Succes = false;
                        this.presentToast(error_1.error.error);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        if (this.Succes) {
                            this.router.navigate(['tabs/search']);
                            this.presentToast("Marca adicionado na lista de pendentes");
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    NewProductPage.prototype.presentLoading = function () {
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
    NewProductPage.prototype.presentToast = function (message) {
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
    ], NewProductPage.prototype, "slides", void 0);
    NewProductPage = tslib_1.__decorate([
        Component({
            selector: 'app-new-product',
            templateUrl: './new-product.page.html',
            styleUrls: ['./new-product.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Keyboard,
            LoadingController,
            ToastController,
            ProductService,
            BrandService,
            Router,
            ActionSheetController])
    ], NewProductPage);
    return NewProductPage;
}());
export { NewProductPage };
//# sourceMappingURL=new-product.page.js.map