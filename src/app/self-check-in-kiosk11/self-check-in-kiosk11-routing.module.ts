import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKiosk11Page } from './self-check-in-kiosk11.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKiosk11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKiosk11PageRoutingModule {}
