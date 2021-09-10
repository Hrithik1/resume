import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersGuard implements CanActivate {
  constructor(private userServices: UsersService, private router: Router) {}

  canActivate(): boolean {
    if (this.userServices.isLogged()) {
      return true;
    } else {
      alert("You are not authorized.")
      this.router.navigate(['/login']);
      return false;
    }
  }
}