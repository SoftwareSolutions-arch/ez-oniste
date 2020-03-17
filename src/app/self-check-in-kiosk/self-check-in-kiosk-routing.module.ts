import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKioskPage } from './self-check-in-kiosk.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKioskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKioskPageRoutingModule {}
