import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { TestCardComponent } from './components/test-card/test-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeScreenComponent,
    TestCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
