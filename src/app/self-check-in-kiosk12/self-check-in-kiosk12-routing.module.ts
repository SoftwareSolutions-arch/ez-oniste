import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKiosk12Page } from './self-check-in-kiosk12.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKiosk12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKiosk12PageRoutingModule {}
