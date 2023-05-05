"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Category_model_1 = require("./Category.model");
const Search_model_1 = require("./Search.model");
const Site_model_1 = require("./Site.model");
class Product extends sequelize_1.Model {
}
exports.default = Product;
Product.init({
    id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    title: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    categoryId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    siteId: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    price: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    imageUrl: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    linkUrl: {
        allowNull: true,
        type: sequelize_1.TEXT,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'products',
    timestamps: false,
});
Product.belongsTo(Site_model_1.default, { foreignKey: 'siteId', as: 'siteName' });
Product.belongsTo(Search_model_1.default, { foreignKey: 'searchId', as: 'search' });
Product.belongsTo(Category_model_1.default, {
    foreignKey: 'categoryId',
    as: 'categoryName',
});
//# sourceMappingURL=Product.model.js.map