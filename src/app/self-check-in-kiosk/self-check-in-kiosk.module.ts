import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKioskPageRoutingModule } from './self-check-in-kiosk-routing.module';

import { SelfCheckInKioskPage } from './self-check-in-kiosk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKioskPageRoutingModule
  ],
  declarations: [SelfCheckInKioskPage]
})
export class SelfCheckInKioskPageModule {}
