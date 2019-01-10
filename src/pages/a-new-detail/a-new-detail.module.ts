import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ANewDetailPage } from './a-new-detail';

@NgModule({
  declarations: [
    ANewDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ANewDetailPage),
  ],
})
export class ANewDetailPageModule {}
