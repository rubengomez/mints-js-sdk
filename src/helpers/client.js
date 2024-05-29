import Cookies from "./Cookies.js";
import MintsHelper from "./mintsHelper.js";
class client {
    host;
    baseUrl;
    apiKey;
    sessionKey;
    MintsHelper = new MintsHelper();

    constructor(host, baseUrl, apiKey = null, sessionKey = null) {
        this.host = host || '';
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.sessionKey = sessionKey;
    }

    headers(compatibilityOptions) {
        let headers = {
            'Accept': 'application/json'
        };
        if (!compatibilityOptions.no_content_type) headers['Content-Type'] = 'application/json';

        headers['ApiKey'] = this.apiKey;
        headers['Authorization'] = `Bearer ${Cookies.get(this.sessionKey)}`;

        return headers;
    }

    async raw(action, url, options = null, data = null, baseUrl = null, compatibilityOptions = {}) {
        data = this.MintsHelper.dataTransform(data)
        let uri = '';

        if (options && typeof options === 'object') {
            const needEncoding = ['jfilters', 'afilters', 'rfilters'];
            const foundOptionsWithEncoding = Object.keys(options).filter(key =>
                needEncoding.includes(key.toLowerCase()) && options[key] && typeof options[key] === 'object'
            );

            foundOptionsWithEncoding.forEach(key => {
                const jsonString = JSON.stringify(options[key]);
                const encodedString = btoa(jsonString);
                options[key] = encodeURIComponent(encodedString);
            });

            const params = new URLSearchParams(options);
            uri = params.toString();
        }

        const fullUrl = `${this.host}${baseUrl || this.baseUrl}${url}?${uri}`;

        let response;
        let headers = this.headers(compatibilityOptions);

        try {
            if (action === 'get') {
                response = await fetch(fullUrl, { method: 'GET', headers});
            } else if (['create', 'post'].includes(action)) {
                compatibilityOptions.no_content_type ?
                    response = await fetch(fullUrl, { method: 'POST', headers, body: this.convertToFormData(data) }) :
                    response = await fetch(fullUrl, { method: 'POST', headers, body: JSON.stringify(data) });

            } else if (['put', 'patch', 'update'].includes(action)) {
                response = await fetch(fullUrl, { method: 'PUT', headers, body: JSON.stringify(data) });
            } else if (['delete', 'destroy'].includes(action)) {
                response = await fetch(fullUrl, { method: 'DELETE', headers, body: JSON.stringify(data) });
            }

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status} in the following request (${action} ${fullUrl})`);
            }

            response = await response.json();

            try {
                return JSON.parse(response);
            } catch (error) {
                return response;
            }
        } catch (error) {
            return error;
        }
    }

    convertToFormData(data) {
        let formData = new FormData();
        for (let key in data) {
            if (typeof data[key] === 'object') {
                for (let subKey in data[key]) {
                    formData.append(`${key}[${subKey}]`, data[key][subKey]);
                }
            } else {
                formData.append(key, data[key]);
            }
        }
        return formData;
    }
}

export default client;