import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})


export class WorkExperienceComponent implements OnInit {

  workExperience : Array <any> = []; 

  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha : "2022-2023",
      ubicacion : "Potrero viejo, Amatlan de los reyes",
      puesto : "Estudiante",
      empresa : "Sygma",
      logros : [
        {descripcion: "Nuevo S.O. "},
        {descripcion: "Inovacon de B.D. "},
      ]
  
    };
    let work2 = {
      fecha : "2019-2022",
      ubicacion : "La perla Mb",
      puesto : "CEO",
      empresa : "Rosas Shop",
      logros : [
        {descripcion: "ser un gran vendedor "},
        {descripcion: "Inovacon de B.D. "},
      ]
    };
  
    this.workExperience.push(work1);
    this.workExperience.push(work2);
  
  

  }
  }

