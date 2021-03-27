import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'prayut',
    loadChildren: () => import('./prayut/prayut.module').then( m => m.PrayutPageModule)
  },
  {
    path: 'pravit',
    loadChildren: () => import('./pravit/pravit.module').then( m => m.PravitPageModule)
  },
  {
    path: 'pavina',
    loadChildren: () => import('./pavina/pavina.module').then( m => m.PavinaPageModule)
  },
  {
    path: 'namneng',
    loadChildren: () => import('./namneng/namneng.module').then( m => m.NamnengPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
