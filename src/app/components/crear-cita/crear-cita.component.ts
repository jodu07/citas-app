import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cita } from '../../interface/cita.interface';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {


  //cita!: Cita;

  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if(this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

     

    // creamos objeto para enviarselo al padre

    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }

    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampos();

  }

  resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
