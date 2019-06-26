import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from 'src/services/domain/product.service';
import { API_CONFIG } from 'src/config/api.config';
import { Router } from '@angular/router';
import { BrandService } from 'src/services/domain/brand.service';
var SearchPage = /** @class */ (function () {
    function SearchPage(productService, brandService, router) {
        this.productService = productService;
        this.brandService = brandService;
        this.router = router;
        this.imageUrl = API_CONFIG.baseUrl;
    }
    SearchPage.prototype.searchItens = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val.length > 5) {
            this.productService.findByName(val)
                .subscribe(function (response) {
                _this.products = response;
            }, function (error) {
                _this.products = null;
            });
            this.brandService.findByName(val)
                .subscribe(function (response) {
                _this.brands = response;
            }, function (error) {
                _this.brands = null;
            });
        }
    };
    SearchPage.prototype.ngOnInit = function () {
    };
    SearchPage = tslib_1.__decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.page.html',
            styleUrls: ['./search.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProductService,
            BrandService,
            Router])
    ], SearchPage);
    return SearchPage;
}());
export { SearchPage };
//# sourceMappingURL=search.page.js.map