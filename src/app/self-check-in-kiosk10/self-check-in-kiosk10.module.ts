import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk10PageRoutingModule } from './self-check-in-kiosk10-routing.module';

import { SelfCheckInKiosk10Page } from './self-check-in-kiosk10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKiosk10PageRoutingModule
  ],
  declarations: [SelfCheckInKiosk10Page]
})
export class SelfCheckInKiosk10PageModule {}
