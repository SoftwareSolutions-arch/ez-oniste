import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk4PageRoutingModule } from './self-check-in-kiosk4-routing.module';

import { SelfCheckInKiosk4Page } from './self-check-in-kiosk4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKiosk4PageRoutingModule
  ],
  declarations: [SelfCheckInKiosk4Page]
})
export class SelfCheckInKiosk4PageModule {}
