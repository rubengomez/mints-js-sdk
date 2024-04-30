class ProductVersions {
    getProductVersions(options = null, usePost = true) {
        return this.getQueryResults('/ecommerce/product-versions', options, usePost);
    }

    getProductVersion(slug, options = null) {
        return this.client.raw('get', `/ecommerce/product-versions/${slug}`, options);
    }

    createProductVersion(data, options = null) {
        return this.client.raw('post', '/ecommerce/product-versions', options, this.dataTransform(data));
    }

    updateProductVersion(id, data, options = null) {
        return this.client.raw('put', `/ecommerce/product-versions/${id}`, options, this.dataTransform(data));
    }

    deleteProductVersion(id) {
        return this.client.raw('delete', `/ecommerce/product-versions/${id}`);
    }

    publishProductVersion(id, data) {
        return this.client.raw('put', `/ecommerce/product-versions/${id}/publish`, null, this.dataTransform(data));
    }
}

export default ProductVersions;