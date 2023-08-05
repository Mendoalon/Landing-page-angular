import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutLandingPageComponent } from './layout/layout-landing-page/layout-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLandingPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
