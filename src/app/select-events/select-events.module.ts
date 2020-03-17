import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEventsPageRoutingModule } from './select-events-routing.module';

import { SelectEventsPage } from './select-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEventsPageRoutingModule
  ],
  declarations: [SelectEventsPage]
})
export class SelectEventsPageModule {}
