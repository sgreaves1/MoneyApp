const {setWorldConstructor} = require('cucumber');
const request = require('request');

class World {

    constructor() {
        this.queries = {};
        this.headers = {};
        this.response = {};
    }

    addQueryToRequest(name, queryValue) {
        this.queries[name] = queryValue;
    }

    addHeaderToRequest(name, headerValue) {
        this.headers[name] = headerValue;
    }

    resetWorld() {
        this.queries = {};
        this.headers = {};
    }

    getRequest(resource, callback) {
        let self = this;
        let url = `http://localhost:4000${resource}`;

        request({
            url: url,
            qs: this.queries,
            headers: this.headers,
        }, function (error, response, body) {
            self.response = {statusCode: response.statusCode, body: body};
            callback();
        });
    }
}

setWorldConstructor(World);