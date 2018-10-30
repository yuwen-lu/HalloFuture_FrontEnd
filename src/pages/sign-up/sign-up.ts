import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { CardPackagePage } from '../card-package/card-package'



/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, 
  				public alertCtrl: AlertController, public events: Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }



 	@ViewChild ('username') uname;
	@ViewChild ('password') password;


	showSuccessAlert() {
	    const alert = this.alertCtrl.create({
	      title: 'Yes!',
	      subTitle: 'You have signed up! Please login.',
	      buttons: ['Cheers!']
	    })
	    alert.present();
	}




	signUp(){
		console.log(this.uname.value, this.password.value);
		this.showSuccessAlert();
		this.navCtrl.pop();
	}

  	getBack(){
    this.navCtrl.pop();
  	}


}
