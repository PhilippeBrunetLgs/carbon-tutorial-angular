import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GridModule, BreadcrumbModule, TabsModule, ButtonModule } from 'carbon-components-angular';
import { HomeRoutingModule } from './home-routing.module';
import { InfoModule } from '../info/info.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GridModule,
    BreadcrumbModule,
    TabsModule,
    ButtonModule,
    InfoModule
  ]
})
export class HomeModule { }
