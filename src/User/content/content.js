import assignMethods from "../../helpers/mixin.js";

import Assets from './assets.js';
import AdaptiveObjects from "./adaptiveObjects.js";
import AdaptiveObjectTemplates from "./adaptiveObjectTemplates.js";
import ContentInstances from './contentInstances.js';
import ContentTemplates from './contentTemplates.js';
import Conversations from './conversations.js';
import ConversationTemplates from './conversationTemplates.js';
import DAM from './dam.js';
import Forms from './forms.js';
import MessageTemplates from './messageTemplates.js';
import Messages from './messages.js';
import Pages from './pages.js';
import Stories from './stories.js';
import StoryVersions from './storyVersions.js';
import StoryTemplates from './storyTemplates.js';

class Content {
    getPublicImagesUrl() {
        return this.client.raw('get', '/content/public-images-url');
    }

    getKeywords(options = null) {
        return this.client.raw('get', '/content/keywords', options);
    }

    getKeyword(id) {
        return this.client.raw('get', `/content/keywords/${id}`);
    }

    createKeyword(data) {
        return this.client.raw('post', '/content/keywords', null, data);
    }

    updateKeyword(id, data) {
        return this.client.raw('put', `/content/keywords/${id}`, null, data);
    }

    getStages(options = null) {
        return this.client.raw('get', '/content/stages', options);
    }

    getStage(id) {
        return this.client.raw('get', `/content/stages/${id}`);
    }

    createStage(data) {
        return this.client.raw('post', '/content/stages', null, data);
    }

    updateStage(id, data) {
        return this.client.raw('put', `/content/stages/${id}`, null, data);
    }
}

const allInstances = [
    new Assets,
    new AdaptiveObjects,
    new AdaptiveObjectTemplates,
    new ContentInstances,
    new ContentTemplates,
    new Conversations,
    new ConversationTemplates,
    new DAM,
    new Forms,
    new MessageTemplates,
    new Messages,
    new Pages,
    new Stories,
    new StoryVersions,
    new StoryTemplates
];

assignMethods(allInstances, Content);

export default Content;
