import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


    imageWith:number=60;
    imageMargin:number=2;
    muestraImg:boolean=true;
    listFilter:string=''

    muestImg():void{
      this.muestraImg=!this.muestraImg;
    }

  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 350000,
      "Year":"febrero 4 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg" 
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio": 510000,
      "Year":"5 septiembre 2022",
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_7dddd9bd89814f5e9cbbbafdc08915ab.jpg" 
    },
    {
      "productoId":3,
      "Modelo":"Cheyenne",
      "Descripcion":"4 puertas",
      "Precio": 970000,
      "Year":"4 julio 2024",
      "Marca":"CHEVROLET",
      "Color":"Azul",
      "ImagenUrl":"https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/pickups-and-trucks/2024-cheyenne/mov/01-images/cheyenne-zr2-v2.jpg?imwidth=960" 
    }

  ]

}
