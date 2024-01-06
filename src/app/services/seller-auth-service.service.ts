import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class SellerAuthServiceService {
   //here we are using behaviorsubject to allow seller-home page to access after login when value comes true from auth guard
   isSellerLoggedIn = new BehaviorSubject<boolean>(false);
    // logginError  = new EventEmitter;

  constructor(private http: HttpClient,private route: Router) { }
  userSignup(data){
    console.log("service fuction called");
    // return the request
    // return this.http.post('http://localhost:3000/seller',{data})

    //  checking what is coming inside result
    // let result = this.http.post('http://localhost:3000/seller',{data},{observe:'response'})
    // console.log("result",result);

   // getting the result in the body
   this.http.post('http://localhost:3000/seller',{data},{observe:'response'}).subscribe((result)=>{
    console.log("result",result.body);
    this.isSellerLoggedIn.next(true);

    // we need to store the data of user in localstorage
    localStorage.setItem('seller',JSON.stringify(result.body));

    this.route.navigate(['seller-home']);
   });
    
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home']);
    }
   }

  userLogin(data){
    console.log("user login",data);
    // this.http.get(`http://localhost:3000/seller?data.email=${data.email}&data.password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
    //   if(result && result.body && result.body.length){
    //  console.log("user login");
    //  localStorage.setItem('seller',JSON.stringify(result.body));

    //  this.route.navigate(['seller-home']);
    //   }
    //   else{
    //     console.log("user not exist");
    //     // this.logginError.emit("true");  
    //    }
    // })

return this.http.get(`http://localhost:3000/seller?data.email=${data.email}&data.password=${data.password}`,{observe:'response'});
      
  
    
  }

  addProduct(data){
    return this.http.post('http://localhost:3000/product',data,{observe:'response'});
  }
}
