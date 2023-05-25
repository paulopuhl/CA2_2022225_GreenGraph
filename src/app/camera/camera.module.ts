import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';

import {ExploreContainerComponentModule} from '../explore-container/explore-container.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
