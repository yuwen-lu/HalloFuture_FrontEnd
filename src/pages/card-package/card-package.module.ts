import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardPackagePage } from './card-package';

@NgModule({
  declarations: [
    CardPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(CardPackagePage),
  ],
})
export class CardPackagePageModule {}
