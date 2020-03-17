import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewParticipantPageRoutingModule } from './new-participant-routing.module';

import { NewParticipantPage } from './new-participant.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewParticipantPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [NewParticipantPage]
})
export class NewParticipantPageModule {}
