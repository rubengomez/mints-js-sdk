class Forms {
    getForms(options = null) {
        return this.client.raw('get', '/content/forms', options);
    }

    publishForm(id, data) {
        return this.client.raw('put', `/content/forms/${id}/publish`, null, data);
    }

    scheduleForm(id, data) {
        return this.client.raw('put', `/content/forms/${id}/schedule`, null, data);
    }

    revertPublishedForm(id) {
        return this.client.raw('get', `/content/forms/${id}/revert-published-data`);
    }

    duplicateForm(id) {
        return this.client.raw('post', `/content/forms/${id}/duplicate`);
    }

    getFormActivationWords(id) {
        return this.client.raw('post', `/content/forms/${id}/activation-words`);
    }

    getFormSupportData() {
        return this.client.raw('get', '/content/forms/support-data');
    }

    getFormSubmissions(options = null) {
        return this.client.raw('get', '/content/forms/submissions', options);
    }

    getFormSubmission(id, options) {
        return this.client.raw('get', `/content/forms/submissions/${id}`, options);
    }

    deleteFormSubmission(id) {
        return this.client.raw('delete', `/content/forms/submissions/${id}`);
    }

    getForm(id, options = null) {
        return this.client.raw('get', `/content/forms/${id}`, options);
    }

    createForm(data, options = null) {
        return this.client.raw('post', '/content/forms', options, data);
    }

    updateForm(id, data, options = null) {
        return this.client.raw('put', `/content/forms/${id}`, options, data);
    }

    deleteForm(id) {
        return this.client.raw('delete', `/content/forms/${id}`);
    }

    getFormAggregates(id, objectId) {
        return this.client.raw('get', `/content/forms/${id}/aggregates?objectId=${objectId}`);
    }

    resetFormAggregates(id, data) {
        return this.client.raw('post', `/content/forms/${id}/aggregates`, null, data);
    }
}

export default Forms;