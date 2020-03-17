import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageCustomisationPage } from './message-customisation.page';

const routes: Routes = [
  {
    path: '',
    component: MessageCustomisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageCustomisationPageRoutingModule {}
