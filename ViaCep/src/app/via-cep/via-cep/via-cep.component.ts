import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-via-cep',
  templateUrl: './via-cep.component.html',
  styleUrls: ['./via-cep.component.css']
})
export class ViaCepComponent implements OnInit {

  cep: any;
  cepInformed: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getCep() {
    this.http.get('https://viacep.com.br/ws/' + this.cepInformed + '/json/').subscribe
    (response => {
      this.cep = response;
    }, error => {
      console.log(error);
    });
  }

}
