import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciales } from '../interfaces/credenciales';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // 1. INYECTAR DEPENDENCIAS 
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  public _toastrService = inject(ToastrService);

  // 2. RUTA DE CONEXIÓN CON EL BACKEND 
  private URL_LOGIN = 'http://localhost:9000/login';

  // 3. INICIAR SESIÓN - POST
  inicioSesion(credencialesIngreso: Credenciales) {
    return this._httpClient.post(this.URL_LOGIN, credencialesIngreso);
  }

  // 4. OBTENER EL TOKEN 
  obtenerToken() {
    return localStorage.getItem('token');
  }

  // 5. INICIO DE SESION O NO
  estaLogueado() {
    return this.obtenerToken() ? true : false;
  }

  // 6. CIERRE DE SESIÓN 
  cierreSesion() {
    this._toastrService.info('Cierre de sesión exitoso, hasta la próxima!');
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
