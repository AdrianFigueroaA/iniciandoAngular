import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public titulo: string;
  public subtitulo : string;
  public edad :number;

  constructor() {


    this.titulo = "luna";
    this.subtitulo = "gata pesada";
    this.edad = 4;

   }



  ngOnInit(): void {
  }

}
