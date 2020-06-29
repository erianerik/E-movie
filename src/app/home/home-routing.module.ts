import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {MenuMainPage} from '../pages/menu-main/menu-main.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'menu-main',
    component: MenuMainPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
