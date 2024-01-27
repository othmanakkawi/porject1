import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  dashboardColor = '#ffffff';
  selectedLanguage: string = 'en';

  translatedStrings: { [key: string]: string } = {};

  constructor(private authService: AuthService, public translate: TranslateService) {
    translate.addLangs(['en', 'ar', 'fr']);
    translate.setDefaultLang('en');
    this.loadTranslations();
  }

  loadTranslations(): void {
    this.translate.get([
      'menu_tooltip',
      'welcome',
      'like_tooltip',
      'share_tooltip',
      'notifications_tooltip',
      'dashboard_color_label',
      'my_account_tooltip',
      'dashboard',
      'mobile_phone',
      'ios',
      'android',
      'frameworks',
      'spring',
      'hibernate',
      'struts',
      'enter_todo_list',
      'logout',
      'components_open_here'
    ]).subscribe(translations => {
      this.translatedStrings = translations;
    });
  }

  onColorChange(color: string): void {
    this.dashboardColor = color;
  }

  switchLanguage(): void {
    this.translate.use(this.selectedLanguage);
    this.loadTranslations(); // Reload translations when language changes
  }

  logout() {
    this.authService.logout();
  }
}
