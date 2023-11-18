import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const isUserLoginIn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const token = localStorage.getItem('id_token');
 
  if(!token) {
    router.navigateByUrl('authentication/login');
    return false;
  }

  return true;
};
