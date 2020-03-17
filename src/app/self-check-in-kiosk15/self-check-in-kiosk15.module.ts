import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk15PageRoutingModule } from './self-check-in-kiosk15-routing.module';

import { SelfCheckInKiosk15Page } from './self-check-in-kiosk15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKiosk15PageRoutingModule
  ],
  declarations: [SelfCheckInKiosk15Page]
})
export class SelfCheckInKiosk15PageModule {}
