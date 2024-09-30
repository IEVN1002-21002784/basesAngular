
export interface Opciones {
  color: string;
  backgroundColor: string;
  numero: string;
  multiplicador: number;
}


import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
selector: 'app-resistencias',
templateUrl: './resistencias.component.html',
styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
formulario!: FormGroup;
resultado!: string | number;
valor: string = '';
valorn: number = 0;
valorminimo: number = 0;
valormaximo: number = 0;
multiplicador: number = 0;
tolerancia: number = 0;
valorfinal: number = 0;
color1: string = '';
color2: string = '';
color3: string = '';
color4: string = '';
bcolor1: string = '';
bcolor2: string = '';
bcolor3: string = '';
bcolor4: string = '';


colores: Opciones[] = [
  { color: 'Negro', backgroundColor: 'black', numero: '0', multiplicador: 1 },
  { color: 'Café', backgroundColor: 'brown', numero: '1', multiplicador: 10 },
  { color: 'Rojo', backgroundColor: 'red', numero: '2', multiplicador: 100 },
  { color: 'Naranja', backgroundColor: 'orange', numero: '3', multiplicador: 1000 },
  { color: 'Amarillo', backgroundColor: 'yellow', numero: '4', multiplicador: 10000 },
  { color: 'Verde', backgroundColor: 'green', numero: '5', multiplicador: 100000 },
  { color: 'Azul', backgroundColor: 'blue', numero: '6', multiplicador: 1000000 },
  { color: 'Violeta', backgroundColor: 'purple', numero: '7', multiplicador: 1000000 },
  { color: 'Gris', backgroundColor: 'gray', numero: '8', multiplicador: 1000000 },
  { color: 'Blanco', backgroundColor: 'white', numero: '9', multiplicador: 10000000 },
];

constructor() {}

ngOnInit(): void {
  
  this.formulario = new FormGroup({
    colores1: new FormControl('', Validators.required),
    colores2: new FormControl('', Validators.required),
    colores3: new FormControl('', Validators.required),
    tolerancia: new FormControl('', Validators.required)
  });
}

encontrar() {
  if (this.color1 !== '') {
    this.colores.forEach((opcion) => {
      if (opcion.color === this.color1) {
        this.bcolor1 = opcion.backgroundColor;
        this.valor = opcion.numero + this.valor.slice(1);
      }
    });
  }

  
  if (this.color2 !== '') {
    this.colores.forEach((opcion) => {
      if (opcion.color === this.color2) {
        this.bcolor2 = opcion.backgroundColor;
        this.valor = this.valor.charAt(0) + opcion.numero + this.valor.slice(2);
      }
    });
  }

  if (this.color3 !== '') {
    this.colores.forEach((opcion) => {
      if (opcion.color === this.color3) {
        this.bcolor3 = opcion.backgroundColor;
        this.multiplicador = opcion.multiplicador;
      }
    });
  }

  if (this.color4 === 'dorado') {
    this.bcolor4 = 'gold';
    this.tolerancia = 0.05;
  } else if (this.color4 === 'plata') {
    this.bcolor4 = '#C0C0C0';
    this.tolerancia = 0.10;
  }

 
  this.valorn = parseInt(this.valor);
  this.valorfinal = this.valorn * this.multiplicador;
  this.valorminimo = this.valorfinal - this.valorfinal * this.tolerancia;
  this.valormaximo = this.valorfinal + this.valorfinal * this.tolerancia;
}
}

