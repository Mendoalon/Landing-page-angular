import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutLandingPageComponent } from './layout/layout-landing-page/layout-landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}



@NgModule({
  declarations: [
    NavbarComponent,
    LayoutLandingPageComponent,
    FooterComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class LandingPageModule { }
