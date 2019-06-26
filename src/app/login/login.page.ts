import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
//import { AuthService } from 'src/app/services/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { API_CONFIG } from 'src/config/api.config';
import { AuthService } from 'src/services/domain/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  public fGroup : FormGroup;
  public fGroupLogin : FormGroup;
  constructor(
    //private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public keyboard: Keyboard,
    private authService : AuthService,
    private router: Router,
    private fBuilder: FormBuilder
  ) {
    this.fGroup = this.fBuilder.group({
      'name': [null, Validators.compose([
        Validators .required,
        Validators.minLength(4),
      ])],
      'email':[null, Validators.compose([
        Validators .required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
      ])],
      'password': [null, Validators.compose([
        Validators .required,
        Validators.minLength(4),
      ])],
    },{updateOn:'blur'});

    this.fGroupLogin = this.fBuilder.group({
      'email':[null, Validators.compose([
        Validators .required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
      ])],
      'password': [null, Validators.compose([
        Validators .required,
        Validators.minLength(4),
      ])],
    },{updateOn:'blur'});

   }
   
   
  imageUrl: string = API_CONFIG.baseUrl;
  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }

  async login() {
    await this.presentLoading();
    this.userLogin.password = this.fGroupLogin.value.password; 
    this.userLogin.email = this.fGroupLogin.value.email; 
    try {
      await this.authService.login(this.userLogin)
    } catch (error) {
      this.presentToast(error.error.error);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['tabs/search'])
    }
  }

  async register() {
    await this.presentLoading();
    this.userRegister.name = this.fGroup.value.name; 
    this.userRegister.email = this.fGroup.value.email; 
    this.userRegister.password = this.fGroup.value.password; 
    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      this.presentToast(error.error.error);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['tabs/search'])
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