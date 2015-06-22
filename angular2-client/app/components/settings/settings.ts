import {Component, View} from 'angular2/angular2';

@Component({selector: 'component-4'})

@View({
  templateUrl: './components/settings/settings.html?v=<%= VERSION %>',
})

export class Settings {}
