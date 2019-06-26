import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import {HttpClient} from 'angular/common/http';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { StorageService } from './storage.service';
var AuthService = /** @class */ (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    AuthService.prototype.forgot_password = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_CONFIG.baseUrl + "/auth/forgot_password", user)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.reset_password = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_CONFIG.baseUrl + "/auth/reset_password", user)
                .subscribe(function (res) {
                _this.successfulLogin(user.email);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_CONFIG.baseUrl + "/auth/authenticate", user)
                .subscribe(function (result) {
                _this.successfulLogin(user.email);
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_CONFIG.baseUrl + "/auth/register", user)
                .subscribe(function (res) {
                _this.successfulLogin(user.email);
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.successfulLogin = function (authorizationValue) {
        var emailValue = authorizationValue;
        var user = {
            email: emailValue
        };
        this.storage.setLocalUser(user);
    };
    AuthService.prototype.logout = function () {
        this.storage.setLocalUser(null);
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient, StorageService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map