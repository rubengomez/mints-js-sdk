class ContactConversations {
    /**
     * Get Conversations.
     * Get a collection of conversations.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getConversations();
     */
    getConversations(options = null) {
        return this.client.raw('get', '/content/conversations', options, null, this.contactV1Url);
    }

    /**
     * Get Conversation.
     * Get a conversation info.
     * @param {number} id - Conversation id.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getConversation(1);
     */
    getConversation(id, options = null) {
        return this.client.raw('get', `/content/conversations/${id}`, options, null, this.contactV1Url);
    }

    /**
     * Create Conversation.
     * Create a conversation with data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   title: 'New Conversation To Test'
     * };
     * const data = return this.client.createConversation(data);
     */
    createConversation(data) {
        return this.client.raw('post', '/content/conversations', null, this.dataTransform(data), this.contactV1Url);
    }
}

export default ContactConversations;
