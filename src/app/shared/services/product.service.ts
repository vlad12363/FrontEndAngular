import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_BASE_URL = 'api/products';

  constructor(private http : HttpClient) { }

  getProducts () : Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCT_BASE_URL);
  }

  getProduct(id: string | null) : Observable<Product> {
    return this.http.get<Product>(this.PRODUCT_BASE_URL + `/${id}`);
  }
}
