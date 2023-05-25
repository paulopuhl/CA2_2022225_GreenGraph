import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, MenuController } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.module'; // Import the HomePageModule
import { GalleryPageModule } from './gallery/gallery.module';
import { FavoritesPageModule } from './favorites/favorites.module';
import { CameraPageModule } from './camera/camera.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomePageModule, // Add the HomePageModule to the imports array
    GalleryPageModule,
    FavoritesPageModule,
    CameraPageModule
  ],
  providers: [MenuController],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
