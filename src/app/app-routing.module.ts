import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/products-details', pathMatch: 'full' },
  { path: 'products-details', component: ProductDetailsComponent },
  { path: 'products-list', component: ProductDetailsComponent },
  { path: 'shopping-cart', component: ProductDetailsComponent },
  { path: 'checkout-form', component: ProductDetailsComponent },
  { path: 'order-confirmation', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
