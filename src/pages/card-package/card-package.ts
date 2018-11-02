import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { CardInfoPage } from '../card-info/card-info';
/**
 * Generated class for the CardPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-package',
  templateUrl: 'card-package.html',
})
export class CardPackagePage {


  cardInfos = [

  {
    "name": "Alin",
    "number": "123456789012345",
    "type": "Debit Card",
    "imgSource": "http://img0.imgtn.bdimg.com/it/u=3079759769,323137711&fm=200&gp=0.jpg",
  },
  {
    "name": "AXiang",
    "number": "098765432109876",
    "type": "Debit Card",
    "imgSource": "http://img0.imgtn.bdimg.com/it/u=3079759769,323137711&fm=200&gp=0.jpg",
  },
  // {
  //   "name": "AWen",
  //   "type": "Credit Card",
  //   "imgSource": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540905946&di=3c26e7ad6148a920c90576c13033dfc5&src=http://www.shang360.com/upload/article/20161105/88606261631478321103.jpg",
  // },


  ]

  
  
  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPackagePage');
  }


  gotoCard(number){

    //used to goto card, should have a parameter CardId
    // this.title = JSON.stringify(this.title);
    // console.log("before push: " + this.title);
    this.navCtrl.push(CardInfoPage, {
      "data": number,
    });

  }


  addCard(){
    //add card info
    this.showAddAlert();
    //this.gotoCard();
  }

  deleteCard(){
    //delete the card
    this.showDeleteAlert();

    
  }


  showAddAlert() {
      const prompt = this.alertCtrl.create({
        title: 'Add',
        message: "Input the card number to be added:",
        inputs: [
          {
            name: 'cardNumber',
            placeholder: 'Add Card'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Card Add Canceled');
            }
          },
          {
            text: 'Add',
            handler: data => {

              JSON.stringify(data);
              let card = data.cardNumber;  //use this to temporarily store
              if (this.isValid(card)){
                  console.log('Card Added...' + card);
                  this.showSuccessAlert();
              }
              else {
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
      title: 'Delete',
      message: "Input the card number to delete",
      inputs: [
        {
          name: 'cardNumber',
          placeholder: 'Deleted Card'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Card Deletion Canceled');
          }
        },
        {
          text: 'Delete',
          handler: data => {

            JSON.stringify(data);
            let card = data.cardNumber;  //use this to temporarily store
            if (this.isValid(card)){
                console.log('Card Deleted...' + card);
                this.showSuccessAlert();
            }
            else {
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
        title: 'Success!',
        subTitle: '',
        buttons: ['OK']
      })
      alert.present();
  }

  showFailedAlert() {
      const alert = this.alertCtrl.create({
        title: 'Card Number Invalid...',
        subTitle: 'Length of the number should be 16 - 19.',
        buttons: ['OK']
      })
      alert.present();

  }

  isValid(cardNumber){
    console.log('cardNumber length: ' + cardNumber.length);
    if(cardNumber.length >= 16 && cardNumber.length <= 19)
        return true;
    else return false;
  }



}
