export const $http = {
    get: function(url: string, token: string) {
        return _sendRequest(url, null, 'GET', token);
    },
    post: function(url: string, payload: any, token: string) {
        return _sendRequest(url, payload, 'POST', token);
    },
    put: function(url: string, payload: any, token: string) {
        return _sendRequest(url, payload, 'PUT', token);
    },
    delete: function(url: string, payload: any, token: string) {
        return _sendRequest(url, null, 'DELETE', token);
    }
}

// borrowed from https://github.com/afj176/ng2-express-starter/blob/master/public/components/contact/Contact.js#L36
// TODO pass JWT token for subsequent requests
function _sendRequest(url: string, payLoad: any, type: string, token: string): Promise<any> {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open(type, url);

        // support for content-type inference and handling accordingly
        if (payLoad && payLoad.startsWith("{")) {
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        } else {
            req.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        }
        // For example: send Json Web Token
        if (token && token !== null) {
            req.setRequestHeader("X-Access-Token", token);
        }

        req.onload = function() {
            if (req.status == 200) {
                if (req.response.startsWith("{")) {
                    resolve(JSON.parse(req.response));
                } else {
                    resolve(req.response);
                }
            } else {
                reject(JSON.parse(req.response));
            }
        };

        req.onerror = function() {
            reject(JSON.parse(req.response));
        };

        if (payLoad) {
            req.send(JSON.stringify(payLoad));
        } else {
            req.send(null);
        }
    });
}
