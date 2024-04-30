class WorkflowStepObjects {
    getStepObjects(options = null) {
        return this.client.raw('get', '/crm/step-objects', options);
    }

    getStepObject(id, options = null) {
        return this.client.raw('get', `/crm/step-objects/${id}`, options);
    }

    createStepObject(data) {
        return this.client.raw('post', '/crm/step-objects/', null, data);
    }

    updateStepObject(id, data) {
        return this.client.raw('put', `/crm/step-objects/${id}`, null, data);
    }

    getStepObjectByObjectType(objectType, objectId, options = null) {
        return this.client.raw('get', `/crm/step-objects/${objectType}/${objectId}`, options);
    }
}

export default WorkflowStepObjects;