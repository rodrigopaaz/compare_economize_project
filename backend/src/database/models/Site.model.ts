import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Product from './Product.model';

export default class Site extends Model {
  declare id: number;
  declare name:string;
}
Site.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'sites',
    timestamps: false,
  },

);

Site.hasMany(Product, {
    foreignKey: 'siteId', as: 'sites'
  });
