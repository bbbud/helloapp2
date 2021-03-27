import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamnengPage } from './namneng.page';

const routes: Routes = [
  {
    path: '',
    component: NamnengPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamnengPageRoutingModule {}
