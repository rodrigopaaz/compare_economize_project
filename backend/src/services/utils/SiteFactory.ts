import IProduct from "../../interfaces/IProduct";

const { default: axios } = require('axios');
const cheerio = require('cheerio');
const { Category } = require('../../models');

export default abstract class {
protected siteName:string
protected mainDiv:string 
protected productUrlPath: string
protected category: string
protected searchQuery:string 
protected productEndpoint:string
protected searchId: string

protected dataBase = new Category()

constructor (
    siteName:string,
    mainDiv:string, 
    productUrlPath:string, 
    searchId:string, 
    searchQuery:string, 
    category:string, 
    productEndpoint:string
    ) {
    this.mainDiv = mainDiv
    this.productUrlPath = productUrlPath
    this.searchId = searchId
    this.category = category
    this.searchQuery = searchQuery
    this.siteName = siteName
    this.productEndpoint = productEndpoint

}

public async getLinkFromProduct(): Promise<IProduct[]> {
  const { data } = await axios.get(`${this.productUrlPath}/${this.searchQuery}`);
  const $ = cheerio.load(data);
  const validLinks:IProduct[] = [];
  
  $(this.mainDiv).each(async (_e:string, i:number) => {
      const endpoint = $(i).find(this.productEndpoint).attr('href') || '';
        
        const url:IProduct = {linkUrl: this.productUrlPath + endpoint}
      validLinks.push(url);
      return url;
      
    });
    return validLinks
 };

}