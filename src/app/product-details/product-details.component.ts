import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../service/product';
import productsData from '../data.json';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  _id: number;
  //product: Product;
  name: string;
  price: number;
  description: string;
  url: string;
  productIdRoute?: number;
  //product: Product;
  //products: Product[] = productsData;
  @Input () model: any;
  //product: void;
  constructor(private route: ActivatedRoute,
              private crudService: CrudService
              )
  {
    this._id = this.model.id;
    this.name = this.model.name;
    this.price = this.model.price;
    this.description = this.model.description;
    this.url = this.model.url;

    const routeParams = this.route.snapshot.paramMap;
    this.productIdRoute = Number(routeParams.get('productId'))
    //this.product = this.crudService.goToDetailsProduct(this.productIdRoute);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(() => {this._id = this.route.snapshot.params["id"];});
  }
}
