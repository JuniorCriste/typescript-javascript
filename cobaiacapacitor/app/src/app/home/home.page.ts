import { ServicesService } from './../services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public servicesservice : ServicesService) {
    this.servicesservice.setObject();
  }

}
