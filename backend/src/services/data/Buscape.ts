import SiteFactory from './SiteFactory';
import ISite from '../../interfaces/ISite';

export default class Bucape extends SiteFactory {
  constructor(site: ISite) {
    super({
      mainDiv: '.col-lg-9 div',
      productUrlPath: site.productUrlPath,
      searchId: site.searchId,
      category: site.category,
      searchQuery: site.searchQuery,
      divProduct: site.divProduct,
      siteName: 'bucape',
      productEndpoint: site.productEndpoint,
      titlePath: site.titlePath,
      pricePath: site.pricePath,
      imagePath: site.imagePath,
      videoPath: site.videoPath,
    });
  }
}
