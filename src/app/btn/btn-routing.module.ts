import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BtnPage } from './btn.page';

const routes: Routes = [
  {
    path: '',
    component: BtnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BtnPageRoutingModule {}
