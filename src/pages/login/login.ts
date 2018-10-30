import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CardPackagePage } from '../card-package/card-package';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }




	@ViewChild ('username') uname;
	@ViewChild ('password') password;

  showSuccessAlert() {
	    const alert = this.alertCtrl.create({
	      title: 'Welcome Back',
	      subTitle: 'Mr. ' + this.uname.value + ', may you have a good day.',
	      buttons: ['OK']
	    })
	    alert.present();
	}


	showFalseAlert() {
	    const alert = this.alertCtrl.create({
	      title: 'ERROR',
	      subTitle: 'Sorry... You are not authorized:(',
	      buttons: ['WELL']
	    })
	    alert.present();
	}


  login(){
  	
  	console.log(this.uname.value, this.password.value);

  	if(this.uname.value == '123' && this.password.value == '123'){
  		this.showSuccessAlert();
      this.navCtrl.push(TabsPage, {
        username: this.uname.value,
      });
  	}
  	else{
  		this.showFalseAlert();
  	}

    
  }

  getBack(){
    this.navCtrl.pop();
  }

}

