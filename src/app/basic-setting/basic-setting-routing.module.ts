import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicSettingPage } from './basic-setting.page';

const routes: Routes = [
  {
    path: '',
    component: BasicSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicSettingPageRoutingModule {}
