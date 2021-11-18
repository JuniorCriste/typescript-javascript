import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  

  constructor(private httpClient: HttpClient) { }

  public getCars() : any {
    return this.httpClient.get('https://github.com/vega/vega/blob/master/docs/data/cars.json');

  }  


}
