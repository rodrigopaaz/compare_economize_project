import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Product from './Product.model';

export default class Category extends Model {
  declare id: number;
  declare name:string;
}
Category.init(
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
    modelName: 'categories',
    timestamps: false,
  },

);

  Category.hasMany(Product, {
    foreignKey: 'categoryId',
    as: 'categories',
  });
