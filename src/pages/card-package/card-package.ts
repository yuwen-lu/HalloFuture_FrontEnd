import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';

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

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPackagePage');
  }


  gotoCard(){
  	//used to goto card, should have a parameter CardId
  }


  addCard(){
    //add card info
    this.showAddAlert();
    this.gotoCard();
  }

  deleteCard(){
    //delete the card
    this.showDeleteAlert();

    
  }


  showAddAlert() {
      const prompt = this.alertCtrl.create({
        title: 'Add',
        message: "Input the number of the card you're keen on deleting",
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
      message: "Select the number of the card you're so keen on deleting",
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
        subTitle: 'Please try again!',
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
