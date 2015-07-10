
/**
* API declares a Task as:
* {"description":"Task description","_id":"1","assignee":"Tim","title":"Report an issue","user_id":"1"}
*/
export class Task {
    description: number;
    _id: number;
    assignee: string;
    title: string
    user_id: number;

    constructor(title: string, _id?: number) {
        this.title = title;
        this._id = _id;
    }

    public setId(id: number) {
        this._id = id;
    }
}
