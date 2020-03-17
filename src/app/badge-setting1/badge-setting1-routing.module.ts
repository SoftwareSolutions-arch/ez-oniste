import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgeSetting1Page } from './badge-setting1.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeSetting1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeSetting1PageRoutingModule {}
