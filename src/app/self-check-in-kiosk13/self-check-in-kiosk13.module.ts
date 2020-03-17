import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk13PageRoutingModule } from './self-check-in-kiosk13-routing.module';

import { SelfCheckInKiosk13Page } from './self-check-in-kiosk13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKiosk13PageRoutingModule
  ],
  declarations: [SelfCheckInKiosk13Page]
})
export class SelfCheckInKiosk13PageModule {}
