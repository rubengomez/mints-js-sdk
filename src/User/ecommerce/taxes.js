class Taxes {


    getTaxes(options = null) {
        return this.client.raw('get', '/ecommerce/taxes', options);
    }

    getTax(id, options = null) {
        return this.client.raw('get', `/ecommerce/taxes/${id}`, options);
    }

    createTax(data) {
        return this.client.raw('post', '/ecommerce/taxes', null, this.dataTransform(data));
    }

    updateTax(id, data) {
        return this.client.raw('put', `/ecommerce/taxes/${id}`, null, this.dataTransform(data));
    }

    deleteTax(id) {
        return this.client.raw('delete', `/ecommerce/taxes/${id}`);
    }
}

export default Taxes;