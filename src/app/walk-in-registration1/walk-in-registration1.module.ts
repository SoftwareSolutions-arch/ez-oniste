import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkInRegistration1PageRoutingModule } from './walk-in-registration1-routing.module';

import { WalkInRegistration1Page } from './walk-in-registration1.page';
import { HeaderPageModule} from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkInRegistration1PageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [WalkInRegistration1Page]
})
export class WalkInRegistration1PageModule {}
