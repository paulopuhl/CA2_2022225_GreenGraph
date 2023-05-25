import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { GalleryPage } from './gallery/gallery.page';
import { CameraPage } from './camera/camera.page';
import { FavoritesPage } from './favorites/favorites.page';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'gallery', component: GalleryPage },
  { path: 'camera', component: CameraPage },
  { path: 'favorites', component: FavoritesPage },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
