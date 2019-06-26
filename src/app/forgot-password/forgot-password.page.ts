import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from 'src/services/domain/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(  
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public keyboard: Keyboard,
    private authService : AuthService,
    private router: Router) { }
  public userLogin: User = {};
  private loading: any;
  ngOnInit() {
  }
  async login() {
    await this.presentLoading();

    try {
      await this.authService.forgot_password(this.userLogin)
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['reset-password'])
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
