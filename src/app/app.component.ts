import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public i18n: TranslateService) {
    i18n.addLangs(["zh", "en"]);
    i18n.setDefaultLang('zh');
 
    const browserLang = i18n.getBrowserLang();
    i18n.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    };
}
