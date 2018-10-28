import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CardPackagePage } from '../card-package/card-package';
import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }


  	toLogin(){
  		this.navCtrl.push(LoginPage);
  	}
	


	  toSignUp(){
		  this.navCtrl.push(SignUpPage);
	  }


	

  

}
