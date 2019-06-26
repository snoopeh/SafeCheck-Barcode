import { ProductService } from 'src/services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ProductDTO } from 'src/models/product.dto';
import { API_CONFIG } from 'src/config/api.config';
import { Like } from '../interfaces/like';
import { Comments } from '../interfaces/comments';
import { LoadingController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/services/domain/storage.service';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  public like: Like = {};
  private Succes: Boolean;
  public comment: Comments = {};
  public searched: boolean;
  private loading: any;
  imageUrl: string = API_CONFIG.baseUrl;
  products: ProductDTO;
  usr : any;
  id;
  search: any;
  barcodeData: any;
  mocked: any = 123123;

  constructor(
    private androidPermissions: AndroidPermissions,
    private barcodeScanner: BarcodeScanner,
    private productService: ProductService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: StorageService,
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
      this.presentToast("Leitura do Código Completa");
      this.barcodeData = barcodeData.text;
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

  async likeProduct(id) {
    this.like.email = this.usr.email;
    this.like.brandId = id;
    this.Succes = true;
    await this.presentLoading();
    try {      
        await this.productService.like(this.like)
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        //this.searchItens(this.search);
        this.presentToast("Você curtiu isso");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async dislikeProduct(id) {
    this.like.email = this.usr.email;
    this.like.brandId = id;
    this.Succes = true;
    await this.presentLoading();
    try {      
        await this.productService.dislike(this.like)
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        //this.searchItens(this.search);
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
