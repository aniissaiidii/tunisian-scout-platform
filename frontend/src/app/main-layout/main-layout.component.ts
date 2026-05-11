import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  menuOpen = false;

  constructor(private router: Router, private auth: AuthService) {}

  navigate(path: string) {
    this.router.navigate([path]);
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}