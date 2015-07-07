import {$http} from "services/http";

export class TaskService {
    private REST_HOST = "http://localhost:8080";

    /**
    * @returns a list of Task obects as a JavaScript Array
    */
    public getTasks(): Promise<any> {
        let token = localStorage.getItem("jwt");
        return $http.get(this.REST_HOST + "/api/tasks/tim", token);
    }

    /**
     * @param obj is a JavaScript Object
     * @returns server _id of newly created task
     */
    public addTask(obj: any): Promise<any> {
        let token = localStorage.getItem("jwt");
        return $http.post(this.REST_HOST + "/api/tasks/tim", obj, token);
    }
}
