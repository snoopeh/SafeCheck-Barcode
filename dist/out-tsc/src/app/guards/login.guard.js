import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/domain/storage.service';
var LoginGuard = /** @class */ (function () {
    function LoginGuard(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var usr = _this.storage.getLocalUser();
            console.log("login");
            if (usr != null) {
                _this.router.navigate(['tabs/search']);
            }
            resolve(usr == null ? true : false);
        });
    };
    LoginGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            Router])
    ], LoginGuard);
    return LoginGuard;
}());
export { LoginGuard };
//# sourceMappingURL=login.guard.js.map