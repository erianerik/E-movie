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
  },
  {
    path: 'menu-main',
    loadChildren: () => import('./pages/menu-main/menu-main.module').then( m => m.MenuMainPageModule)
  },
  {
    path: 'topRated',
    loadChildren: () => import('./pages/top-rated/top-rated-routing.module').then( m => m.TopRatedPageRoutingModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
