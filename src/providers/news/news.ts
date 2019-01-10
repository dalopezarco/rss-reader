import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { aNew } from '../../models/aNew.models';
import { newsResponse } from '../../models/newsResponse.models';

@Injectable()
export class NewsProvider {
  constructor(public http: HttpClient) {}

  getNews() {
    return this.http
      .get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fep00.epimg.net%2Frss%2Felpais%2Fportada.xml')
      .pipe(map((res: newsResponse) => res.items));
  }
}
