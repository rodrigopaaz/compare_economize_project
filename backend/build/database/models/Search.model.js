"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Product_model_1 = require("./Product.model");
class Search extends sequelize_1.Model {
}
exports.default = Search;
Search.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'search',
    timestamps: false,
});
Search.hasMany(Product_model_1.default, {
    foreignKey: 'searchId', as: 'search'
});
//# sourceMappingURL=Search.model.js.map