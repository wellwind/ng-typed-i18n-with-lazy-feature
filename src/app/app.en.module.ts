import { NgModule } from '@angular/core';
import { MAIN_TRANSLATION } from './app-i18n/i18n-util';
import { AppLangRoutingModule } from './app.lang-routing.module';

export const lang = {
  name: 'Hello World'
};

@NgModule({
  imports: [AppLangRoutingModule],
  providers: [
    { provide: MAIN_TRANSLATION, useValue: lang }
  ]
})
export class AppEnModule { }
