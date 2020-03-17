import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dashboard1PageRoutingModule } from './dashboard1-routing.module';

import { Dashboard1Page } from './dashboard1.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dashboard1PageRoutingModule,
    FooterPageModule
  ],
  declarations: [Dashboard1Page]
})
export class Dashboard1PageModule {}
