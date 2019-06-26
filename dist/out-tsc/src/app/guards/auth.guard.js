import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/domain/storage.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var usr = _this.storage.getLocalUser();
            if (usr == null) {
                _this.router.navigate(['login']);
            }
            resolve(usr ? true : false);
        });
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map