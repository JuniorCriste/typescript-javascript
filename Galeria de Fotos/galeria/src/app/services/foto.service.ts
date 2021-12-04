import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class FotoService {


  public fotos: Foto[] = [];


  constructor() { }
  
   addNewGallery = async () => {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      //allowEditing: true,
      quality: 100
    });
    this.fotos.unshift({
      webviewPath: capturedPhoto.webPath
    })
  }

  public deleteFoto(index: number) {
    this.fotos.slice(index, 1);
  }
}

export interface Foto {
  webviewPath: string;
  base64?: String;
}