class WorkFlowSteps {
    createWorkflowStep(data, options = null) {
        return this.client.raw('post', '/crm/steps', options, data);
    }

    updateWorkflowStep(id, data, options = null) {
        return this.client.raw('put', `/crm/steps/${id}`, options, data);
    }

    deleteWorkflowStep(id) {
        return this.client.raw('delete', `/crm/steps/${id}`);
    }
}

export default WorkFlowSteps;