import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from './product';
import productsData from '../data.json';

@Injectable({
  providedIn: 'root'
})


export class CrudService {
  Rest_API:string = 'http://localhost:3000/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  router: any;
  productCollection: any;


  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.Rest_API+'products')
  }
  getOne(url:string,id:string){
    return this.httpClient.get(this.Rest_API+url+'/'+id);
  }
  getProduct(url:string,id:string){
    url = '$(this.Rest_API)/products/$(id)';
    return this.httpClient.get(url,{headers:this.httpHeaders})
    .pipe(map(res => res)), catchError(this.handleError);
  }
  goToDetailsProduct(productId?: number): void {
    this.router.navigate(['product-details', productId]);
    console.log(productId);
    
  }
  /*handleError(handleError: any): Observable<any> {
    throw new Error('Method not implemented.');
  }*/
  handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else
    {
      errorMessage="Error Code: ${error.status)\nMessage:$(error.message}";
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
