import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'website',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule),
  },
  {
    path: 'application',
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
