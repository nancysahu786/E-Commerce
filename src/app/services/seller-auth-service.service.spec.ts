import { TestBed, inject } from '@angular/core/testing';

import { SellerAuthServiceService } from './seller-auth-service.service';

describe('SellerAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerAuthServiceService]
    });
  });

  it('should be created', inject([SellerAuthServiceService], (service: SellerAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
