export class User {
  id : number;
  username : string;
  password : string;
  email : string;
  name : string;
  address : string;
  phone : string;
  cartItems : [any];

  constructor(id: number, username: string, password: string, email: string, name: string, address: string, phone: string, cartItems: [any]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.cartItems = cartItems;
  }
}
