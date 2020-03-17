import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckInPage } from './self-check-in.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckInPageRoutingModule {}
