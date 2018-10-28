import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardInfoPage } from './card-info';

@NgModule({
  declarations: [
    CardInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CardInfoPage),
  ],
})
export class CardInfoPageModule {}
