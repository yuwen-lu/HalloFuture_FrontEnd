import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";

// import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-payment",
  templateUrl: "payment.html"
})
export class PaymentPage {
  hideButton: boolean = false;
  account: any;
  avatarUrl: string;
  latitude: string;
  longitude: string;
  constructor(
    public alertCtrl: AlertController,
    public events: Events,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PaymentPage");
  }

  getStringCode() {
    //face verification
    //get the account id
    this.account = this.navParams.get("uname");
    this.http
      .get("http://localhost:8080/face?account=" + this.account)
      .subscribe(data => {
        let result = data.returnCode;
        console.log("face verification result: " + JSON.stringify(data));
        if (result == 0) {
          //this.showSuccessAlert();
          this.hideButton = true;
        } else {
          //if verification failed
          this.showFalseAlert();
        }
      });

    //fixed location values, only for test :)
    this.latitude = "N,41,5,36";
    this.longitude = "E,117,23,11";

    this.http
      .get(
        "http://localhost:8080/selectCard?account=" +
          this.account +
          "&latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude
      )
      .subscribe(data => {
        /////////////////////////////////////////////
        let card = data.cardNum; ////////////////////////
        /////////////////////////////////////////////
        console.log("received card number: " + card);
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

  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       function(position) {
  //         var longitude = position.coords.longitude;
  //         var latitude = position.coords.latitude;
  //         console.log(longitude);
  //         console.log(latitude);
  //       },
  //       function(e) {
  //         var msg = e.code;
  //         var dd = e.message;
  //         console.log(msg);
  //         console.log(dd);
  //       }
  //     );
  //   }
  // }
}
