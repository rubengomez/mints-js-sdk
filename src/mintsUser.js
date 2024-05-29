// Required
import assignMethods from "./helpers/mixin.js";
import Client from "./helpers/client.js";
import MintsHelper from "./helpers/mintsHelper.js";

// Modules
import Content from "./User/content/content.js";
import Profile from "./User/profile/profile.js";
import Marketing from "./User/marketing/marketing.js";
import Helpers from "./User/helpers/helpers.js";
import Ecommerce from "./User/ecommerce/ecommerce.js";
import Crm from "./User/crm/crm.js";
import Contacts from "./User/contacts/contacts.js";
import Config from "./User/config/config.js";

// Global class
class MintsUser {
    baseUrl = '/api/user/v1';
    client;

    constructor(host = null, apiKey = null) {
        this.client = new Client(host, this.baseUrl, apiKey, 'mints_user_session_token');
    }

    login(email, password) {
        let data = {email, password};
        return this.client.raw('post', '/users/login', null, data, '/api/v1', { no_content_type: true }, false);
        // if (response['api_token']) this.client.sessionToken = response['api_token'];
    }

    magicLinkLogin(token) {
        return this.client.raw('get', `/users/magic-link-login/${token}`, null, null, '/api/v1');
    }

    sendMagicLink(email, redirectUrl = '', lifeTime = 24) {
        let data = {email, redirectUrl, lifeTime};
        return this.client.raw('post', '/users/magic-link', null, { data: data }, '/api/v1');
    }
}

// Assign methods
const allInstances = [
    new MintsHelper,
    new Content,
    new Profile,
    new Marketing,
    new Helpers,
    new Ecommerce,
    new Crm,
    new Contacts,
    new Config
];
assignMethods(allInstances, MintsUser);
export default MintsUser;