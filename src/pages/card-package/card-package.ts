import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Events
} from "ionic-angular";
import { CardInfoPage } from "../card-info/card-info";
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the CardPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-card-package",
  templateUrl: "card-package.html"
})
export class CardPackagePage {
  cardInfos;
  uname;

  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.uname = this.navParams.get("uname");
    console.log("value: " + this.uname);
    console.log(typeof this.uname);

    let url = "http://localhost:8080/mycards?account=" + this.uname;
    console.log("url: " + url);
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.cardInfos = data;
    });

    console.log(this.cardInfos);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CardPackagePage");
  }

  gotoCard(number, imgPath) {
    //used to goto card, should have a parameter CardId
    // this.title = JSON.stringify(this.title);
    console.log("before push: " + number);
    this.navCtrl.push(CardInfoPage, {
      data: number,
      img: imgPath
    });
  }

  addCard() {
    //add card info
    this.showAddAlert();
    //this.gotoCard();
  }

  deleteCard() {
    //delete the card
    this.showDeleteAlert();
  }

  showAddAlert() {
    const prompt = this.alertCtrl.create({
      title: "Add",
      message: "Input the card number to be added:",
      inputs: [
        {
          name: "cardNumber",
          placeholder: "Add Card Number"
        },
        {
          name: "cardType",
          placeholder: "Enter card type: Debit, Credit or Peony"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Card Add Canceled");
          }
        },
        {
          text: "Add",
          handler: data => {
            JSON.stringify(data);
            let card = data.cardNumber; //use this to temporarily store
            let type = data.cardType;
            if (this.isValid(card, type)) {
              console.log("Card Added..." + card);
              this.showSuccessAlert();
            } else {
              this.showFailedAlert();
            }
          }
        }
      ]
    });
    prompt.present();
  }

  showDeleteAlert() {
    const prompt = this.alertCtrl.create({
      title: "Delete",
      message: "Input the card number to delete",
      inputs: [
        {
          name: "cardNumber",
          placeholder: "Deleted Card"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Card Deletion Canceled");
          }
        },
        {
          text: "Delete",
          handler: data => {
            JSON.stringify(data);
            let number = data.cardNumber; //use this to temporarily store
            if (this.isValid(number, "credit")) {
              console.log("Card Deleted..." + number);
              this.showSuccessAlert();
            } else {
              this.showFailedAlert();
            }
          }
        }
      ]
    });
    prompt.present();
  }

  showSuccessAlert() {
    const alert = this.alertCtrl.create({
      title: "Success!",
      subTitle: "",
      buttons: ["OK"]
    });
    alert.present();
  }

  showFailedAlert() {
    const alert = this.alertCtrl.create({
      title: "Card Number Invalid...",
      subTitle: "Length of the number should be 16 - 19.",
      buttons: ["OK"]
    });
    alert.present();
  }

  isValid(cardNumber, cardType) {
    console.log("cardNumber length: " + cardNumber.length);
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      if (
        cardType == "debit" ||
        cardType == "Debit" ||
        cardType == "credit" ||
        cardType == "Credit" ||
        cardType == "peony" ||
        cardType == "Peony"
      )
        return true;
    } else return false;
  }
}
