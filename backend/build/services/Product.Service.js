"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_model_1 = require("../database/models/Category.model");
const Product_model_1 = require("../database/models/Product.model");
const Search_model_1 = require("../database/models/Search.model");
const Site_model_1 = require("../database/models/Site.model");
const Buscape_1 = require("./data/Buscape");
class ProductService {
    constructor() {
        this.getAll = async () => {
            const data = Product_model_1.default.findAll({
                include: [
                    { model: Search_model_1.default, as: 'search' },
                    { model: Category_model_1.default, as: 'categoryName' },
                    { model: Site_model_1.default, as: 'siteName' },
                ],
            });
            return data;
        };
        this.createMany = async (siteName, category, searchQuery) => {
            const site = {
                searchId: siteName,
                category: category,
                searchQuery: searchQuery,
            };
            const buscape = new Buscape_1.default(site);
            const promises = await buscape.getProducts();
            const products = await Promise.all(promises);
            /*     const result = await Product.bulkCreate(products) */
            return products;
        };
    }
}
exports.default = ProductService;
//# sourceMappingURL=Product.Service.js.map