import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routing/home.component';
import { CatComponent } from './components/routing/cat.component';
import { DogComponent } from './components/routing/dog.component';
import { CustomerComponent } from './components/routing/customer.component';
import { ProductComponent } from './components/nestedRouting/product.component';
import { ProductDetailComponent } from './components/nestedRouting/product-detail.component';
import { ProductInfoComponent } from './components/nestedRouting/product-info.component';
import { ProductSpecsComponent } from './components/nestedRouting/product-specs.component';

// ROUTING
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'cat', component: CatComponent },
//   { path: 'dog', component: DogComponent },
//   { path: 'customer/:custId', component: CustomerComponent },
//   { path: '**', redirectTo: '/', pathMatch: 'full' },
// ];

// NESTED ROUTES
const routes: Routes = [
  { path: '', component: ProductComponent },
  {
    path: 'product', component: ProductComponent,
    children: [
      {
        path: 'details', component: ProductDetailComponent,
        children: [
          { path: 'info', component: ProductInfoComponent },
          { path: 'specs', component: ProductSpecsComponent },
          { path: '**', redirectTo: 'details', pathMatch: "full" }
        ]
      },
    ]
  },
  {path: '**', redirectTo: '/', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
