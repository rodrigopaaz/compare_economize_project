import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Product from './Product.model';

export default class Search extends Model {
  declare id: number;
  declare name:string;
}
Search.init(
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
    modelName: 'search',
    timestamps: false,
  },

);

/* Search.hasMany(Product, {
    foreignKey: 'searchId', as: 'search'
  }); */
