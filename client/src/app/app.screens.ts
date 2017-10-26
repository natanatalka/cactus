/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Screen_PhonePortrait } from '../pages/Screen/PhonePortrait/Screen';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { Monday_PhonePortrait } from '../pages/Monday/PhonePortrait/Monday';
import { Tuesday_PhonePortrait } from '../pages/Tuesday/PhonePortrait/Tuesday';
import { Wednesday_PhonePortrait } from '../pages/Wednesday/PhonePortrait/Wednesday';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Screen_PhonePortrait,
    Blank_PhonePortrait,
    Monday_PhonePortrait,
    Tuesday_PhonePortrait,
    Wednesday_PhonePortrait
  ];
  static mapping = {
    'Screen': {
      PhonePortrait: Screen_PhonePortrait
    },
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    'Monday': {
      PhonePortrait: Monday_PhonePortrait
    },
    'Tuesday': {
      PhonePortrait: Tuesday_PhonePortrait
    },
    'Wednesday': {
      PhonePortrait: Wednesday_PhonePortrait
    }
  }
}