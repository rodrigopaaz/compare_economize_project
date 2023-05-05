import { Request, Response } from 'express';
import ProductService from '../services/Product.Service';

export default class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getAll = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.getAll();
      return res.json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching products' });
    }
  };

  createMany = async (req: Request, res: Response) => {
    try {
      const { siteName, category, searchQuery } = req.body;
      const result = await this.productService.createMany(siteName, category, searchQuery);
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating products' });
    }
  };
}
