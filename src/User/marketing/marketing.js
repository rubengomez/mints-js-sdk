class Marketing {
    /**
     * Get a collection of automations.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getAutomations(options);
     */
    getAutomations(options = null) {
        return this.client.raw('get', '/marketing/automation', options);
    }

    /**
     * Get an automation info.
     * @param {number} id - Automation id.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getAutomation(1, options);
     */
    getAutomation(id, options = null) {
        return this.client.raw('get', `/marketing/automation/${id}`, options);
    }

    /**
     * Create an automation with data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   title: 'New Automation'
     * };
     * const data = return this.client.createAutomation(data);
     */
    createAutomation(data) {
        return this.client.raw('post', '/marketing/automation/', null, this.dataTransform(data));
    }

    /**
     * Update an automation info.
     * @param {number} id - Automation id.
     * @param {Object} data - Data to be submitted.
     */
    updateAutomation(id, data) {
        // FIXME: Method doesn't work.
        return this.client.raw('put', `/marketing/automation/${id}`, null, this.dataTransform(data));
    }

    /**
     * Delete an automation.
     * @param {number} id - Automation id.
     * @example
     * const data = return this.client.deleteAutomation(5);
     */
    deleteAutomation(id) {
        return this.client.raw('delete', `/marketing/automation/${id}`);
    }

    /**
     * Get executions of an automation.
     * @param {number} id - Automation id.
     * @example
     * const data = return this.client.getAutomationExecutions(1);
     */
    getAutomationExecutions(id) {
        return this.client.raw('get', `/marketing/automation/${id}/executions`);
    }

    /**
     * Reset an automation.
     * @param {number} id - Automation id.
     * @example
     * const data = return this.client.resetAutomation(1);
     */
    resetAutomation(id) {
        return this.client.raw('post', `/marketing/automation/${id}/reset`);
    }

    /**
     * Duplicate an automation.
     * @param {number} id - Automation id.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   options: []
     * };
     * const data = return this.client.duplicateAutomation(1, data.to_json);
     */
    duplicateAutomation(id, data) {
        return this.client.raw('post', `/marketing/automation/${id}/duplicate`, null, data);
    }
}

export default Marketing;
