import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
//import {FileTransfer,FileUploadOptions} from '@ionic-native/file-transfer';
//import 'rxjs/add/operator/map';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.findAll = function () {
        return this.http.get(API_CONFIG.baseUrl + "/product");
    };
    ProductService.prototype.findByName = function (name) {
        return this.http.get(API_CONFIG.baseUrl + "/product/name/" + name);
    };
    ProductService.prototype.findById = function (id) {
        return this.http.get(API_CONFIG.baseUrl + "/product/" + id);
    };
    ProductService.prototype.newProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_CONFIG.baseUrl + "/product", product)
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                console.log("ERRO na requisiçao", error.error);
                reject(error);
            });
        });
    };
    ProductService.prototype.newComment = function (comment) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(API_CONFIG.baseUrl + "/product/comments/" + comment.productId, comment)
                .subscribe(function (result) {
                resolve(result);
            }, function (error) {
                console.log("ERRO na requisiçao", error.error);
                reject(error);
            });
        });
    };
    ProductService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=product.service.js.map