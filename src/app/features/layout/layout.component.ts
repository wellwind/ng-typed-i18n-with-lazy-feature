import { Component, OnInit, Inject } from '@angular/core';
import { MAIN_TRANSLATION, Translate } from '../../app-i18n/i18n-util';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(@Inject(MAIN_TRANSLATION) public translate: Translate) { }

  ngOnInit(): void {
  }

}
