import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrinterOptionPageRoutingModule } from './printer-option-routing.module';

import { PrinterOptionPage } from './printer-option.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrinterOptionPageRoutingModule
  ],
  declarations: [PrinterOptionPage]
})
export class PrinterOptionPageModule {}
