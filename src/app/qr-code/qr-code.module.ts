import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRCodePageRoutingModule } from './qr-code-routing.module';

import { QRCodePage } from './qr-code.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodePageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [QRCodePage]
})
export class QRCodePageModule {}
