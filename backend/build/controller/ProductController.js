"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_Service_1 = require("../services/Product.Service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                const products = await this.productService.getAll();
                return res.json(products);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error fetching products' });
            }
        };
        this.createMany = async (req, res) => {
            try {
                const { siteName, category, searchQuery } = req.body;
                const result = await this.productService.createMany(siteName, category, searchQuery);
                return res.json(result);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error creating products' });
            }
        };
        this.productService = new Product_Service_1.default();
    }
}
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map