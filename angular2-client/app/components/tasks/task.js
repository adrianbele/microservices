/**
* API declares a Task as:
* {"description":"Task description","_id":"1","assignee":"Tim","title":"Report an issue","user_id":"1"}
*/
var Task = (function () {
    function Task(title, _id) {
        this.description = "default description";
        this.assignee = "Tim";
        this.user_id = 1;
        this.title = title;
        this._id = _id;
    }
    Task.prototype.setId = function (id) {
        this._id = id;
    };
    Task.prototype.getId = function () {
        return this._id;
    };
    return Task;
})();
exports.Task = Task;
//# sourceMappingURL=task.js.map