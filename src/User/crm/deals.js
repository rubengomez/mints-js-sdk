class Deals {
    getDealPermits(id) {
        return this.client.raw('get', `/crm/deals/${id}/permits`);
    }

    getDealSupportData() {
        return this.client.raw('get', '/crm/deals/support-data');
    }

    getDealCurrencies() {
        return this.client.raw('get', '/crm/deal/currencies');
    }

    getDeals(options = null, usePost = true) {
        return this.getQueryResults('/crm/deals', options, usePost);
    }

    getDeal(id, options = null) {
        return this.client.raw('get', `/crm/deals/${id}`, options);
    }

    createDeal(data, options = null) {
        return this.client.raw('post', '/crm/deals', options, this.dataTransform(data));
    }

    updateDeal(id, data, options = null) {
        return this.client.raw('put', `/crm/deals/${id}`, options, this.dataTransform(data));
    }
}

export default Deals;