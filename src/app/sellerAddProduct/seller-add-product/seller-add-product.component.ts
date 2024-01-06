import { Component, OnInit } from '@angular/core';
import { SellerAuthServiceService } from 'src/app/services/seller-auth-service.service';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:any;
  constructor(private service: SellerAuthServiceService) { }

  ngOnInit() {
  }
 
  submit(data:object){
    console.log("data",data);
    this.service.addProduct(data).subscribe((result)=>{
      console.log("result inserted",result);
      if(result){
        this.addProductMessage = "Product is successfully added";
        setTimeout(()=>(this.addProductMessage=undefined),3000)
      }
      
    })
  }
}
