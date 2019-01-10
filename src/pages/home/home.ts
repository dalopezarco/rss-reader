import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { NewsProvider } from '../../providers/news/news';
import { article } from '../../models/article.models';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news: Observable<article[]>;
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {}

  ionViewDidEnter() {
    this.news = this.newsProvider.getNews();
    this.news.subscribe(console.log);
  }
}
