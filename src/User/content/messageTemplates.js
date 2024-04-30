class MessageTemplates {
    getVariablesOfContentPageFromMessageTemplates(id) {
        return this.client.raw('get', `/content/message-templates/content-pages/${id}/variables`);
    }

    getRecipientVariables() {
        return this.client.raw('get', '/content/message-templates/recipient-variables');
    }

    getDriverTemplates() {
        return this.client.raw('get', '/content/email-templates/driver/templates');
    }

    previewMessageTemplate(data) {
        return this.client.raw('post', '/content/message-templates/preview', null, data);
    }

    sendMessageTemplate(data) {
        return this.client.raw('post', '/content/message-templates/send', null, data);
    }

    duplicateMessageTemplate(id, data) {
        return this.client.raw('post', `/content/message-templates/${id}/duplicate`, null, data);
    }

    getMessageTemplates(options = null) {
        return this.client.raw('get', '/content/message-templates', options);
    }

    getMessageTemplate(id, options = null) {
        return this.client.raw('get', `/content/message-templates/${id}`, options);
    }

    createMessageTemplate(data) {
        return this.client.raw('post', '/content/message-templates', null, data);
    }

    updateMessageTemplate(id, data) {
        return this.client.raw('put', `/content/message-templates/${id}`, null, data);
    }

    deleteMessageTemplate(id) {
        return this.client.raw('delete', `/content/message-templates/${id}`);
    }
}

export default MessageTemplates;