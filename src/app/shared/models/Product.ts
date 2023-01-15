export class Product {
  id : number;
  name : string;
  description : string;
  price : number;
  addedOn : Date;
  imageUrl : string;

  constructor(id: number, name: string, description: string, price: number, addedOn: Date, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.addedOn = addedOn;
    this.imageUrl = imageUrl;
  }
}
