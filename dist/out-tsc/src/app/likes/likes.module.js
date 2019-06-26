import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LikesPage } from './likes.page';
var routes = [
    {
        path: ':id',
        component: LikesPage
    }
];
var LikesPageModule = /** @class */ (function () {
    function LikesPageModule() {
    }
    LikesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LikesPage]
        })
    ], LikesPageModule);
    return LikesPageModule;
}());
export { LikesPageModule };
//# sourceMappingURL=likes.module.js.map