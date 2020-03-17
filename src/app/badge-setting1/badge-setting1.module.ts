import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgeSetting1PageRoutingModule } from './badge-setting1-routing.module';

import { BadgeSetting1Page } from './badge-setting1.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgeSetting1PageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [BadgeSetting1Page]
})
export class BadgeSetting1PageModule {}
