class Orders {
    duplicateOrder(orderId, data) {
        return this.client.raw('post', `/ecommerce/orders/duplicate/${orderId}`, null, data);
    }

    deleteOrders(data) {
        return this.client.raw('delete', '/ecommerce/orders/delete', null, this.dataTransform(data));
    }

    getOrdersSupportData() {
        return this.client.raw('get', '/ecommerce/orders/support-data');
    }

    getOrders(options = null, usePost = true) {
        return this.getQueryResults('/ecommerce/orders', options, usePost);
    }

    getOrder(id, options = null) {
        return this.client.raw('get', `/ecommerce/orders/${id}`, options);
    }

    createOrder(data, options = null) {
        return this.client.raw('post', '/ecommerce/orders', options, this.dataTransform(data));
    }

    updateOrder(id, data, options = null) {
        return this.client.raw('put', `/ecommerce/orders/${id}`, options, this.dataTransform(data));
    }

    getOrderTemplateSupportData(id) {
        return this.client.raw('get', `/ecommerce/order-templates/support-data/${id}`);
    }

    getOrderTemplates(options = null) {
        return this.client.raw('get', '/ecommerce/order-templates', options);
    }

    getOrderTemplate(id, options = null) {
        return this.client.raw('get', `/ecommerce/order-templates/${id}`, options);
    }

    updateOrderTemplate(id, data) {
        return this.client.raw('put', `/ecommerce/order-templates/${id}`, null, this.dataTransform(data));
    }

    getOrderItemsSupportData() {
        return this.client.raw('get', '/ecommerce/order-items/support-data');
    }

    detachOrderItemFromOrderItemGroup(orderItemId, groupId) {
        return this.client.raw('put', `/ecommerce/order-items/detach/${orderItemId}/order-items-groups/${groupId}`);
    }

    updateOrderItemFromOrderItemGroup(orderItemId, groupId, data) {
        const url = `/ecommerce/order-items/update/${orderItemId}/order-items-groups/${groupId}`;
        return this.client.raw('put', url, null, this.dataTransform(data));
    }

    getOrderItems(options = null) {
        return this.client.raw('get', '/ecommerce/order-items', options);
    }

    getOrderItem(id, options = null) {
        return this.client.raw('get', `/ecommerce/order-items/${id}`, options);
    }

    updateOrderItem(id, data) {
        return this.client.raw('put', `/ecommerce/order-items/${id}`, null, this.dataTransform(data));
    }
}

export default Orders;
