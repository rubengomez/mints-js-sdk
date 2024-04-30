class StoryTemplates {
    getStoryTemplateSupportData(id) {
        return this.client.raw('get', `/content/story-templates/support-data/stories/${id}`);
    }

    getStoryTemplatesSupportData() {
        return this.client.raw('get', '/content/story-templates/support-data');
    }

    getStoryTemplates(options = null) {
        return this.client.raw('get', '/content/story-templates', options);
    }

    getStoryTemplate(id, options = null) {
        return this.client.raw('get', `/content/story-templates/${id}`, options);
    }

    createStoryTemplate(data, options = null) {
        return this.client.raw('post', '/content/story-templates', options, data);
    }

    updateStoryTemplate(id, data) {
        return this.client.raw('put', `/content/story-templates/${id}`, null, data);
    }
}

export default StoryTemplates;