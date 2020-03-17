import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkRegistrationSetting3PageRoutingModule } from './walk-registration-setting3-routing.module';

import { WalkRegistrationSetting3Page } from './walk-registration-setting3.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkRegistrationSetting3PageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [WalkRegistrationSetting3Page]
})
export class WalkRegistrationSetting3PageModule {}
