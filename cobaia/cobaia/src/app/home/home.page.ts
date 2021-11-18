import { ServicoService } from './../servico.service';
import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cars : any;

  constructor(private servicoService: ServicoService) {}

  ngOnInit() {
    
    this.servicoService.getCars().subscribe(
      (value) => this.cars = value,
      (error) => console.log(console.log(error)
      ))
  }



}
