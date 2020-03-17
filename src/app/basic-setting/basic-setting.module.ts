import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicSettingPageRoutingModule } from './basic-setting-routing.module';

import { BasicSettingPage } from './basic-setting.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicSettingPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [BasicSettingPage]
})
export class BasicSettingPageModule {}
