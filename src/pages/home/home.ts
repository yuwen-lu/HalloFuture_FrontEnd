import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CardPackagePage } from '../card-package/card-package';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

import { TouchID } from '@ionic-native/touch-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  constructor(private touchId: TouchID, public navCtrl: NavController, public alertCtrl: AlertController) {

  }


  	toLogin(){
  		this.navCtrl.push(LoginPage);
  	}
	


	  toSignUp(){


		  this.navCtrl.push(SignUpPage);

	  }


    fingerPrintAuth(){

      this.touchId.isAvailable()
        .then(
          res => console.log('TouchID is available!'),
          err => console.error('TouchID is not available', err)
        );

      this.touchId.verifyFingerprint('Scan your fingerprint please')
        .then(
          res => console.log('Ok', res),
          err => console.error('Error', err)
        );

    }
	

  

}
