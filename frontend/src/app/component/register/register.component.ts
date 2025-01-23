import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Inicialización de formulario de inicio de sesión
  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  // Inicialización de formulario de registro
  formularioRegistro = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // Función para manejar inicio de sesión
  handleSubmit() {
    if (this.formularioLogin.valid) {
      const credenciales = this.formularioLogin.value;

      this.http.post('http://localhost:9000/users/login', credenciales).subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          this.toastr.success('Inicio de sesión exitoso');
          this.router.navigate(['/']); // Redirigir al inicio
        },
        error: (err) => {
          this.toastr.error('Error en el inicio de sesión');
        }
      });
    } else {
      this.toastr.warning('Por favor completa el formulario correctamente');
    }
  }

  // Función para manejar el registro
  handleRegister() {
    if (this.formularioRegistro.valid) {
      const datosRegistro = this.formularioRegistro.value;

      this.http.post('http://localhost:9000/users/register', datosRegistro).subscribe({
        next: (response: any) => {
          this.toastr.success('Registro exitoso');
          this.router.navigate(['/login']);  // Redirigir al login
        },
        error: (err) => {
          this.toastr.error('Error en el registro');
        }
      });
    } else {
      this.toastr.warning('Por favor completa el formulario correctamente');
    }
  }
}
