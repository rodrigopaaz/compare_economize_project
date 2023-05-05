import Category from '../database/models/Category.model';
import Product from '../database/models/Product.model';
import Search from '../database/models/Search.model';
import Site from '../database/models/Site.model';
import IProduct from '../interfaces/IProduct';
import Buscape from './data/Buscape';

export default class ProductService {
  getAll = async () => {
    const data = Product.findAll({
      include: [
        { model: Search, as: 'search' },
        { model: Category, as: 'categoryName' },
        { model: Site, as: 'siteName' },
      ],
    });
    return data
  };

  createMany = async (siteName:string, category:string, searchQuery:string) => {
 const site = {
  searchId: siteName,
  category: category,
  searchQuery: searchQuery,
};
    const buscape = new Buscape(site);
    const promises:IProduct[] = await buscape.getProducts();
    const products = await Promise.all(promises);
/*     const result = await Product.bulkCreate(products) */
    return products;
  };
}
