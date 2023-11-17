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
  const expiresAt = JSON.parse(expiration || '');
  console.log(expiresAt);
  console.log(moment().valueOf());

  if (!moment().isBefore(expiresAt)) {
    inject(Router).navigate(['login']);
  }

  return moment().isBefore(expiresAt);
};
