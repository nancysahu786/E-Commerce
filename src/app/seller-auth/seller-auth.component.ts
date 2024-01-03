import { Component, OnInit } from '@angular/core';
import { SellerAuthServiceService } from '../services/seller-auth-service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private service : SellerAuthServiceService,
    private router : Router
    ) { }

  ngOnInit() {
  }
   signUp(formData){
    console.log("form",formData);
    // calling service function
    this.service.userSignup(formData).subscribe((result)=>{
      console.log("service response");
      // navigate karane k liye 
      this.router.navigate(['/']);
    });
   }
}
