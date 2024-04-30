class Workflows {
    getWorkflows(options = null) {
        return this.client.raw('get', '/crm/workflows', options);
    }

    getWorkflow(id, options = null) {
        return this.client.raw('get', `/crm/workflows/${id}`, options);
    }

    createWorkflow(data, options = null) {
        return this.client.raw('post', '/crm/workflows/', options, data);
    }

    updateWorkflow(id, data, options = null) {
        return this.client.raw('put', `/crm/workflows/${id}`, options, data);
    }
}

export default Workflows;
