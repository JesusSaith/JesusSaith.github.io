import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  intereses : Array <any> = [];

  constructor() { }

  ngOnInit(): void {

    let int1 = {
      musica : "Musica", 
      deporte : "Deporte",
      peli : "Peliculas",
      serie : "Series",
      natu : "Naturaleza",
    }

    this.intereses.push(int1);
  }

}
