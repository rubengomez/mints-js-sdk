class VariantOptions {


    getVariantOptions(options = null) {
        return this.client.raw('get', '/ecommerce/variant-options', options);
    }

    getVariantOption(id, options = null) {
        return this.client.raw('get', `/ecommerce/variant-options/${id}`, options);
    }

    createVariantOption(data) {
        return this.client.raw('post', '/ecommerce/variant-options', null, this.dataTransform(data));
    }

    updateVariantOption(id, data) {
        return this.client.raw('put', `/ecommerce/variant-options/${id}`, null, this.dataTransform(data));
    }
}

export default VariantOptions;