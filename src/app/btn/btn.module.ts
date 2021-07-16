import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BtnPageRoutingModule } from './btn-routing.module';

import { BtnPage } from './btn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtnPageRoutingModule
  ],
  declarations: [BtnPage]
})
export class BtnPageModule {}
