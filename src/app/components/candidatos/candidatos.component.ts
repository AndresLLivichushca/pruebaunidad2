import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Candidatos {
  nombre: string;
  binomio: string;
}


@Component({
  selector: 'app-candidatos',
  imports: [FormsModule, CommonModule],
  templateUrl: './candidatos.component.html',
  styleUrl: './candidatos.component.scss'
})
export class CandidatosComponent {
  nombre: string = '';
  binomio:string = '' ;
  apiUrl = 'http://localhost:8080/prueba3/api/candidatos/enviar'; // Cambiar según el backend

  constructor(private http: HttpClient) {}

  enviar() {
    
  }
}
