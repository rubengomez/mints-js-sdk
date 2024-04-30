class ContentInstances {
    getContentInstances(options = null) {
        return this.client.raw('get', '/content/instances', options);
    }

    duplicateContentInstance(id, data) {
        return this.client.raw('post', `/content/instances/${id}/duplicate`, null, data);
    }

    getContentInstance(id, options = null) {
        return this.client.raw('get', `/content/instances/${id}`, options);
    }

    publishContentInstance(id, data) {
        return this.client.raw('put', `/content/instances/${id}/publish`, null, this.dataTransform(data));
    }

    scheduleContentInstance(id, data) {
        return this.client.raw('put', `/content/instances/${id}/schedule`, null, this.dataTransform(data));
    }

    revertPublishedContentInstance(id) {
        return this.client.raw('get', `/content/instances/${id}/revert-published-data`);
    }

    createContentInstance(data) {
        return this.client.raw('post', '/content/instances', null, this.dataTransform(data));
    }

    updateContentInstance(id, data) {
        return this.client.raw('put', `/content/instances/${id}`, null, this.dataTransform(data));
    }

    deleteContentInstance(id) {
        return this.client.raw('delete', `/content/instances/${id}`);
    }
}

export default ContentInstances;