import {Component, View} from 'angular2/angular2';
import {AuthenticationService} from '../../services/AuthenticationService';

@Component({
    selector: 'component-4',
    viewInjector: [AuthenticationService]
})
@View({
    templateUrl: './components/settings/settings.html?v=<%= VERSION %>',
})
export class Settings {
    message: string;

    constructor(public authenticationService: AuthenticationService) {
        this.message = null;
    }
}
