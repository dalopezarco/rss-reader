import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { articlesResponse } from '../../models/articlesResponse.models';
import { ToastController } from 'ionic-angular';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Article } from '../../models/article.models';

@Injectable()
export class NewsProvider {
  constructor(public http: HttpClient, private toastCtrl: ToastController) {}

  getNews() {
    const newsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fep00.epimg.net%2Frss%2Felpais%2Fportada.xml';
    return this.http.get(newsUrl).pipe(
      map((res: articlesResponse) => res.items.sort(this.compareDates)),
      catchError(err => {
        this.presentToast();
        return ErrorObservable.create(err);
      })
    );
  }

  compareDates(articleA: Article, articleB: Article) {
    let dateA = new Date(articleA.pubDate).getTime();
    let dateB = new Date(articleB.pubDate).getTime();
    return dateB - dateA;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Sin conexión a internet',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
