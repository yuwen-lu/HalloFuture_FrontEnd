import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CardPackagePage } from "../card-package/card-package";
import { PaymentPage } from "../payment/payment";
import { PromotionPage } from "../promotion/promotion";
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  uname;
  tab1Root = CardPackagePage;
  tab2Root = PaymentPage;
  tab3Root = PromotionPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uname = this.navParams;
    console.log("type tabs uname: " + typeof this.uname);
    console.log("tabs uname: " + this.uname);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TabsPage");
  }
}
