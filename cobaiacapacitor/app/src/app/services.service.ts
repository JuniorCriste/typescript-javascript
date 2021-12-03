import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Storage } from '@capacitor/storage';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  obj : Array<any> = [{nome:"Junior", sobrenome: "Criste"}, {nome:"Pablo", sobrenome: "Victorious"}, 
  {nome:"Paloma", sobrenome: "Sivanete"}];

  constructor() { }

   takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

}

//JSON "set" exemplo
async setObject(){
  await Storage.set({
    key: 'user', 
    value: JSON.stringify(this.obj)
    });
    
}


//JSON "get" exemplo
async getObject(){
  const ret = await Storage.get({ key: 'user'});
  const user = JSON.parse(ret.value);
}


}