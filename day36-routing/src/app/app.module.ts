import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/routing/home.component';
import { CatComponent } from './components/routing/cat.component';
import { DogComponent } from './components/routing/dog.component';
import { CustomerComponent } from './components/routing/customer.component';
import { ProductComponent } from './components/nestedRouting/product.component';
import { ProductDetailComponent } from './components/nestedRouting/product-detail.component';
import { ProductInfoComponent } from './components/nestedRouting/product-info.component';
import { ProductSpecsComponent } from './components/nestedRouting/product-specs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatComponent,
    DogComponent,
    CustomerComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductInfoComponent,
    ProductSpecsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
