import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Events
} from "ionic-angular";
import { CardPackagePage } from "../card-package/card-package";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-sign-up",
  templateUrl: "sign-up.html"
})
export class SignUpPage {
  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public events: Events
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignUpPage");
  }

  @ViewChild("username") uname;
  @ViewChild("password") password;
  @ViewChild("accname") accname;

  showSuccessAlert() {
    const alert = this.alertCtrl.create({
      title: "Yes!",
      subTitle: "You have signed up! Please login.",
      buttons: ["Cheers!"]
    });
    alert.present();
  }

  signUp() {
    console.log(this.uname.value, this.accname.value, this.password.value);

    let url =
      "http://localhost:8080/reg?account=" +
      this.uname.value +
      "&accname=" +
      this.accname.value +
      "&password=" +
      this.password.value;

    this.http.get(url).subscribe(data => {
      console.log(data);
      let result = data;

      if (result == 0) {
        const alert = this.alertCtrl.create({
          title: "Register succeeded!",
          subTitle: "Mr. " + this.accname.value + ", welcome!",
          buttons: ["Cool!"]
        });
        alert.present();
        //this.navCtrl.push(TabsPage);
      } else if (result == 1) {
        const alert = this.alertCtrl.create({
          title: "ERROR",
          subTitle: "Sorry... Register failed.",
          buttons: ["WELL"]
        });
        alert.present();
      }
    });

    this.navCtrl.pop();
  }

  getBack() {
    this.navCtrl.pop();
  }
}
