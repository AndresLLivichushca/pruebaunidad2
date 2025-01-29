import { Routes } from '@angular/router';
import { CandidatosComponent } from './components/candidatos/candidatos.component';

export const routes: Routes = [

  { path: 'candidatos', component: CandidatosComponent },
  { path: '**', redirectTo: 'candidatos' }, // Redirige a consulta por defecto
];
