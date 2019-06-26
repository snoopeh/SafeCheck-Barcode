import { Component, OnInit } from '@angular/core';
import { NavController, ModalController,NavParams } from '@ionic/angular';
import { ProductService } from 'src/services/domain/product.service';



 

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.page.html',
  styleUrls: ['./upload-modal.page.scss'],
})
export class UploadModalPage implements OnInit {
  imageData: any;
  desc: string;
 
  constructor(public navCtrl: NavController, private navParams: NavParams, private viewCtrl: ModalController, private imagesProvider: ProductService) {
    this.imageData = this.navParams.get('data');
  }
   ngOnInit() {
  }
  // saveImage() {
  //   this.imagesProvider.newProduct(this.imageData, this.desc).then(res => {
  //     this.viewCtrl.dismiss({reload: true});
  //   }, err => {
  //     this.dismiss();
  //   });
  // }
 
  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}