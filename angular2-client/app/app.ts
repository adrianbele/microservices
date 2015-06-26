/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from './components/home/home';
import {Tasks} from './components/tasks/tasks';
import {Login} from './components/login/login';
import {Settings} from './components/settings/settings';

@Component({
  selector: 'app'
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/tasks', component: Tasks, as: 'tasks' },
  { path: '/login', component: Login, as: 'login' },
  { path: '/settings', component: Settings, as: 'settings' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {
    jwt: string;

    constructor() {
        this.jwt = localStorage.getItem('jwt');
    }

    logout(event) {
        event.preventDefault();
        this.jwt = null;
        localStorage.removeItem('jwt');
    }
}

bootstrap(App, [routerInjectables]);
