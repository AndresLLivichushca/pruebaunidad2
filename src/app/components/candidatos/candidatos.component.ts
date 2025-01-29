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
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './candidatos.component.html',
  styleUrl: './candidatos.component.scss'
})
export class CandidatosComponent {
  nombre: string = '';
  binomio: string = '';
  apiUrl = 'http://localhost:8080/prueba3/api/candidatos'; // Endpoint del backend
  candidatos: Candidatos[] = []; // Lista de candidatos

  constructor(private http: HttpClient) {}

  // Método para enviar datos al backend
  enviar() {
    const nuevoCandidato: Candidatos = {
      nombre: this.nombre,
      binomio: this.binomio
    };

    this.http.post(this.apiUrl, nuevoCandidato).subscribe(() => {
      this.nombre = '';
      this.binomio = '';
      this.listarCandidatos(); // Volver a cargar la lista después de registrar
    });
  }

  // Método para obtener la lista de candidatos
  listarCandidatos() {
    this.http.get<Candidatos[]>(`${this.apiUrl}/list`).subscribe(data => {
      this.candidatos = data;
    });
  }

  // Cargar la lista cuando se inicia el componente
  ngOnInit() {
    this.listarCandidatos();
  }
}
