import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageSettingPageRoutingModule } from './message-setting-routing.module';

import { MessageSettingPage } from './message-setting.page';
import { HeaderPageModule } from '../header/header.module';

import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageSettingPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
    ],
  declarations: [MessageSettingPage]
})
export class MessageSettingPageModule {}
