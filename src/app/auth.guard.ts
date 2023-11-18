import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import moment from 'moment';

export const isUserLoginIn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const expiration = localStorage.getItem('expires_at');
  const router = inject(Router);
 
  if(!expiration) {
    router.navigate(['login']);
    return false;
  }

  const expiresAt = JSON.parse(expiration);

  if (moment().isAfter(expiresAt)) {
    router.navigate(['login']);
    return false
  }

  return true;
};
