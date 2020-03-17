import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  data : boolean = false;
  img_popup : boolean = false;
  constructor(public alertCtrl: AlertController , private router: Router) { }
  image_data : any;

  ngOnInit() {
  }
   showAlert() { 
   this.router.navigate(['/registration']);
    
   
  }  

}
