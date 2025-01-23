import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

// INFORMACIÓN DE MI COMPONENTE, qué cosas usar en ese componente
@Component({
  selector: 'app-root', //es lo que nos crea la etiqueta de html
  standalone: true,
  imports: [RouterOutlet, RouterLink], //aquí va todo lo que necesitamos usar de nuestras importaciones
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


}
