import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Home-Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {



 

  products: IProduct[]=[];
  constructor(private http: HttpClient) 
  {
   
  }

  //Getting the Products from backend API
  getProducts():Observable<IProduct[]>{
    let tempVar = this.http.get<IProduct[]>('https://quickcart-backend.azurewebsites.net/api/home/getproducts')
    console.log(tempVar)
    return tempVar
  }
}
