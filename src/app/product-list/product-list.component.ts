import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../service/crud.service';
import { Product } from '../service/product';
//import *as productsData from './data.json';


interface productInterface{
  id:number;
  name:string;
  price:number;
  description:string;
  image:string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _jsonURL = 'assets/data.json';
  //products: Product[] = productsData;
  crudeService: any;
  httpClient: any;
  //products: Product[];
  constructor(crudeService: CrudService) 
  { 
    this.crudeService.getAll().subscribe((data: Product[]) => {
      //this.products = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get(this._jsonURL);
  }
  
  ngOnInit(): void {
    this.crudeService.getAll().subscribe((data: string | any[]) => {
      for(let i=0; i<data.length; i++)
      {
        const product = data[i]
        product['votes'] = 1;
      }
    });
  }
}
