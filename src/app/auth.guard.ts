import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './Core/Services/login.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'; 
import { map, catchError } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this.checkAuthentication();
  }

  private checkAuthentication(): Observable<boolean | UrlTree> {
    return this.loginService.isAuth().pipe(
      map(data => {
        if (data) {
          return true; 
        } else {
          return this.router.createUrlTree(['/login']); 
        }
      }),
      catchError(() => {
        return of(this.router.createUrlTree(['/login']));
      })
    );
  }
}
