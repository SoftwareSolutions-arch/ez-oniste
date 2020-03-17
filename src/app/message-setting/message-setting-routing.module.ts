import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageSettingPage } from './message-setting.page';

const routes: Routes = [
  {
    path: '',
    component: MessageSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageSettingPageRoutingModule {}
