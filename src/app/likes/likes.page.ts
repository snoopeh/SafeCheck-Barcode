import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
