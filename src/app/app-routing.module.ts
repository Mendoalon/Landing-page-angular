import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then(m =>m.LandingPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'landing-page',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
