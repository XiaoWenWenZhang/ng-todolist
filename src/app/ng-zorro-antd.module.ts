
 
import { NgModule } from '@angular/core';
 
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzI18nModule } from 'ng-zorro-antd/i18n';

 
@NgModule({
  exports: [
    NzButtonModule,
    NzFormModule,
    NzI18nModule,
  ]
})
export class NgZorroAntdModule {
 
}