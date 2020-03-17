import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import * as $ from "jquery";

@Component({
  selector: "app-qr-code",
  templateUrl: "./qr-code.page.html",
  styleUrls: ["./qr-code.page.scss"]
})
export class QRCodePage {
  data: boolean = false;
  img_popup: boolean = false;
  image_data: any;
   $: any ;
   alreadycheckinpopup:boolean=false;
   checkinpopup:boolean=false;
   notfoundpopup:boolean=false;

  constructor(public alertCtrl: AlertController) {}

  ionViewWillEnter() {}

  async showAlert() {
    this.data = true;
    this.img_popup = true;
    const alert = await this.alertCtrl.create({
      header: "Checked-in completed",
      subHeader: "Andrew Walker",
      message: "ZZZ Technology inc.",

      buttons: ["OK"]
    });

    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


  pop(){
    jQuery('#myModal').show();
    jQuery('#myModal').hide();
  }

  pop1(){
    jQuery('#basicExampleModal').show();
    jQuery('#basicExampleModal').hide();
  }

  pop2(){
    jQuery('#basicExampleModal3').show();
    jQuery('#basicExampleModal3').hide();
    
  }

  data1(){
   
    this.checkinpopup=true;
  }

}
