import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, // Add IonicModule to import Ionic components
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
