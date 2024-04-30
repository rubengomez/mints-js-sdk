class AdaptiveObjectTemplates {
    getAdaptiveObjectTemplates(options = null, usePost = true) {
        return this.getQueryResults('/content/adaptive-object-templates', options, usePost);
    }

    getAdaptiveObjectTemplate(id, options = null) {
        return this.client.raw('get', `/content/adaptive-object-templates/${id}`, options);
    }

    createAdaptiveObjectTemplate(data, options = null) {
        return this.client.raw('post', '/content/adaptive-object-templates', options, data);
    }

    updateAdaptiveObjectTemplate(id, data, options = null) {
        return this.client.raw('put', `/content/adaptive-object-templates/${id}`, options, data);
    }

    deleteAdaptiveObjectTemplate(id) {
        return this.client.raw('delete', `/content/adaptive-object-templates/${id}`);
    }
}

export default AdaptiveObjectTemplates;
