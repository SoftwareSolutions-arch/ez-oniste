import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkRegistrationSetting3Page } from './walk-registration-setting3.page';

const routes: Routes = [
  {
    path: '',
    component: WalkRegistrationSetting3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkRegistrationSetting3PageRoutingModule {}
