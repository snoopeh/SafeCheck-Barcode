import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/domain/auth.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public keyboard: Keyboard,
    private authService : AuthService,
    private router: Router,
    private route: ActivatedRoute,    
  ) { }
  public userLogin: User = {};
  private loading: any;
  token:any;
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
  }
  async login() {
    await this.presentLoading();

    try {
      this.userLogin.token = this.token;
      await this.authService.reset_password(this.userLogin)
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
      this.router.navigate(['login'])
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
