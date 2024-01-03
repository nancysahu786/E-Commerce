import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SellerAuthServiceService {

  constructor(private http: HttpClient) { }
  userSignup(data){
    console.log("service fuction called");
    return this.http.post('http://localhost:3000/seller',{data})
    
  }
}
