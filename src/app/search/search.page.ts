import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/domain/product.service';
import { ProductDTO } from 'src/models/product.dto';
import { API_CONFIG } from 'src/config/api.config';
import { Router } from '@angular/router';
import { BrandService } from 'src/services/domain/brand.service';
import { BrandDTO } from 'src/models/brand.dto';
import { Like } from '../interfaces/like';
import { Comments } from '../interfaces/comments';
import { LoadingController, ToastController } from '@ionic/angular';
import { StorageService } from 'src/services/domain/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public like: Like = {};
  private searched: Boolean;
  constructor(
    public productService: ProductService,
    public brandService: BrandService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: StorageService,

  ) { }

  imageUrl: string = API_CONFIG.baseUrl;
  id;
  products: ProductDTO[];
  emptyProducts: ProductDTO[];
  usr : any;
  brands: BrandDTO[];
  emptyBrands: BrandDTO[];
  search: any;
  public comment: Comments = {};
  private Succes: Boolean;
  private loading: any;
  async searchItens(ev) {
    
    this.search = ev;
    var val = ev.target.value;
    if (val.length > 4) {
     await this.productService.findByName(val)
        .subscribe(response => {
          this.products = response;
          return true;
        },
          error => {
            this.products = null;
          });
     await this.brandService.findByName(val)
        .subscribe(response => {
          this.brands = response;
        },
          error => {
            this.brands = null;
          });
       this.searched =true;
    }

  }
  async likeBrand(id) {
    this.like.email = this.usr.email;
    this.like.brandId = id;
    this.Succes = true;
    await this.presentLoading();

    try {      
        await this.brandService.like(this.like)
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        this.searchItens(this.search);
        this.presentToast("Você curtiu isso");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
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
        this.searchItens(this.search);
        this.presentToast("Você curtiu isso");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async dislikeBrand(id) {
    this.like.email = this.usr.email;
    this.like.brandId = id;
    this.Succes = true;
    await this.presentLoading();

    try {      
        await this.brandService.dislike(this.like)
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        this.searchItens(this.search);
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
        this.searchItens(this.search);
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

  async segmentChanged(event){ 
    this.products = this.emptyProducts;
    this.brands = this.emptyBrands;
    var val = event.target.value;
    if(val == 'Products'){
      await this.productService.findAll()
        .subscribe(response => {
          this.products = response;
          return true;
        },
          error => {
            this.products = null;
          });
    }
    if(val == 'Brands'){
      await this.brandService.findAll()
      .subscribe(response => {
        this.brands = response;
      },
        error => {
          this.brands = null;
        });
     this.searched =true;
    }
  }

  ngOnInit() {
    this.usr = this.storage.getLocalUser();
  }

}
