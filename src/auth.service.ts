import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: any[] = [
    {
      id: 1,
      username: 'osman',
      password: 'akkawi',
    },
  ];

  session: any;

  constructor(private router: Router, private toastr: ToastrService) {}

  login(username: string, password: string) {
    let user = this.users.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
      this.toastr.success('Login successful', 'Success');
    } else {
      this.toastr.error('Invalid username or password', 'Error');
    }
  
    return user;
  }
  
  logout() {
    this.session = undefined;
    localStorage.removeItem('session');
    this.toastr.success('Logout successful', 'Success');
    this.router.navigateByUrl('/');
  }
}  