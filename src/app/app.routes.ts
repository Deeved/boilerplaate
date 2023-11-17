import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { inject } from '@angular/core';
import moment from 'moment';
import { isUserLoginIn } from './auth.guard';

// export const isUserLoginIn = (
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   const expiration = localStorage.getItem('expires_at');
//   const expiresAt = JSON.parse(expiration || '');
//   console.log(expiresAt);
//   console.log(moment().valueOf());

//   if (!moment().isBefore(expiresAt)) {
//     inject(Router).navigate(['login']);
//   }

//   return moment().isBefore(expiresAt);
// };

export const routes: Routes = [
  {
    path: 'post',
    children: [
      {
        path: '',
        component: PostComponent,
      },
    ],
    // canActivate: [isUserLoginIn],
    canActivate: [isUserLoginIn],
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
