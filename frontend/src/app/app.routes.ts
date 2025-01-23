import { Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { InicioComponent } from './pages/inicio/inicio.component';


export const routes: Routes = [
    { path: '', component: InicioComponent, title: 'inicio' },

    { path: 'login', component: RegisterComponent, title: 'inicio Sesion' },
  

];
