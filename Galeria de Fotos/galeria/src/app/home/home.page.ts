import { FotoService } from './../services/foto.service';
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { ActionSheet } from '@capacitor/action-sheet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotoservice : FotoService, public actionSheetController : ActionSheetController) {}

  async presentActionSheet(i: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'O que deseja fazer?',
      buttons: [{
        text: 'Deletar',
        icon: 'trash',
        handler: () => {
          this.fotoservice.deleteFoto(i)
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      
      }]
     });
     await actionSheet.present();
  }



}
