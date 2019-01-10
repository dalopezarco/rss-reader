import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { article } from '../../models/article.models';
import { articlesResponse } from '../../models/articlesResponse.models';

@Injectable()
export class NewsProvider {
  constructor(public http: HttpClient) {}

  getNews() {
    const newsUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fep00.epimg.net%2Frss%2Felpais%2Fportada.xml';
    return this.http.get(newsUrl).pipe(map((res: articlesResponse) => res.items.sort(this.compareDates)));
  }

  compareDates(articleA: article, articleB: article) {
    let dateA = new Date(articleA.pubDate).getTime();
    let dateB = new Date(articleB.pubDate).getTime();
    return dateB - dateA;
  }
}
