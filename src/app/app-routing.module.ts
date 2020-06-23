import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DEFAULT, HOME} from './shared/constants/routes';

const routes: Routes = [
  {
    path: HOME,
    loadChildren: () => import('./modules/home.module').then(m => m.HomeModule)
  },
  {
    path: DEFAULT,
    redirectTo: `/${HOME}`,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
