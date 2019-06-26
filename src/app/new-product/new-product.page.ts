import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides,ModalController, ToastController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Product } from '../interfaces/product';
import { Brand } from '../interfaces/brand';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ProductService } from 'src/services/domain/product.service';
import { Router } from '@angular/router';
import { BrandService } from 'src/services/domain/brand.service';


import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { File,FileEntry } from '@ionic-native/file/ngx';
import { componentFactoryName } from '@angular/compiler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public fGroupProduct : FormGroup;
  public fGroupBrand : FormGroup;
  constructor(
    public keyboard: Keyboard,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private productService : ProductService,
    private brandService : BrandService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer,
    private camera: Camera,
    private file: File,
    private modalCtrl: ModalController,
    private fBuilder: FormBuilder

  ) {
    this.fGroupProduct = this.fBuilder.group({
      'name': [null, Validators.compose([
        Validators .required,
        Validators.minLength(4),
      ])],
    },{updateOn:'blur'});

    this.fGroupBrand = this.fBuilder.group({
       'name': [null, Validators.compose([
        Validators .required,
        Validators.minLength(4),
      ])],
    },{updateOn:'blur'});
   }
  private loading: any;
  public product: Product = {};
  public brand: Brand = {};
  private info: String;
  private Succes : Boolean;
  public fGroup : FormGroup;
  ngOnInit() {
  }
  segmentChanged(event: any) {
    if (event.detail.value === 'product') {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }



//   async presentActionSheet(){
//    let actionSheet = await this.actionSheetCtrl.create({
//     header: 'Selecione a fonte da imagem',
//     buttons: [{
//       text: 'Galeria',
//       role: 'destructive',
//       icon: 'trash',
//       handler: () => {
//         this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
//       }
//     }, {
//       text: 'Camera',
//       icon: 'share',
//       handler: () => {
//         this.takePicture(this.camera.PictureSourceType.CAMERA);
//       }
//     }, {
//       text:'Cancelar',
//       role:'cancel'
//     }]
//   });
//   await actionSheet.present();
// }
 
// async takePicture(sourceType) {
//   // Create options for the Camera Dialog
//   var options = {
//     quality: 100,
//     destinationType: this.camera.DestinationType.FILE_URI,
//     sourceType: sourceType,
//     saveToPhotoAlbum: false,
//     correctOrientation: true
//   };

//    this.camera.getPicture(options).then(async (imagePath) => {
   
//     this.productService.uploadImage(imagePath, 'test').then(res => {
      
//     }, err => {
//       this.dismiss();
//     });
//   }
//     modal.present();
//   }, (err) => {
//     console.log('Error: ', err);
//   });
// }



  async newProduct() {
    await this.presentLoading();
   this.Succes = true;
    this.product.name =  this.fGroupProduct.value.name; 
    try {
      await this.productService.newProduct(this.product)
    } catch (error) {
      if(error.status != 201)
        this.Succes = false;
        this.presentToast(error.error.error);
    } finally {     
      if(this.Succes){
        this.router.navigate(['tabs/search'])
        this.presentToast("Produto adicionado na lista de pendentes");
      }
    }
    this.loading.dismiss();
  }
  async newBrand() {
    await this.presentLoading();
    this.brand.name =  this.fGroupBrand.value.name; 
    this.Succes = true;
    try {
      await this.brandService.newBrand(this.brand)
    
    } catch (error) {
      if(error.status != 201)
        this.Succes = false;
        this.presentToast(error.error.error);
    } finally {
      this.loading.dismiss();
      if(this.Succes){
        this.router.navigate(['tabs/search'])
        this.presentToast("Marca adicionado na lista de pendentes");
      }
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
