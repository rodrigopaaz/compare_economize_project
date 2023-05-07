"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Category extends sequelize_1.Model {
}
exports.default = Category;
Category.init({
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
    modelName: 'categories',
    timestamps: false,
});
/*  Category.hasMany(Product, {
   foreignKey: 'categoryId',
   as: 'categories',
 }); */
//# sourceMappingURL=Category.model.js.map