import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageCustomisationPageRoutingModule } from './message-customisation-routing.module';

import { MessageCustomisationPage } from './message-customisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageCustomisationPageRoutingModule
  ],
  declarations: [MessageCustomisationPage]
})
export class MessageCustomisationPageModule {}
