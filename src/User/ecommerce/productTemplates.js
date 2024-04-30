class ProductTemplates {


    getProductTemplatesSupportDataFromProduct(id) {
        return this.client.raw('get', `/ecommerce/product-templates/support-data/products/${id}`);
    }

    getProductTemplatesSupportDataFromOrderItemsGroup(id) {
        return this.client.raw('get', `/ecommerce/product-templates/support-data/order-items-groups/${id}`);
    }

    getProductTemplatesSupportData() {
        return this.client.raw('get', '/ecommerce/product-templates/support-data');
    }

    getProductTemplates(options = null) {
        return this.client.raw('get', '/ecommerce/product-templates', options);
    }

    getProductTemplate(id, options = null) {
        return this.client.raw('get', `/ecommerce/product-templates/${id}`, options);
    }

    createProductTemplate(data) {
        return this.client.raw('post', '/ecommerce/product-templates/', null, this.dataTransform(data));
    }

    updateProductTemplate(id, data) {
        return this.client.raw('put', `/ecommerce/product-templates/${id}`, null, this.dataTransform(data));
    }
}

export default ProductTemplates;