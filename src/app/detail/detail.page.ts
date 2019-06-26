import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/domain/product.service';
import { BrandService } from 'src/services/domain/brand.service';
import { ProductDTO } from 'src/models/product.dto';
import { BrandDTO } from 'src/models/brand.dto';
import { API_CONFIG } from 'src/config/api.config';
import { Router } from '@angular/router';
import { Comments } from '../interfaces/comments';
import { StorageService } from 'src/services/domain/storage.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Like } from '../interfaces/like';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  product: ProductDTO;
  brand: BrandDTO;
  public comment: Comments = {};
  public like: Like = {};
  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    public brandService: BrandService,
    private storage: StorageService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {

  }

  imageUrl: string = API_CONFIG.baseUrl;
  type: any;
  id: any;
  usr : any;
  private Succes: Boolean;
  private loading: any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.product = null;
    this.brand = null;
    this.usr = this.storage.getLocalUser();
    this.fillItens();

  }

  async addCommentsProduct() {
    
    this.comment.email = this.usr.email;
    this.comment.productId = this.id;
    this.Succes = true;
    await this.presentLoading();

    try {
      if(this.comment.description)
      {
        await this.productService.newComment(this.comment)
      }
      else{
        this.Succes= false;
        this.presentToast("Comentário inválido");
      }
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        this.fillItens();
        this.presentToast("Comentário adicionado");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async deleteCommentsProduct(id) {
    this.comment.email = this.usr.email;
    this.comment.productId = this.id;
    this.comment._id = id;
    this.Succes = true;
    await this.presentLoading();

    try {      
        await this.productService.deleteComment(this.comment)
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        this.fillItens();
        this.presentToast("Comentário Excluído");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async addCommentsBrand() {
    
    this.comment.email = this.usr.email;
    this.comment.brandId = this.id;
    this.Succes = true;
    await this.presentLoading();

    try {
      if(this.comment.description)
      {
        await this.brandService.newComment(this.comment)
      }
      else{
        this.Succes= false;
        this.presentToast("Comentário inválido");
      }
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        this.fillItens();
        this.presentToast("Comentário adicionado");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async deleteCommentsBrand(id) {
    this.comment.email = this.usr.email;
    this.comment.brandId = this.id;
    this.comment._id = id;
    this.Succes = true;
    await this.presentLoading();

    try {      
        await this.brandService.deleteComment(this.comment)
    } catch (error) {
      if (error.status != 201)
        this.Succes = false;
      this.presentToast(error.error.error);
    } finally {
      if (this.Succes) {
        this.fillItens();
        this.presentToast("Comentário Excluído");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async likeBrand() {
    this.like.email = this.usr.email;
    this.like.brandId = this.id;
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
        this.fillItens();
        this.presentToast("Você curtiu isso");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async likeProduct() {
    this.like.email = this.usr.email;
    this.like.brandId = this.id;
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
        this.fillItens();
        this.presentToast("Você curtiu isso");
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async dislikeBrand() {
    this.like.email = this.usr.email;
    this.like.brandId = this.id;
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
        this.fillItens();
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  async dislikeProduct() {
    this.like.email = this.usr.email;
    this.like.brandId = this.id;
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
        this.fillItens();
        this.comment.description = null;
      }
      this.loading.dismiss();
    }
  }

  fillItens() {
    if (this.type == 2) {
      this.brandService.findById(this.id)
        .subscribe(response => {
          this.brand = response;
        },
          error => {
          });
    }

    if (this.type == 1) {
      this.productService.findById(this.id)
        .subscribe(response => {
          this.product = response;
        },
          error => {
          });
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
