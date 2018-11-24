import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  Events
} from "ionic-angular";
import { CardInfoPage } from "../card-info/card-info";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  uploadData;
  card;
  type;
  pswd;
  account;

  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    this.getCards();
  }

  getCards() {
    this.uname = this.navParams.get("uname");
    console.log("value: " + this.uname);
    console.log(typeof this.uname);

    let url = "http://localhost:8080/mycards?account=" + this.uname;
    console.log("url: " + url);
    this.http.get(url).subscribe(data => {
      console.log("cardInfos: " + data);
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
        },
        {
          name: "password",
          placeholder: "Enter Password"
        },
        {
          name: "account",
          placeholder: "Enter your account number"
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
            this.uploadData = data;
            JSON.stringify(data);
            this.card = data.cardNumber; //use this to temporarily store
            // this.type = data.cardType;
            this.type = 1;
            this.pswd = data.password;
            this.account = data.account;
            if (this.isValid(this.card)) {
              console.log("Card Added..." + this.card);
              console.log(
                "cardType: " +
                  1 +
                  " pswd: " +
                  this.pswd +
                  " account: " +
                  this.account
              );
              this.showSuccessAlert();
            } else {
              this.showFailedAlert();
            }
            let url =
              "http://localhost:8080/addcard?cardNumber=" +
              this.card +
              "&cardType=" +
              this.type +
              "&password=" +
              this.pswd +
              "&account=" +
              this.account;
            console.log("url: " + url);
            this.http.get(url).subscribe(data => {
              let result = data.returnCode;
              console.log("addCard Response: " + result);
            });

            this.navCtrl.push(CardInfoPage, {
              data: this.card,
              img: "../../assets/imgs/cardImgs/debit.png"
            });

            // this.http
            //   .post("http://localhost:8080/addcard", this.uploadData)
            //   .subscribe(data => {
            //     console.log("post receives: " + data);
            //   });
          }
        }
      ]
    });
    prompt.present();

    // this.http.get(url).subscribe(data => {
    //   console.log("addCard response: " + JSON.stringify(data));
    // });
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
            if (this.isValid(number)) {
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

  isValid(cardNumber) {
    console.log("cardNumber length: " + cardNumber.length);
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      return true;
    } else return false;
  }
}
