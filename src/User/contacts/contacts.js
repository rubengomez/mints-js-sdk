class Contacts {
    /**
     * Get contacts support data.
     */
    async getContactsSupportData() {
        return this.client.raw('get', '/crm/contacts/support-data');
    }

    /**
     * Get online activity of a contact.
     * @param {number} id - Contact id.
     */
    async getOnlineActivity(id) {
        return this.client.raw('get', `/crm/contacts/${id}/online-activity`);
    }

    /**
     * Get a collection of contacts.
     * @param {Object} options - List of Resource Collection Options.
     * @param {boolean} usePost - Variable to determine if the request is by 'post' or 'get' functions.
     */
    async getContacts(options = null, usePost = true) {
        return this.getQueryResults('/crm/contacts', options, usePost);
    }

    /**
     * Get a contact data.
     * @param {number} id - Contact id.
     * @param {Object} options - List of Resource Collection Options.
     */
    async getContact(id, options = null) {
        return this.client.raw('get', `/crm/contacts/${id}`, options);
    }

    /**
     * Create a contact with data.
     * @param {Object} data - Data to be submitted.
     * @param {Object} options - List of Resource Collection Options.
     */
    async createContact(data, options = null) {
        return this.client.raw('post', '/crm/contacts', options, this.dataTransform(data));
    }

    /**
     * Update contact data.
     * @param {number} id - Contact id.
     * @param {Object} data - Data to be submitted.
     * @param {Object} options - List of Resource Collection Options.
     */
    async updateContact(id, data, options = null) {
        return this.client.raw('put', `/crm/contacts/${id}`, options, this.dataTransform(data));
    }

    /**
     * Get a collection of deals of a contact.
     * @param {number} contactId - Contact id.
     */
    async getContactDeal(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/deals`);
    }

    /**
     * Create a contact deal with data.
     * @param {number} contactId - Contact id.
     * @param {Object} data - Data to be submitted.
     */
    async createContactDeal(contactId, data) {
        return this.client.raw('post', `/crm/contacts/${contactId}/deals`, null, data);
    }

    /**
     * Delete a contact deal with data.
     * @param {number} contactId - Contact id.
     * @param {number} dealId - Deal id.
     */
    async deleteContactDeal(contactId, dealId) {
        return this.client.raw('delete', `/crm/contacts/${contactId}/deals/${dealId}`);
    }

    /**
     * Get user data of a contact.
     * @param {number} contactId - Contact id.
     */
    async getContactUser(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/users`);
    }

    /**
     * Relate a contact with an user.
     * @param {number} contactId - Contact id.
     * @param {Object} data - Data to be submitted.
     */
    async createContactUser(contactId, data) {
        return this.client.raw('post', `/crm/contacts/${contactId}/users`, null, data);
    }

    /**
     * Delete a relationship between a contact and an user.
     * @param {number} contactId - Contact id.
     * @param {number} id - User id.
     */
    async deleteContactUser(contactId, id) {
        return this.client.raw('delete', `/crm/contacts/${contactId}/users/${id}`);
    }

    /**
     * Get segments of a contact.
     * @param {number} contactId - Contact id.
     */
    async getContactSegments(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/segments`);
    }

    /**
     * Get submissions of a contact.
     * @param {number} contactId - Contact id.
     */
    async getContactSubmissions(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/submissions`);
    }

    /**
     * Get tags of a contact.
     * @param {number} contactId - Contact id.
     */
    async getContactTags(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/tags`);
    }

    /**
     * Merge contacts.
     * @param {number} id - Contact id.
     * @param {Object} data - Data to be submitted. It contains ids to be merged.
     */
    async mergeContacts(id, data) {
        return this.client.raw('post', `/crm/contacts/${id}/merge`, null, this.dataTransform(data));
    }

    /**
     * Send magic links to contacts.
     * @param {Object} data - Data to be submitted.
     */
    async sendMagicLinks(data) {
        return this.client.raw('post', '/crm/contacts/send-magic-link', null, this.dataTransform(data));
    }

    /**
     * Delete different contacts.
     * @param {Object} data - Data to be submitted.
     */
    async deleteContacts(data) {
        return this.client.raw('delete', '/crm/contacts/delete', null, this.dataTransform(data));
    }
}

export default Contacts;