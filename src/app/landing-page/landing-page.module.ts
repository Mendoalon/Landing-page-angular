import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutLandingPageComponent } from './layout/layout-landing-page/layout-landing-page.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LayoutLandingPageComponent

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
