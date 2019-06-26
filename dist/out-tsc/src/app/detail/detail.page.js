import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/domain/product.service';
import { BrandService } from 'src/services/domain/brand.service';
import { API_CONFIG } from 'src/config/api.config';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/domain/storage.service';
import { LoadingController, ToastController } from '@ionic/angular';
var DetailPage = /** @class */ (function () {
    function DetailPage(route, productService, brandService, storage, router, loadingCtrl, toastCtrl) {
        this.route = route;
        this.productService = productService;
        this.brandService = brandService;
        this.storage = storage;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.comment = {};
        this.imageUrl = API_CONFIG.baseUrl;
    }
    DetailPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.type = this.route.snapshot.paramMap.get('type');
        this.product = null;
        this.brand = null;
        this.fillItens();
    };
    DetailPage.prototype.addComments = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var usr, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usr = this.storage.getLocalUser();
                        this.comment.email = usr.email;
                        this.comment.productId = this.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.productService.newComment(this.comment)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.status != 201)
                            this.Succes = false;
                        this.presentToast(error_1.error.error);
                        return [3 /*break*/, 5];
                    case 4:
                        if (this.Succes) {
                            this.fillItens();
                            this.presentToast("Comentário adicionado");
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DetailPage.prototype.fillItens = function () {
        var _this = this;
        if (this.type == 2) {
            this.brandService.findById(this.id)
                .subscribe(function (response) {
                _this.brand = response;
            }, function (error) {
            });
        }
        if (this.type == 1) {
            this.productService.findById(this.id)
                .subscribe(function (response) {
                _this.product = response;
            }, function (error) {
            });
        }
    };
    DetailPage.prototype.presentLoading = function () {
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
    DetailPage.prototype.presentToast = function (message) {
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
    DetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-detail',
            templateUrl: './detail.page.html',
            styleUrls: ['./detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ProductService,
            BrandService,
            StorageService,
            Router,
            LoadingController,
            ToastController])
    ], DetailPage);
    return DetailPage;
}());
export { DetailPage };
//# sourceMappingURL=detail.page.js.map