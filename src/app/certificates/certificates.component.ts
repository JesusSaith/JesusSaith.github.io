import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates : Array <any> = []; 

  constructor() { }

  ngOnInit(): void {

    let cer = {
      curso : "Liderazgo",
      escuela : "Universidad Veracruzana",
      fecha : "2020",
    }

    let cer2 = {
      curso: "python",
      escuela: "Kaggle",
      fecha: "2023",
      enlace: "https://github.com/JesusSaith/Cursos_Kaggle/blob/master/python/Jes%C3%BAs%20Saith%20Meneses%20-%20Python.png",
      descripcion: "Certificado de Python"
    }
    

    let cer3 = {
      curso: "Pandas",
      escuela: "Kaggle",
      fecha: "2023",
      enlace: "https://github.com/JesusSaith/Cursos_Kaggle/blob/master/Pandas/Jes%C3%BAs%20Saith%20Meneses%20-%20Pandas.png",
      descripcion: "Certificado de Pandas"
    }



    this.certificates.push(cer);
    this.certificates.push(cer2);
    this.certificates.push(cer3);
     
  




  }

}
