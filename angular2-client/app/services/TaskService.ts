import {$http} from "services/http";

export class TaskService {

    /**
    * @returns a list of Task obects as a JavaScript Array
    */
    public getTasks(token: any): Promise<any> {
        return $http.get("http://localhost:8080/api/tasks/tim", token);
    }

    /**
    * @param obj is a JavaScript Object
    * @returns server _id of newly created task
    */
    public addTask(obj: any, token: any): Promise<any> {
        return $http.post("http://localhost:8080/api/tasks/tim", obj, token);
    }
}
