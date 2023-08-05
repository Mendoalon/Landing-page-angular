import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutLandingPageComponent } from './layout/layout-landing-page/layout-landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';





@NgModule({
  declarations: [
    NavbarComponent,
    LayoutLandingPageComponent,
    FooterComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
