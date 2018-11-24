import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { AlertController } from "ionic-angular";
import { NavController } from "ionic-angular";
import { AboutPage } from "../about/about";
import { CardPackagePage } from "../card-package/card-package";
import { LoginPage } from "../login/login";
import { SignUpPage } from "../sign-up/sign-up";
import { HttpClient } from "@angular/common/http";
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  account: any;

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {}

  toLogin() {
    this.navCtrl.push(LoginPage);
  }

  toSignUp() {
    this.navCtrl.push(SignUpPage);
  }

  toAbout() {
    this.navCtrl.push(AboutPage);
  }

  faceLogin() {
    this.http.get("http://localhost:8080/faceLogin").subscribe(data => {
      let result = data.returnCode;
      this.account = data.account;
      console.log("face login result: " + JSON.stringify(data));
      if (result == 0) {
        const alert = this.alertCtrl.create({
          title: "Welcome Back",
          subTitle:
            "User No. " + this.account + "<br />" + "Let's go rock the world.",
          buttons: ["OK"]
        });
        alert.present();
        this.navCtrl.push(TabsPage, {
          uname: this.account
        });
      } else {
        const alert = this.alertCtrl.create({
          title: "ERROR",
          subTitle: "Sorry... You are not authorized:(",
          buttons: ["WELL"]
        });
        alert.present();
      }
    });
  }

  showSuccessAlert() {
    const alert = this.alertCtrl.create({
      title: "You're verified!",
      subTitle: "It's good to see your face again :D",
      buttons: ["CHEERS!"]
    });
    alert.present();
  }

  showFalseAlert() {
    const alert = this.alertCtrl.create({
      title: "Verification failed...",
      subTitle: "It's good to see your face though :)",
      buttons: ["OH NO!"]
    });
    alert.present();
  }
}
