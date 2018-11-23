import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-promotion",
  templateUrl: "promotion.html"
})
export class PromotionPage {
  cardInfos;
  uname;

  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.uname = this.navParams.get("uname");
    console.log("value: " + this.uname);
    console.log(typeof this.uname);

    let url = "http://localhost:8080/shop?account=" + this.uname;
    console.log("url: " + url);
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.cardInfos = data;
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PromotionPage");
  }
}
