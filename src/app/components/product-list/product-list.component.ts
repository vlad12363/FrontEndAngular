import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/Product';
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public term : string
  public products : Product[]

  constructor(router : Router, route : ActivatedRoute, private productsService : ProductService) {
    this.term = route.snapshot.paramMap.get('term') || ""
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products : Product[]) => {
      this.products = products

      for (let product of this.products) {
        product.imageUrl = "../../../assets/static/images/product-placeholder.png";

      }
    }, (error: ErrorEvent) => {
    })
  }
}
