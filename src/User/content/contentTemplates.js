class ContentTemplates {
    getContentTemplateInstances(templateId) {
        return this.client.raw('get', `/content/templates/${templateId}/instances`);
    }

    duplicateContentTemplate(id) {
        return this.client.raw('post', `/content/templates/${id}/duplicate/`);
    }

    getContentTemplates(options = null) {
        return this.client.raw('get', '/content/templates', options);
    }

    getContentTemplate(id) {
        return this.client.raw('get', `/content/templates/${id}`);
    }

    createContentTemplate(data) {
        return this.client.raw('post', '/content/templates', null, data);
    }

    updateContentTemplate(id, data) {
        return this.client.raw('put', `/content/templates/${id}`, null, data);
    }

    deleteContentTemplate(id) {
        return this.client.raw('delete', `/content/templates/${id}`);
    }
}

export default ContentTemplates;