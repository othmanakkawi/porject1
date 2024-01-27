import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';
import { authGuard } from '../auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // Route to the public module (adjust the path if needed)
  {
    path: '',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule),
  },
  // Route to the admin module with canActivate guard
  {
    path: 'admin',
    component: AdminComponent
    
  },
  // Route to the login component
  {
    path: 'login',
    component: LoginComponent,
  },
  // Route to the Todolist component with canActivate guard
  {
    path: 'todolist',
    component: TodolistComponent,
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
