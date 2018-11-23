import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the CardInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-card-info",
  templateUrl: "card-info.html"
})
export class CardInfoPage {
  cardNum: string;
  cardImg: string;
  accountBalance;
  unbalance; //unusable balance

  constructor(
    private http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.cardNum = this.navParams.get("data");
    this.cardImg = this.navParams.get("img");
    console.log("title: " + this.cardNum);
    console.log("ImgPath: " + this.cardImg);

    let url = "http://localhost:8080/balance?card=" + this.cardNum;
    console.log("url: " + url);
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.accountBalance = data.balance;
      this.unbalance = data.unusableBalance;
      console.log("accountBalance: " + this.accountBalance);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CardInfoPage");
  }
}
