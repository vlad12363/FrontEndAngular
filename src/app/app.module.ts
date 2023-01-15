import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CartComponent} from "./components/cart/cart.component";
import {LoginComponent} from "./components/login/login.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {AppInterceptor} from "./shared/interceptor/app.interceptor";
import {RegisterComponent} from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    ProductDetailComponent,
    ProductListComponent,
    UserDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


