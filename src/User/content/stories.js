class Stories {
    duplicateStory(id, data) {
        return this.client.raw('post', `/content/stories/${id}/duplicate`, null, data);
    }

    getStories(options = null, usePost = true) {
        return this.getQueryResults('/content/stories', options, usePost);
    }

    getStory(id, options = null) {
        return this.client.raw('get', `/content/stories/${id}`, options);
    }

    createStory(data, options = null) {
        return this.client.raw('post', '/content/stories', options, data);
    }

    updateStory(id, data, options = null) {
        return this.client.raw('put', `/content/stories/${id}`, options, data);
    }

    deleteStory(id) {
        return this.client.raw('delete', `/content/stories/${id}`);
    }
}

export default Stories;