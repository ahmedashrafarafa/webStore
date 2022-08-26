import { Component } from '@angular/core';
import { Product } from './service/product';
import { Observable } from 'rxjs';
import productsData from './data.json';
import { CrudService } from './service/crud.service';
import { Router } from '@angular/router';

interface productInterface{
  id:number;
  name:string;
  price:number;
  description:string;
  url:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  products: Product[] = productsData;

  constructor(private router: Router)
  { 
    console.log(this.products);
  }
  goToDetailsProduct(productId?: number): void {
    this.router.navigate(['product-details', productId]);
    console.log(productId);
  }
}
