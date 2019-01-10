import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { NewsProvider } from '../../providers/news/news';
import { Article } from '../../models/article.models';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articles: Observable<Article[]>;
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {}

  ionViewDidEnter() {
    this.articles = this.newsProvider.getNews();
    this.articles.subscribe(console.log);
  }
}
