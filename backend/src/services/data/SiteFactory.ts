import ILink from "../../interfaces/ILink";
import IProduct from "../../interfaces/IProduct";
import ISite from "../../interfaces/ISite";

const { default: axios } = require('axios');
const cheerio = require('cheerio');
const { Category } = require('../../models');

export default abstract class SiteFactory {
protected siteName:string = ''
protected mainDiv:string  = ''
protected productUrlPath: string = ''
protected category: string
protected searchQuery:string 
protected divProduct:string = ''
protected productEndpoint:string = ''
protected searchId: string
protected titlePath:string = ''
protected pricePath:string = ''
protected imagePath:string = ''
protected videoPath:string = ''

protected dataBase = new Category()
constructor (site:ISite) {
    this.searchId = site.searchId//
    this.category = site.category
    this.searchQuery = site.searchQuery

}

public async getLinkFromProduct(): Promise<ILink[]> {
  const { data } = await axios.get(`${this.productUrlPath}/${this.searchQuery}`);
  const $ = cheerio.load(data);
  const validLinks:ILink[] = [];
  
  $(this.mainDiv).each(async (_e:string, i:number) => {
      const endpoint = $(i).find(this.productEndpoint).attr('href') || '';
        
        const url:ILink = {linkUrl: this.productUrlPath + endpoint}
      validLinks.push(url);
      return url;
      
    });
    return validLinks
 };
 
 public async getProducts() {
  const validLinks:ILink[] = await this.getLinkFromProduct();
  await Promise.all(validLinks)
  const allProducts:IProduct[] = [];
  const { id } = await Category.findOne({ where: { name: this.category } });

  validLinks.map(async ({ linkUrl }) => {
    const { data } = await axios.get(`${linkUrl}`);
    const $ = cheerio.load(data);
    $(this.divProduct).each(async (_e:number, i:string) => {
      const product:IProduct = {
        title: $(i).find(this.titlePath).text(),
        price: $(i)
          .find(this.pricePath)
          .text(),
        categoryId: id,
        siteId: this.siteName,
        searchId: this.searchId,
        linkUrl,
        imageUrl: $(i).find(this.imagePath).attr('src'),
      };
      allProducts.push(product);
    });
  });

  return allProducts;
}
}