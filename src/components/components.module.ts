import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [ArticleComponent],
  imports: [IonicModule],
  exports: [ArticleComponent]
})
export class ComponentsModule {}
