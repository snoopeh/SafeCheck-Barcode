import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewProductPage } from './new-product.page';
var routes = [
    {
        path: '',
        component: NewProductPage
    }
];
var NewProductPageModule = /** @class */ (function () {
    function NewProductPageModule() {
    }
    NewProductPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NewProductPage]
        })
    ], NewProductPageModule);
    return NewProductPageModule;
}());
export { NewProductPageModule };
//# sourceMappingURL=new-product.module.js.map