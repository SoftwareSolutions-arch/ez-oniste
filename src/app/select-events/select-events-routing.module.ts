import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectEventsPage } from './select-events.page';

const routes: Routes = [
  {
    path: '',
    component: SelectEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectEventsPageRoutingModule {}
