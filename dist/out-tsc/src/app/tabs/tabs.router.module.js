import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutPageModule'
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: '../search/search.module#SearchPageModule'
                    }
                ]
            },
            {
                path: 'likes',
                children: [
                    {
                        path: '',
                        loadChildren: '../likes/likes.module#LikesPageModule'
                    }
                ]
            },
            {
                path: 'detail',
                children: [
                    {
                        path: '',
                        loadChildren: '../detail/detail.module#DetailPageModule'
                    }
                ]
            },
            {
                path: 'new-product',
                children: [
                    {
                        path: '',
                        loadChildren: '../new-product/new-product.module#NewProductPageModule'
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/search',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map