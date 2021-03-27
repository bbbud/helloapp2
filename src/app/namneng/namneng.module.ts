import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamnengPageRoutingModule } from './namneng-routing.module';

import { NamnengPage } from './namneng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamnengPageRoutingModule
  ],
  declarations: [NamnengPage]
})
export class NamnengPageModule {}
