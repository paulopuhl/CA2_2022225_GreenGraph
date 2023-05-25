import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
