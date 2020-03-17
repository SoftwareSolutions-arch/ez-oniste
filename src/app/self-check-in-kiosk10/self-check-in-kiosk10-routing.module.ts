import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKiosk10Page } from './self-check-in-kiosk10.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKiosk10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKiosk10PageRoutingModule {}
