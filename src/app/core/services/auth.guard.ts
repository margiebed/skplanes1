import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router: Router,
    private toast: MatSnackBar
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

   if (this.authService.isLoggedIn()){
return true;
   }
   this.router.navigate(['/login']);
this.toast.open(' Nie jesteś zalogowany i nie możesz widzieć stronę');
return false;
  }

}
