import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInKiosk15Page } from './self-check-in-kiosk15.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInKiosk15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInKiosk15PageRoutingModule {}
