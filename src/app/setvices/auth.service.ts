import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username !== "username" || password !== "12345") {
      return false;
    }
    this.isAuth = true;
    return true;
  }
  

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
