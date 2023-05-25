import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-camera',
  templateUrl: 'camera.page.html',
  styleUrls: ['camera.page.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class CameraPage {
  
  constructor(public photoService: PhotoService) {}
  takePhoto() {
    this.photoService.takePhoto();
  }
}
