import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PavinaPageRoutingModule } from './pavina-routing.module';

import { PavinaPage } from './pavina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PavinaPageRoutingModule
  ],
  declarations: [PavinaPage]
})
export class PavinaPageModule {}
