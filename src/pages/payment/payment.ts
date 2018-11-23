import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Geolocation } from "@ionic-native/geolocation";
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
  avatarUrl: string;
  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PaymentPage");
  }

  getStringCode() {
    let url = "https://api.github.com/users/yuwen-lu";
    this.http.get(url).subscribe(data => {
      console.log(data);
      //this.avatarUrl = data.avatar_url;
      console.log(this.avatarUrl);
      this.hideButton = true;
    });
  }

  // getLocation() {
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe(data => {
  //     let la = data.coords.latitude;
  //     let lo = data.coords.longitude;
  //     console.log("la: " + la + ", lo: " + lo);
  //   });
  // }
}
