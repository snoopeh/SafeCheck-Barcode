import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var LikesPage = /** @class */ (function () {
    function LikesPage(route) {
        this.route = route;
    }
    LikesPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
    };
    LikesPage = tslib_1.__decorate([
        Component({
            selector: 'app-likes',
            templateUrl: './likes.page.html',
            styleUrls: ['./likes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], LikesPage);
    return LikesPage;
}());
export { LikesPage };
//# sourceMappingURL=likes.page.js.map