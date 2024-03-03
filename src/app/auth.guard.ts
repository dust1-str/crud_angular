import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './Core/Services/login.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  const isAuth = loginService.isAuth();
    if (!isAuth) {
      router.navigate(['/login']);
    }
    return isAuth;
};
