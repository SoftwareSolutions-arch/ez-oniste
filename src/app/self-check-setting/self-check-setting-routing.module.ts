import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfCheckSettingPage } from './self-check-setting.page';

const routes: Routes = [
  {
    path: '',
    component: SelfCheckSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfCheckSettingPageRoutingModule {}
