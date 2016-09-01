export class Recipe {
  id: number;
  imageUrl: string;
  storeLink: string;

  constructor (
    id: number,
    imageUrl: string,
    storeLink: string) {
      this.id = id;
      this.imageUrl = imageUrl;
      this.storeLink = storeLink;

  }
}


// "params":{"zone1":210,"zone2":170,"zone3":180,"zone4":40}
// "id":43
// "imageURL":"https://store.brewart.com/media/catalog/product/a/b/abbeydubbel_icon_600_1.jpg"
// "enabled":true
// "name":"Abbey Dubbel"
// "storeId":243
// "storeLink":"https://store.brewart.com/index.php/abbey-dubbel/"
// "createdAt":"2016-03-31T00:15:44.000Z"
// "updatedAt":"2016-07-20T03:48:53.000Z"
