import {$http} from "services/http";

/**
 * Logs to server
 */
export class LoggingService {

	// TODO new Relic via
	// NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"f49c0d1ad1",applicationID:"9104200",sa:1,agent:"js-agent.newrelic.com/nr-632.min.js"}
	private LOG_HOST: string = "http://localhost:8080";

	public log(event: any) : void {
		let token = localStorage.getItem("jwt");
		let logEvent = {"timestamp": new Date(), "event": event};
		$http.post(this.LOG_HOST + "/api/log", logEvent, token);
	}

}