import Cookies from "./helpers/Cookies.js";
import assignMethods from "./helpers/mixin.js";
import Client from "./helpers/client.js";
import MintsHelper from "./helpers/mintsHelper.js";

import Config from "./Contact/config/config.js";
import Content from "./Contact/content/content.js";
import Ecommerce from "./Contact/ecommerce/ecommerce.js";

class MintsContact {
    baseUrl = '/api/contact/v1';
    client;

    constructor(host = null, apiKey = null) {
        this.client = new Client(host, this.baseUrl, apiKey, 'mints_contact_session_token');
    }

    register(data) {
        return this.client.raw('post', '/register', null, this.dataTransform(data));
    }

    login(email, password) {
        let data = {email, password};
        return this.client.raw('post', '/contacts/login', null, this.dataTransform(data), '/api/v1');
    }

    recoverPassword(data) {
        return this.client.raw('post', '/contacts/recover-password', null, this.dataTransform({email}));
    }

    resetPassword(data) {
        return this.client.raw('post', '/contacts/reset-password', null, this.dataTransform(data));
    }

    oauthLogin(data) {
        return this.client.raw('post', '/contacts/oauth-login', null, data);
    }

    magicLinkLogin(token) {
        let response = this.client.raw('get', `/contacts/magic-link-login/${token}`, null, null, '/api/v1');
        if (response['session_token']) this.client.sessionToken = response['session_token'];
        return response;
    }

    sendMagicLink(emailOrPhone, templateSlug, redirectUrl = '', lifeTime = 1440, maxVisits = null, driver = 'email') {
        let data = {emailOrPhone, redirectUrl, lifeTime, maxVisits, driver, 'templateId': templateSlug };
        ['sms', 'whatsapp'].includes(driver) ? data['phone'] = emailOrPhone : data['email'] = emailOrPhone;
        return this.client.raw('post', '/contacts/magic-link', null, this.dataTransform(data), '/api/v1');
    }

    me(options = null) {
        return this.client.raw('get', '/me', options, null, this.baseUrl);
    }

    status() {
        return this.client.raw('get', '/status', null, null, this.baseUrl);
    }

    update(data) {
        return this.client.raw('post', '/update', null, this.dataTransform(data), this.baseUrl);
    }

    logout() {
        if (this.hasSessionToken()) {
            return this.client.raw('post', '/logout', null, null, this.baseUrl);
        }
    }

    changePassword(data) {
        return this.client.raw('post', '/change-password', null, this.dataTransform(data), this.baseUrl);
    }

    hasSessionToken() {
        const sessionToken = Cookies.get('mints_contact_session_token');
        if (!sessionToken) throw new Error('Unauthorized: No session token found');
        true
    }
}

const allInstances = [
    new MintsHelper,
    new Config,
    new Content,
    new Ecommerce
];

assignMethods(allInstances, MintsContact);

export default MintsContact;