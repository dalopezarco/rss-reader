import { Article } from './../../models/article.models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html'
})
export class ArticleDetailPage {
  article: Article;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = navParams.get('article');
  }

  ionViewWillEnter() {}
}
