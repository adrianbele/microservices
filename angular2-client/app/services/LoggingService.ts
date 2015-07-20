import {$http} from "services/http";

/**
 * Logs to server
 */
export class LoggingService {

	private LOG_HOST: string = "http://localhost:8088";

	public log(event: any) : void {
		let token = localStorage.getItem("jwt");
		let logEvent = {"timestamp": new Date(), "event": event};
		$http.post(this.LOG_HOST + "/api/log", logEvent, token);
	}

}