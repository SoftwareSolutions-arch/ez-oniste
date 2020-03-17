import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInPageRoutingModule } from './self-check-in-routing.module';

import { SelfCheckInPage } from './self-check-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInPageRoutingModule
  ],
  declarations: [SelfCheckInPage]
})
export class SelfCheckInPageModule {}
