import { NgModule } from '@angular/core';
import { Translate, MAIN_TRANSLATION } from './app-i18n/i18n-util';
import { AppLangRoutingModule } from './app.lang-routing.module';

export const lang: Translate = {
  name: '嗨世界'
};

@NgModule({
  imports: [AppLangRoutingModule],
  providers: [
    { provide: MAIN_TRANSLATION, useValue: lang }
  ]
})
export class AppZhModule { }
