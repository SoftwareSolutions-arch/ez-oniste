import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';  
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-participant',
  templateUrl: './new-participant.page.html',
  styleUrls: ['./new-participant.page.scss'],
})
export class NewParticipantPage implements OnInit {

  data : boolean = false;
  img_popup : boolean = false;
  constructor(public alertCtrl: AlertController , private router: Router) { }
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
  
      buttons: ['OK']  ,
    });  

    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
 pop() {
 this.router.navigate(['/guest-list']);
 }

}
