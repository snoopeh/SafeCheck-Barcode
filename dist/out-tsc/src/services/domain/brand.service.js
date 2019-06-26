import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import {HttpClient} from 'angular/common/http';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
var BrandService = /** @class */ (function () {
    function BrandService(http) {
        this.http = http;
    }
    BrandService.prototype.findAll = function () {
        return this.http.get(API_CONFIG.baseUrl + "/brand");
    };
    BrandService.prototype.findByName = function (name) {
        return this.http.get(API_CONFIG.baseUrl + "/brand/name/" + name);
    };
    BrandService.prototype.findById = function (id) {
        return this.http.get(API_CONFIG.baseUrl + "/brand/" + id);
    };
    BrandService.prototype.newBrand = function (brand) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_CONFIG.baseUrl + "/brand", brand)
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    BrandService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BrandService);
    return BrandService;
}());
export { BrandService };
//# sourceMappingURL=brand.service.js.map