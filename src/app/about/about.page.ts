import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/domain/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


  constructor(
    private authService : AuthService,
    public navCtr :NavController
  ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.navCtr.navigateRoot('/login');
  }
}
