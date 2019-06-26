import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.imageUrl = API_CONFIG.baseUrl;
    }
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map