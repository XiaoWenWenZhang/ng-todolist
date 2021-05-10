import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    translateService.addLangs(['zh', 'en']);
    translateService.setDefaultLang('zh');

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
  
  setLanguage(language: string) {
      this.translateService.use(language);
  }
}
