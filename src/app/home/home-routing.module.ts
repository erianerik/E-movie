import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Pages

import { HomePage }             from './home.page';
import { MenuMainPage }         from '../pages/menu-main/menu-main.page';
import { TopRatedPage }         from '../pages/top-rated/top-rated.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'menu-main',
    component: MenuMainPage,
  },
  {
    path: 'topRated',
    component: TopRatedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
