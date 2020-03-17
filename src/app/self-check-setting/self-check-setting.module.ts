import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckSettingPageRoutingModule } from './self-check-setting-routing.module';

import { SelfCheckSettingPage } from './self-check-setting.page';
import { HeaderPageModule} from  '../header/header.module';
import {FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckSettingPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [SelfCheckSettingPage]
})
export class SelfCheckSettingPageModule {}
