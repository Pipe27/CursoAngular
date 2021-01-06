import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  bandera = true;

  frase: any = {
    msj: "Un gran poder, requiere una gran responsabilidad",
    aut: "Ben Parker"
  };

  personajes: string[] = ['Spiderman', 'Venom',  'Dr. Octopus']

  constructor() { }

  ngOnInit(): void {
  }

}
