import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  formulario!: FormGroup;
  total: number | undefined = undefined; 
  errorMessage: string = ''; 

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]), // Nuevo campo nombre
      cantidadPersonas: new FormControl('', [Validators.required, Validators.min(1)]),
      cantidadBoletos: new FormControl('', [Validators.required, Validators.min(1)]),
      usaCineco: new FormControl(false) 
    });
  }

  calcularTotal(): void {
    const precioBoleto = 12;
    const nombre = this.formulario.get('nombre')?.value; // Obteniendo el nombre
    const cantidadPersonas = this.formulario.get('cantidadPersonas')?.value;
    const cantidadBoletos = this.formulario.get('cantidadBoletos')?.value;
    const usaCineco = this.formulario.get('usaCineco')?.value;

    if (cantidadBoletos > 7 * cantidadPersonas) {
      this.errorMessage = `No puedes comprar más de ${7 * cantidadPersonas} boletos en total.`;
      this.total = undefined; 
      return; 
    } else {
      this.errorMessage = ''; 
    }

    let totalPagar = cantidadBoletos * precioBoleto;

    if (cantidadBoletos > 5) {
      totalPagar *= 0.85; // 15% de descuento
    } else if (cantidadBoletos >= 3 && cantidadBoletos <= 5) {
      totalPagar *= 0.90; // 10% de descuento
    }

    if (usaCineco) {
      totalPagar *= 0.90;
    }

    this.total = totalPagar;
  }
}
