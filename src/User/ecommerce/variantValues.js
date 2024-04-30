class VariantValues {
    getVariantValues(options = null) {
        return this.client.raw('get', '/ecommerce/variant-values', options);
    }

    getVariantValue(id, options = null) {
        return this.client.raw('get', `/ecommerce/variant-values/${id}`, options);
    }

    createVariantValue(data) {
        return this.client.raw('post', '/ecommerce/variant-values', null, this.dataTransform(data));
    }

    updateVariantValue(id, data) {
        return this.client.raw('put', `/ecommerce/variant-values/${id}`, null, this.dataTransform(data));
    }
}

export default VariantValues;
