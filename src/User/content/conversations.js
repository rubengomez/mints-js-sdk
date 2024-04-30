class Conversations {
    getConversations(options = null) {
        return this.client.raw('get', '/content/conversations', options);
    }

    getConversation(id, options = null) {
        return this.client.raw('get', `/content/conversations/${id}`, options);
    }

    createConversation(data, options = null) {
        return this.client.raw('post', '/content/conversations', options, this.dataTransform(data));
    }

    updateConversation(id, data, options = null) {
        return this.client.raw('put', `/content/conversations/${id}`, options, this.dataTransform(data));
    }

    deleteConversation(id) {
        return this.client.raw('delete', `/content/conversations/${id}`);
    }

    updateConversationStatus(id, data) {
        return this.client.raw('put', `/content/conversations/${id}/status`, null, this.dataTransform(data));
    }

    getConversationParticipants(id) {
        return this.client.raw('get', `/content/conversations/${id}/participants`);
    }

    attachUserInConversation(id, data) {
        return this.client.raw('post', `/content/conversations/${id}/attach-user`, null, this.dataTransform(data));
    }

    detachUserInConversation(id, data) {
        return this.client.raw('post', `/content/conversations/${id}/detach-user`, null, this.dataTransform(data));
    }

    attachContactInConversation(id, data) {
        return this.client.raw('post', `/content/conversations/${id}/attach-contact`, null, this.dataTransform(data));
    }

    detachContactInConversation(id, data) {
        return this.client.raw('post', `/content/conversations/${id}/detach-contact`, null, this.dataTransform(data));
    }
}

export default Conversations;