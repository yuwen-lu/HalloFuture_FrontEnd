import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the CardPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-package',
  templateUrl: 'card-package.html',
})
export class CardPackagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPackagePage');
  }


  gotoCard(){
  	//used to goto card, should have a parameter CardId
  }


  addCard(){
    //add card info
    this.gotoCard();
  }

  deleteCard(){
    //delete the card
    this.showWarning();
    this.showDeleteSuccessAlert();
  }

  showWarning(){

  }

  showDeleteSuccessAlert() {
      const alert = this.alertCtrl.create({
        title: 'Delete Successful!',
        subTitle: '',
        buttons: ['OK']
      })
      alert.present();
  }


}
