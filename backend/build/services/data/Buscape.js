"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SiteFactory_1 = require("./SiteFactory");
class Buscape extends SiteFactory_1.default {
    constructor(site) {
        super({
            mainDiv: '.col-lg-9 div',
            productUrlPath: 'https://www.buscape.com.br/',
            searchId: site.searchId,
            category: site.category,
            searchQuery: site.searchQuery,
            divProduct: '.ProductPageBody_ContentBody__De_1M',
            siteName: 'buscape',
            productEndpoint: '.SearchCard_ProductCard_Inner__7JhKb',
            titlePath: '.Title_Name__qQvSr Hero_Title__bQOh_',
            pricePath: '.Text_Text__h_AF6 Text_DesktopHeadingM__C_e4f',
            imagePath: 'div:nth-child(2) img',
            videoPath: 'div Iframe_Iframe__tpIJy',
        });
    }
}
exports.default = Buscape;
//# sourceMappingURL=Buscape.js.map