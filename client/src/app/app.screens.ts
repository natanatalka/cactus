/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Screen_PhonePortrait } from '../pages/Screen/PhonePortrait/Screen';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { 1 _PhonePortrait } from '../pages/1/PhonePortrait/1';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Screen_PhonePortrait,
    Blank_PhonePortrait,
    1 _PhonePortrait
  ];
  static mapping = {
    'Screen': {
      PhonePortrait: Screen_PhonePortrait
    },
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    '1': {
      PhonePortrait: 1 _PhonePortrait
    }
  }
}