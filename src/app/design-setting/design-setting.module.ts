import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesignSettingPageRoutingModule } from './design-setting-routing.module';

import { DesignSettingPage } from './design-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignSettingPageRoutingModule
  ],
  declarations: [DesignSettingPage]
})
export class DesignSettingPageModule {}
