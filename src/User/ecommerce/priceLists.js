class PriceList {


    getPriceLists(options = null, usePost = true) {
        return this.getQueryResults('/ecommerce/price-list', options, usePost);
    }

    getPriceList(id, options = null) {
        return this.client.raw('get', `/ecommerce/price-list/${id}`, options);
    }

    createPriceList(data) {
        return this.client.raw('post', '/ecommerce/price-list', null, this.dataTransform(data));
    }

    updatePriceList(id, data) {
        return this.client.raw('put', `/ecommerce/price-list/${id}`, null, this.dataTransform(data));
    }
}

export default PriceList;