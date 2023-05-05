"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { default: axios } = require('axios');
const cheerio = require('cheerio');
const { Category } = require('../../models');
class SiteFactory {
    constructor(site) {
        this.siteName = '';
        this.mainDiv = '';
        this.productUrlPath = '';
        this.divProduct = '';
        this.productEndpoint = '';
        this.titlePath = '';
        this.pricePath = '';
        this.imagePath = '';
        this.videoPath = '';
        this.dataBase = new Category();
        this.searchId = site.searchId; //
        this.category = site.category;
        this.searchQuery = site.searchQuery;
    }
    async getLinkFromProduct() {
        const { data } = await axios.get(`${this.productUrlPath}/${this.searchQuery}`);
        const $ = cheerio.load(data);
        const validLinks = [];
        $(this.mainDiv).each(async (_e, i) => {
            const endpoint = $(i).find(this.productEndpoint).attr('href') || '';
            const url = { linkUrl: this.productUrlPath + endpoint };
            validLinks.push(url);
            return url;
        });
        return validLinks;
    }
    ;
    async getProducts() {
        const validLinks = await this.getLinkFromProduct();
        await Promise.all(validLinks);
        const allProducts = [];
        const { id } = await Category.findOne({ where: { name: this.category } });
        validLinks.map(async ({ linkUrl }) => {
            const { data } = await axios.get(`${linkUrl}`);
            const $ = cheerio.load(data);
            $(this.divProduct).each(async (_e, i) => {
                const product = {
                    title: $(i).find(this.titlePath).text(),
                    price: $(i)
                        .find(this.pricePath)
                        .text(),
                    categoryId: id,
                    siteId: this.siteName,
                    searchId: this.searchId,
                    linkUrl,
                    imageUrl: $(i).find(this.imagePath).attr('src'),
                };
                allProducts.push(product);
            });
        });
        return allProducts;
    }
}
exports.default = SiteFactory;
//# sourceMappingURL=SiteFactory.js.map