
/**
* API declares a Task as:
* {"description":"Task description","_id":"1","assignee":"Tim","title":"Report an issue","user_id":"1"}
*/
export class Task {
    description: string = "default description";
    _id: number;
    assignee: string = "Tim";
    title: string
    user_id: number = 1;

    constructor(title: string, _id?: number) {
        this.title = title;
        this._id = _id;
    }

    public setId(id: number) {
        this._id = id;
    }

    public getId(): number {
        return this._id;
    }
}
