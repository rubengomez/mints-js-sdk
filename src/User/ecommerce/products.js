class Products {


    updateProductVariationsConfig(productId, data) {
        return this.client.raw('post', `/ecommerce/products/update-variations-config/${productId}`, null, this.dataTransform(data));
    }

    getProductsSupportData() {
        return this.client.raw('get', '/ecommerce/products/support-data');
    }

    deleteProduct(id) {
        return this.client.raw('delete', `/ecommerce/products/${id}`);
    }

    scheduleProduct(id, data) {
        return this.client.raw('put', `/ecommerce/products/${id}/schedule`, null, this.dataTransform(data));
    }

    getProductVariantOptionsConfig(id) {
        return this.client.raw('get', `/ecommerce/products/${id}/variant-options-config`);
    }

    revertPublishedProduct(id) {
        return this.client.raw('get', `/ecommerce/products/${id}/revert-published-data`);
    }

    getProducts(options = null, usePost = true) {
        return this.getQueryResults('/ecommerce/products', options, usePost);
    }

    getProduct(id, options = null) {
        return this.client.raw('get', `/ecommerce/products/${id}`, options);
    }

    createProduct(data, options = null) {
        return this.client.raw('post', '/ecommerce/products/', options, this.dataTransform(data));
    }

    updateProduct(id, data, options = null) {
        return this.client.raw('put', `/ecommerce/products/${id}`, options, this.dataTransform(data));
    }
}

export default Products;