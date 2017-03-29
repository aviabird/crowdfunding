import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language = {
    'en': {
      'shortLang': 'en',
      'longLan': 'English',
      'class': 'flag-en'
    },
    'de': {
      'shortLang': 'de',
      'longLan': 'Deutsche',
      'class': 'flag-de'
    },
    'es': {
      'shortLang': 'es',
      'longLan': 'Spanisch',
      'class': 'flag-es'
    },
    'it': {
      'shortLang': 'it',
      'longLan': 'Italienisch',
      'class': 'flag-it'
    },
    'fr': {
      'shortLang': 'fr',
      'longLan': 'Französisch',
      'class': 'flag-fr'
    },
    'pt': {
      'shortLang': 'pt',
      'longLan': 'Portugiesisch',
      'class': 'flag-pt'
    }
  };

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'de', 'it', 'es', 'pt']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

}
