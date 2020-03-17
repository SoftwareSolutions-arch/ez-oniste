import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkInRegistrationPageRoutingModule } from './walk-in-registration-routing.module';

import { WalkInRegistrationPage } from './walk-in-registration.page';
import { FooterPageModule } from '../footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkInRegistrationPageRoutingModule,
    FooterPageModule
  ],
  declarations: [WalkInRegistrationPage]
})
export class WalkInRegistrationPageModule {}
