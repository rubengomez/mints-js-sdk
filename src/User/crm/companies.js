class Companies {
    getCompaniesSupportData() {
        return this.client.raw('get', '/crm/companies/support-data');
    }

    getCompanies(options = null, usePost = true) {
        return this.getQueryResults('/crm/companies', options, usePost);
    }

    getCompany(id, options = null) {
        return this.client.raw('get', `/crm/companies/${id}`, options);
    }

    createCompany(data, options = null) {
        return this.client.raw('post', '/crm/companies/', options, this.dataTransform(data));
    }

    updateCompany(id, data, options = null) {
        return this.client.raw('put', `/crm/companies/${id}`, options, this.dataTransform(data));
    }

    deleteCompanies(data) {
        return this.client.raw('delete', '/crm/companies/delete', null, this.dataTransform(data));
    }
}

export default Companies;