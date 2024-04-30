import assignMethods from "./helpers/mixin.js";
import Client from "./helpers/client.js";
import MintsHelper from "./helpers/mintsHelper.js";

import Ecommerce from "./Pub/ecommerce/ecommerce.js";
import Content from "./Pub/content/content.js";
import Config from "./Pub/config/config.js";

class MintsPublic {
    baseUrl = '/api/v1';
    client;

    constructor(host = null, apiKey = null) {
        this.client = new Client(host, this.baseUrl, apiKey);
    }

    sendUserMagicLink(emailOrPhone, templateSlug, redirectUrl = '', lifeTime = 1440, maxVisits = null, driver = 'email') {
        let data = {emailOrPhone, redirectUrl, lifeTime, maxVisits, driver, 'templateId': templateSlug };
        ['sms', 'whatsapp'].includes(driver) ? data['phone'] = emailOrPhone : data['email'] = emailOrPhone;
        return this.client.raw('post', '/users/magic-link', null, this.dataTransform(data), '/api/v1');
    }
}

const allInstances = [
    new MintsHelper,
    new Ecommerce,
    new Content,
    new Config
];

assignMethods(allInstances, MintsPublic);
export default MintsPublic;