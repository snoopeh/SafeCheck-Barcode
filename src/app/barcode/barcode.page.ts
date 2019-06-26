import { ProductService } from 'src/services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductDTO } from 'src/models/product.dto';
import { API_CONFIG } from 'src/config/api.config';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  public searched: boolean;
  imageUrl: string = API_CONFIG.baseUrl;
  products: ProductDTO;
  search: any;
  barcodeData: any;
  mocked: any = 123123;

  constructor(
    private androidPermissions: AndroidPermissions,
    private barcodeScanner: BarcodeScanner,
    private productService: ProductService,
    public navCtr :NavController
  ) { }

  ngOnInit() {
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }

  //MOCKING METHOD
async mockCode(){    
      await this.productService.findByBarcode(this.mocked)
          .subscribe(response => {
            this.products = response;
            return true;
          },
            error => {
              this.products = null;
            });
         this.searched =true;
}

 //ACTUAL SCAN METHOD
  scanCode(){
    this.searched = false;
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcodeData = barcodeData;
      this.requestProduct();
     }).catch(err => {
         console.log('Error', err);
     });
  }
  async requestProduct(){
    await this.productService.findByBarcode(this.barcodeData)
          .subscribe(response => {
            this.products = response;
            return true;
          },
            error => {
              this.products = null;
            });
         this.searched =true;
  }

}
