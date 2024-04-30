class Skus {


    getSkus(options = null) {
        return this.client.raw('get', '/ecommerce/skus', options);
    }

    getSku(id, options = null) {
        return this.client.raw('get', `/ecommerce/skus/${id}`, options);
    }

    createSku(data, options = null) {
        return this.client.raw('post', '/ecommerce/skus', options, this.dataTransform(data));
    }

    updateSku(id, data) {
        return this.client.raw('put', `/ecommerce/skus/${id}`, null, this.dataTransform(data));
    }

    deleteSku(id) {
        return this.client.raw('delete', `/ecommerce/skus/${id}`);
    }
}

export default Skus;
