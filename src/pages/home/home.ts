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
  articles: Observable<any>;
  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {}

  ionViewDidEnter() {
    this.articles = this.newsProvider.getNews();
    this.articles.subscribe(console.log);
  }

  goArticleDetail(article: Article) {
    console.log('test');
    this.navCtrl.push('ArticleDetailPage', { article });
  }

  getItems(ev: any) {
    this.articles = this.newsProvider.getNews();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.articles = this.articles.map((articles: Article[]) => {
        return articles.filter(article => article.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
