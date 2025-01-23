import { Component } from '@angular/core';
import { RegisterComponent } from '../../component/register/register.component';

@Component({
  selector: 'app-login',
  imports: [RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
