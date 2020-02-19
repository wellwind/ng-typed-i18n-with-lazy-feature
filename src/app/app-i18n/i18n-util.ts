import { InjectionToken } from '@angular/core';
import { lang } from './app-en.module';

export const MAIN_TRANSLATION = new InjectionToken('main translation');
export type Translate = typeof lang;
