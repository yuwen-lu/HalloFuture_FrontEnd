import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
/**
 * Generated class for the FaceAuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-face-auth",
  templateUrl: "face-auth.html"
})
export class FaceAuthPage {
  uploadData: any;

  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  verify() {
    this.http.get("http://localhost:8080/face").subscribe(data => {
      console.log("post receives: " + data.returncode);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FaceAuthPage");
  }
}
