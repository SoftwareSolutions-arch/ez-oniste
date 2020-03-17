import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkInRegistration1Page } from './walk-in-registration1.page';

const routes: Routes = [
  {
    path: '',
    component: WalkInRegistration1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkInRegistration1PageRoutingModule {}
