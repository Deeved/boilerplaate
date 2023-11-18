import { Routes } from '@angular/router';
import { PostComponent } from './pages/post/post.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { isUserLoginIn } from './auth.guard';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  },
  {
    path: 'application',
    children: [
      {
        path: 'post',
        children: [
          {
            path: '',
            component: PostComponent,
          },
        ],
      },
      {
        path: 'comments',
        component: CommentsComponent,
      },
    ],
    canActivateChild: [isUserLoginIn],
  },  
  { path: '', redirectTo: 'application/post', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
