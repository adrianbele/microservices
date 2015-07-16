// TODO make string an optional parameter with ''?''
exports.$http = {
    get: function (url, token) {
        return _sendRequest(url, null, 'GET', token);
    },
    post: function (url, payload, token) {
        return _sendRequest(url, payload, 'POST', token);
    },
    put: function (url, payload, token) {
        return _sendRequest(url, payload, 'PUT', token);
    },
    delete: function (url, payload, token) {
        return _sendRequest(url, null, 'DELETE', token);
    }
};
/**
* @param payload is a JavaScript/JSON Object
* @param type is the HTTP verb as String
*/
function _sendRequest(url, payLoad, type, token) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.timeout = 10 * 1000;
        req.open(type, url);
        // support for content-type inference and handling accordingly
        if (payLoad && (typeof payLoad !== "string")) {
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        }
        else {
            req.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        }
        // Send Json Web Token
        if (token && token !== null) {
            req.setRequestHeader("Authorization", "Bearer " + token);
        }
        req.onload = function () {
            if (req.status == 200) {
                if (req.response.startsWith("{")) {
                    resolve(JSON.parse(req.response));
                }
                else {
                    resolve(req.response);
                }
            }
            else {
                reject(JSON.parse(req.response));
            }
        };
        req.onerror = function () {
            reject(req.response);
        };
        req.ontimeout = function () {
            reject("server does not respond");
        };
        if (payLoad) {
            req.send(JSON.stringify(payLoad));
        }
        else {
            req.send(null);
        }
    });
}
//# sourceMappingURL=http.js.map