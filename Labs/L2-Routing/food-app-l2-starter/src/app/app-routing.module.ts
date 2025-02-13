import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {AboutComponent} from './app/about/about.component';


const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "food", loadChildren: () => import('./food/food.module').then(m => m.FoodModule)},
  { path: "about", component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
