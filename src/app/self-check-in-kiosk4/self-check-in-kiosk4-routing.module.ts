import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKiosk4Page } from './self-check-in-kiosk4.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKiosk4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKiosk4PageRoutingModule {}
