import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewParticipantPage } from './new-participant.page';

const routes: Routes = [
  {
    path: '',
    component: NewParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewParticipantPageRoutingModule {}
