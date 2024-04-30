class ProductVariations {
    generateProductVariation(productId, data) {
        return this.client.raw('post', `/ecommerce/product-variations/generate/${productId}`, null, this.dataTransform(data));
    }

    setPricesToProductVariations(data) {
        return this.client.raw('post', '/ecommerce/product-variations/set-prices', null, this.dataTransform(data));
    }

    getProductFromProductVariation(productId) {
        return this.client.raw('get', `/ecommerce/product-variations/product/${productId}`);
    }

    getProductVariations() {
        return this.client.raw('get', '/ecommerce/product-variations');
    }

    getProductVariation(id) {
        return this.client.raw('get', `/ecommerce/product-variations/${id}`);
    }

    createProductVariation(data) {
        return this.client.raw('post', '/ecommerce/product-variations', null, this.dataTransform(data));
    }

    updateProductVariation(id, data) {
        return this.client.raw('put', `/ecommerce/product-variations/${id}`, null, this.dataTransform(data));
    }

    deleteProductVariation(id) {
        return this.client.raw('delete', `/ecommerce/product-variations/${id}`);
    }
}

export default ProductVariations;
