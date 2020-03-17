import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKiosk13Page } from './self-check-in-kiosk13.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKiosk13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKiosk13PageRoutingModule {}
