class AdaptiveObjects {
    duplicateAdaptiveObject(id, data) {
        return this.client.raw('post', `/content/adaptive-objects/${id}/duplicate`, null, data);
    }

    getAdaptiveObjects(options = null, usePost = true) {
        return this.getQueryResults('/content/adaptive-objects', options, usePost);
    }

    getAdaptiveObject(id, options = null) {
        return this.client.raw('get', `/content/adaptive-objects/${id}`, options);
    }

    createAdaptiveObject(data, options = null) {
        return this.client.raw('post', '/content/adaptive-objects', options, data);
    }

    updateAdaptiveObject(id, data, options = null) {
        return this.client.raw('put', `/content/adaptive-objects/${id}`, options, data);
    }

    deleteAdaptiveObject(id) {
        return this.client.raw('delete', `/content/adaptive-objects/${id}`);
    }
}

export default AdaptiveObjects;