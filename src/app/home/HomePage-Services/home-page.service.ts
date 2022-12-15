import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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
    let tempVar = this.http.get<IProduct[]>('https://quickkart-webservice-vineet.azurewebsites.net/api/home/getproducts')
    console.log(tempVar)
    return tempVar
  }

  PostNewSubscriber(emailID:string):Observable<boolean>{
  
    console.log(emailID)

    let tempVar = this.http.get<boolean>('https://quickkart-webservice-vineet.azurewebsites.net/api/customer/AddNewSubscriber?emailID='+emailID)
    console.log(tempVar)
    return tempVar
  }

  
  ValidateUser(userEmailID:string, userPassword:string, type:string):Observable<number>
  {
    var user:User
    user={emailID:userEmailID, password:userPassword,usertype:type};
    console.log(user)
    let result=this.http.post<number>('https://loginfunction-team3-vineet.azurewebsites.net/api/LoginFunction',user)
    return result

  }

  public uploadImage(image: File): Observable<Response>{
    const formData = new FormData();
   
    formData.append('image', image);
    console.log(formData)
    let result=this.http.post<Response>('https://quickkart-webservice-vineet.azurewebsites.net/api/admin/upload',formData).pipe(catchError(this.errorHandler))
    console.log(result)
    return result
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message|| "server error")
  }
}

export class User{

  emailID:string='';
  password:string='';
  usertype:string='';


}
