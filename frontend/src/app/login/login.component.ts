import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
  console.log('Entered username:', this.username);
  console.log('Entered password:', this.password);
  const success = this.auth.login(this.username, this.password);
  console.log('Login success:', success);
  if (success) {
    this.router.navigate(['/home']);
  } else {
    alert('Invalid credentials');
  }
}
}