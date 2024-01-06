import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerAuthServiceService } from './services/seller-auth-service.service';

@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerAuthServiceService){
  
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;

    if(localStorage.getItem('seller')){
      return true;
    }
    return this.sellerService.isSellerLoggedIn;
  }
}
