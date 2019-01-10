import { StorageProvider } from './../storage/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { articlesResponse } from '../../models/articlesResponse.models';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Article } from '../../models/article.models';
import { Observable } from 'rxjs';

@Injectable()
export class NewsProvider {
  constructor(public http: HttpClient, private storageProvider: StorageProvider) {}

  getNews() {
    const newsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fep00.epimg.net%2Frss%2Felpais%2Fportada.xml';
    return this.http.get(newsUrl).pipe(
      map((res: articlesResponse) => res.items.sort(this.compareDates)),
      tap(articles => {
        this.storageProvider.setItem('articles', { articles });
      }),
      catchError(err => {
        return Observable.fromPromise(this.storageProvider.getArticles());
      })
    );
  }

  compareDates(articleA: Article, articleB: Article) {
    let dateA = new Date(articleA.pubDate).getTime();
    let dateB = new Date(articleB.pubDate).getTime();
    return dateB - dateA;
  }
}
