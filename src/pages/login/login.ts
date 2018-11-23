import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { AlertController } from "ionic-angular";
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { AboutPage } from "../about/about";
import { CardPackagePage } from "../card-package/card-package";
import { TabsPage } from "../tabs/tabs";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  @ViewChild("username") uname;
  @ViewChild("password") password;

  showSuccessAlert() {
    const alert = this.alertCtrl.create({
      title: "Welcome Back",
      subTitle: "Mr. " + this.uname.value + ", may you have a good day.",
      buttons: ["OK"]
    });
    alert.present();
  }

  showFalseAlert() {
    const alert = this.alertCtrl.create({
      title: "ERROR",
      subTitle: "Sorry... You are not authorized:(",
      buttons: ["WELL"]
    });
    alert.present();
  }

  login() {
    console.log("uname: " + this.uname.value);
    console.log("password: " + this.password.value);
    let url =
      "http://localhost:8080/login?account=" +
      this.uname.value +
      "&password=" +
      this.password.value;
    let result;

    this.http.get(url).subscribe(data => {
      console.log(data);
      result = data.returnCode;

      if (result == 0) {
        const alert = this.alertCtrl.create({
          title: "Welcome Back",
          subTitle: "Mr. " + this.uname.value + ", may you have a good day.",
          buttons: ["OK"]
        });
        alert.present();
        this.navCtrl.push(TabsPage, {
          uname: this.uname.value
        });
      } else if (result == 1 || result == 2) {
        const alert = this.alertCtrl.create({
          title: "ERROR",
          subTitle: "Sorry... You are not authorized:(",
          buttons: ["WELL"]
        });
        alert.present();
      }
    });
  }

  getBack() {
    this.navCtrl.pop();
  }
}
