import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array <any> = []; 

  constructor() { }

  ngOnInit(): void {

    let edu1 = {
      fecha : "2019-2023",
      carrera : "Ingenieria de Software",
      escuela : "Universidad Veracruzana",
      
  
    };
    
  
    this.education.push(edu1);
    
  
  


  }

}
