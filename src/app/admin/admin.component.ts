import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  dashboardColor = '#ffffff';

  onColorChange(color: string): void {
    this.dashboardColor = color;
  }

  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}

