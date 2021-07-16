import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavItemPage } from './nav-item.page';

const routes: Routes = [
  {
    path: '',
    component: NavItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavItemPageRoutingModule {}
