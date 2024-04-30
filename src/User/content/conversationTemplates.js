class ConversationTemplates {
    getConversationTemplates(options = null) {
        return this.client.raw('get', '/content/conversation-templates', options);
    }

    getConversationTemplate(id, options = null) {
        return this.client.raw('get', `/content/conversation-templates/${id}`, options);
    }

    createConversationTemplate(data, options = null) {
        return this.client.raw('post', '/content/conversation-templates', options, this.dataTransform(data));
    }

    updateConversationTemplate(id, data, options = null) {
        return this.client.raw('put', `/content/conversation-templates/${id}`, options, this.dataTransform(data));
    }

    deleteConversationTemplate(id) {
        return this.client.raw('delete', `/content/conversation-templates/${id}`);
    }

    duplicateConversationTemplate(id, data) {
        return this.client.raw('put', `/content/conversation-templates/${id}/duplicate`, null, this.dataTransform(data));
    }

    updateActivationWords(conversationTemplateId, data) {
        const url = `/content/conversation-templates/${conversationTemplateId}/activation-words`;
        return this.client.raw('post', url, null, this.dataTransform(data));
    }

    attachFormInConversationTemplate(id, data) {
        return this.client.raw('post', `/content/conversation-templates/${id}/attach-form`, null, this.dataTransform(data));
    }

    detachFormInConversationTemplate(id, formId) {
        return this.client.raw('delete', `/content/conversation-templates/${id}/detach-form/${formId}`);
    }
}

export default ConversationTemplates;