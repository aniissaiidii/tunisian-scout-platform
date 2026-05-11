import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  username: string;
  role: 'fawj' | 'unit' | 'treasurer' | 'international';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  private users = [
    { username: 'fawj_admin', password: 'fawj123', role: 'fawj' as const },
    { username: 'unit_leader', password: 'unit123', role: 'unit' as const },
    { username: 'treasurer', password: 'treasurer123', role: 'treasurer' as const },
    { username: 'international', password: 'international123', role: 'international' as const }
  ];

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

 login(username: string, password: string): boolean {
  console.log('AuthService.login received:', username, password);
  const user = this.users.find(u => u.username === username && u.password === password);
  console.log('Found user:', user);
  if (user) {
    const loggedInUser: User = { username: user.username, role: user.role };
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
    this.currentUserSubject.next(loggedInUser);
    return true;
  }
  return false;
}
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  get currentUserValue(): User | null {
  return this.currentUserSubject.value;
}

  get isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
  get userRole(): string | null {
  return this.currentUserValue?.role || null;
}
}
