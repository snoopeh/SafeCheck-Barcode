import { Component } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}
  imageUrl: string = API_CONFIG.baseUrl;
}
