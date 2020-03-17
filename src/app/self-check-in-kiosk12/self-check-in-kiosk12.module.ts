import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk12PageRoutingModule } from './self-check-in-kiosk12-routing.module';

import { SelfCheckInKiosk12Page } from './self-check-in-kiosk12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKiosk12PageRoutingModule
  ],
  declarations: [SelfCheckInKiosk12Page]
})
export class SelfCheckInKiosk12PageModule {}
