import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menuType :string = 'default';
  sellerStore: string;
  sellerName: any;
  sellerData: any;
  constructor(private router: Router) { }

  ngOnInit() {
    // checking about that what url we are navigating

    this.router.events.subscribe((val:any)=>{
      console.log("url",val.url);
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log("in seller area");
          this.menuType = 'seller';

          this.sellerStore = localStorage.getItem('seller');
          console.log(this.sellerStore);
          
          this.sellerData = this.sellerStore && JSON.parse(this.sellerStore)[0];
          console.log(this.sellerData.data.name);
          
          this.sellerName = this.sellerData.data.name;
        }else{
          console.log("outside of seller");
          this.menuType = 'default';
        }
      }
      
    });
  }

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

}
