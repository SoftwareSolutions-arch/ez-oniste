import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-check-in',
  templateUrl: './self-check-in.page.html',
  styleUrls: ['./self-check-in.page.scss'],
})
export class SelfCheckInPage implements OnInit {

  foundpopup:boolean=false;

  constructor() { }

  ngOnInit() {
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

  black_poup() {  
        // alert("hello")

    this.foundpopup=true;
    // alert("hello")
  }

}
