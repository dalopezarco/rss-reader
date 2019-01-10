import { Article } from './../../models/article.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.html'
})
export class ArticleComponent {
  @Input() article: Article;

  constructor() {
    console.log(this.article);
  }
}
