import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  data : boolean = false;
  img_popup : boolean = false;
  constructor(public alertCtrl: AlertController) { }
  image_data : any;

  ngOnInit() {
  }
  async showAlert() { 
    
    this.data= true;
    this.img_popup= true;
    const alert = await this.alertCtrl.create({  
      header: 'Checked-in completed',  
      subHeader: 'Andrew Walker',  
      message: 'ZZZ Technology inc.',  
  
      buttons: ['OK'] ,
    });  

    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

}
