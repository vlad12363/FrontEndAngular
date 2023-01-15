import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import { User } from 'src/app/shared/models/User';

import {UsersService} from "../../shared/services/user.service";
import {CartItemsService} from "../../shared/services/cart-item.service";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product : Product
  public user : User
  public isProductInCart : boolean

  constructor(
    private route : ActivatedRoute,
    private productsService : ProductService,
    private usersService : UsersService,
    private cartItemsService : CartItemsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe((product : Product) => {
      this.product = product
      this.product.imageUrl = "../../../assets/static/images/product-placeholder.png";
    }, (error: ErrorEvent) => {
      console.log(this.product);
    })

    this.usersService.getUserByToken().subscribe((user : User) => {
      this.user = user
      console.log(this.user.id);

      this.getCartItem()
    }, (error : ErrorEvent) => {
      console.log(error)
    })
  }

  addToCart () {
    this.cartItemsService.addToUserCart(this.user.id.toString(), this.product.id.toString()).subscribe(res => {
      this.getCartItem()
    })
  }

  getCartItem () {
    this.cartItemsService.getCartItem(this.user.id.toString(), this.product.id.toString()).subscribe(res => {
      this.isProductInCart = true
    }, (error : ErrorEvent) => {
      this.isProductInCart = false
    })
  }
}
