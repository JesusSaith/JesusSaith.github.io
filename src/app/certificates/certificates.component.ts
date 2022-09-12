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

    this.certificates.push(cer);




  }

}
