import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKiosk9Page } from './self-check-in-kiosk9.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKiosk9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKiosk9PageRoutingModule {}
