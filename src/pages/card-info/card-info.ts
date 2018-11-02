import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-info',
  templateUrl: 'card-info.html',
})
export class CardInfoPage {

	cardNum: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.cardNum = navParams.get('data');
  	console.log("title: " + this.cardNum);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardInfoPage');
  }

}
