import { INTEGER, Model, STRING, TEXT } from 'sequelize';
import db from '.';
import Category from './Category.model';
import Search from './Search.model';
import Site from './Site.model';

export default class Product extends Model {
  declare id: number;
  declare name:string;
}
Product.init(
  {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: INTEGER,
    },
    title: {
      allowNull: false,
      type: STRING,
    },
    categoryId: {
      allowNull: false,
      type: INTEGER,
    },
    siteId: {
      allowNull: false,
      type: INTEGER,
    },
    price: {
      allowNull: false,
      type: STRING,
    },
    imageUrl: {
      allowNull: false,
      type: STRING,
    },
    linkUrl: {
      allowNull: true,
      type: TEXT,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'products',
    timestamps: false,
  },)
  Product.belongsTo(Site, { foreignKey: 'siteId', as: 'siteName' });
  Product.belongsTo(Search, { foreignKey: 'searchId', as: 'search' });
  Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'categoryName',
  });