class Vouchers {
    getVouchers(options = null, usePost = true) {
        return this.getQueryResults('/ecommerce/vouchers', options, usePost);
    }

    getVoucher(id, options = null) {
        return this.client.raw('get', `/ecommerce/vouchers/${id}`, options);
    }

    createVoucher(data) {
        return this.client.raw('post', '/ecommerce/vouchers', null, this.dataTransform(data));
    }

    updateVoucher(id, data) {
        return this.client.raw('put', `/ecommerce/vouchers/${id}`, null, this.dataTransform(data));
    }
}

export default Vouchers;
