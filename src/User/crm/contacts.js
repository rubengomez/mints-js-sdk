class Contacts {
    getContactsSupportData() {
        return this.client.raw('get', '/crm/contacts/support-data');
    }

    getOnlineActivity(id) {
        return this.client.raw('get', `/crm/contacts/${id}/online-activity`);
    }

    getContacts(options = null, usePost = true) {
        return this.getQueryResults('/crm/contacts', options, usePost);
    }

    getContact(id, options = null) {
        return this.client.raw('get', `/crm/contacts/${id}`, options);
    }

    createContact(data, options = null) {
        return this.client.raw('post', '/crm/contacts', options, this.dataTransform(data));
    }

    updateContact(id, data, options = null) {
        return this.client.raw('put', `/crm/contacts/${id}`, options, this.dataTransform(data));
    }

    getContactDeal(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/deals`);
    }

    createContactDeal(contactId, data) {
        return this.client.raw('post', `/crm/contacts/${contactId}/deals`, null, data);
    }

    deleteContactDeal(contactId, dealId) {
        return this.client.raw('delete', `/crm/contacts/${contactId}/deals/${dealId}`);
    }

    getContactUser(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/users`);
    }

    createContactUser(contactId, data) {
        return this.client.raw('post', `/crm/contacts/${contactId}/users`, null, data);
    }

    deleteContactUser(contactId, id) {
        return this.client.raw('delete', `/crm/contacts/${contactId}/users/${id}`);
    }

    getContactSegments(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/segments`);
    }

    getContactSubmissions(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/submissions`);
    }

    getContactTags(contactId) {
        return this.client.raw('get', `/crm/contacts/${contactId}/tags`);
    }

    mergeContacts(id, data) {
        return this.client.raw('post', `/crm/contacts/${id}/merge`, null, this.dataTransform(data));
    }

    sendMagicLinks(data) {
        return this.client.raw('post', '/crm/contacts/send-magic-link', null, this.dataTransform(data));
    }

    deleteContacts(data) {
        // TODO: ContactController.delete need a success output
        return this.client.raw('delete', '/crm/contacts/delete', null, this.dataTransform(data));
    }
}

export default Contacts;