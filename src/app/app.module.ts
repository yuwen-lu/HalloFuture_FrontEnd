import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { QRCodeModule } from "angular2-qrcode";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { CardInfoPage } from "../pages/card-info/card-info";
import { CardPackagePage } from "../pages/card-package/card-package";
import { LoginPage } from "../pages/login/login";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { TabsPage } from "../pages/tabs/tabs";
import { PaymentPage } from "../pages/payment/payment";
import { PromotionPage } from "../pages/promotion/promotion";
import { HttpClientModule } from "@angular/common/http";
import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CardInfoPage,
    CardPackagePage,
    LoginPage,
    SignUpPage,
    TabsPage,
    PaymentPage,
    PromotionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CardInfoPage,
    CardPackagePage,
    LoginPage,
    SignUpPage,
    TabsPage,
    PaymentPage,
    PromotionPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
