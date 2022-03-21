import { Component } from '@angular/core';
import { Cita } from './interface/cita.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listCitas: Cita[] = [];

  agregarCita(cita: any){

    this.listCitas.push(cita);
    
    console.log( this.listCitas);
   
  }

  eliminarCitaListado(index: number){
    this.listCitas.splice(index, 1);
  }
}
