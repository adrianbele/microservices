import {Component, View} from 'angular2/angular2';
import {AuthenticationService} from '../../services/AuthenticationService';

@Component({
    selector: 'component-4',
    appInjector: [AuthenticationService]
})
@View({
    templateUrl: './components/settings/settings.html?v=<%= VERSION %>',
})
export class Settings {
    authenticationService: AuthenticationService;
    message: string;

    constructor(authenticationService: AuthenticationService) {
        this.authenticationService = authenticationService;
        this.message = null;
    }
}
