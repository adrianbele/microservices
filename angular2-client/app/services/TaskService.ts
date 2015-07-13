import {$http} from "services/http";
import {REST_HOST} from "../config";

export class TaskService {

	/**
	 * @returns a list of Task obects as a JavaScript Array
	 */
	public getTasks():Promise<any> {
		let token = localStorage.getItem("jwt");
		return $http.get(REST_HOST + "/api/tasks/tim", token);
	}

	/**
	 * @param obj is a JavaScript Object
	 * @returns server _id of newly created task
	 */
	public addTask(obj:any):Promise<any> {
		let token = localStorage.getItem("jwt");
		return $http.post(REST_HOST + "/api/tasks/tim", obj, token);
	}
}
