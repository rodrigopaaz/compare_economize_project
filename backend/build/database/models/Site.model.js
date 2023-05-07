"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Site extends sequelize_1.Model {
}
exports.default = Site;
Site.init({
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
    modelName: 'sites',
    timestamps: false,
});
/* Site.hasMany(Product, {
    foreignKey: 'siteId', as: 'sites'
  }); */
//# sourceMappingURL=Site.model.js.map