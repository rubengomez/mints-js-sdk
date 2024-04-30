class Messages {
    getMessages(options = null) {
        return this.client.raw('get', '/content/messages', options);
    }

    getMessage(id, options = null) {
        return this.client.raw('get', `/content/messages/${id}`, options);
    }

    createMessage(data, options = null) {
        return this.client.raw('post', '/content/messages', options, data);
    }

    updateMessage(id, data, options = null) {
        return this.client.raw('put', `/content/messages/${id}`, options, data);
    }

    deleteMessage(id) {
        return this.client.raw('delete', `/content/messages/${id}`);
    }
}

export default Messages;