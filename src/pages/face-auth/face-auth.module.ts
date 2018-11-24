import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaceAuthPage } from './face-auth';

@NgModule({
  declarations: [
    FaceAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(FaceAuthPage),
  ],
})
export class FaceAuthPageModule {}
