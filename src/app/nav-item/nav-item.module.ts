import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavItemPageRoutingModule } from './nav-item-routing.module';

import { NavItemPage } from './nav-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavItemPageRoutingModule
  ],
  declarations: [NavItemPage]
})
export class NavItemPageModule {}
