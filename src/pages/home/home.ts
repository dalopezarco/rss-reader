import { aNew } from './../../models/aNew.models';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { NewsProvider } from '../../providers/news/news';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news: Observable<aNew[]>;
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {}

  ionViewDidEnter() {
    this.news = this.newsProvider.getNews();
    this.news.subscribe(console.log);
  }
}
