import { Component, OnInit } from '@angular/core';
import { SellerAuthServiceService } from '../services/seller-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  isLoggedIn = false;
  errorMsg = '';
  constructor(private service: SellerAuthServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.reloadSeller();
  }
  signUp(formData) {
    // console.log("form",formData);
    // calling service function
    // this.service.userSignup(formData).subscribe((result)=>{
    //   console.log("service response");
    //   // navigate karane k liye 
    //   this.router.navigate(['seller-home']);
    // });

    this.service.userSignup(formData);
  }

  login(loginData){
    // console.log(loginData);
    this.service.userLogin(loginData).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }else{
        this.errorMsg = 'email or password is incorrect';
      }
    })
// this.service.logginError.subscribe((error)=>{
//   if(error == "true"){
// this.errorMsg = 'email or password is incorrect';
//   }
// })
  }

  loginAccount() {
    this.isLoggedIn = true;
  }

  signUpAccount() {
    this.isLoggedIn = false;
  }
}
