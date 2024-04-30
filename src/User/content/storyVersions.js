class StoryVersions {
    getStoryVersions(options = null, usePost = true) {
        return this.getQueryResults('/content/story-versions', options, usePost);
    }

    getStoryVersion(id, options = null) {
        return this.client.raw('get', `/content/story-versions/${id}`, options);
    }

    createStoryVersion(data, options = null) {
        return this.client.raw('post', '/content/story-versions', options, data);
    }

    updateStoryVersion(id, data, options = null) {
        return this.client.raw('put', `/content/story-versions/${id}`, options, data);
    }

    deleteStoryVersion(id) {
        return this.client.raw('delete', `/content/story-versions/${id}`);
    }

    duplicateStoryVersion(id, data) {
        return this.client.raw('post', `/content/story-versions/${id}/duplicate`, null, data);
    }

    publishStoryVersion(id, data) {
        return this.client.raw('put', `/content/story-versions/${id}/publish`, null, data);
    }
}

export default StoryVersions;