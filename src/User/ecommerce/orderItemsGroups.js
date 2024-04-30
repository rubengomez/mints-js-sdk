class OrderItemsGroups {


    /**
     * Get a pending order template from an order item group.
     * @param {number} parentOrderId - Order items group id.
     * @param {number} orderTemplateId - Order template id.
     * @example
     * const data = return this.client.getPendingOrderTemplateFromOrderItemGroup(1, 1);
     */
    getPendingOrderTemplateFromOrderItemGroup(parentOrderId, orderTemplateId) {
        const url = `/ecommerce/order-items-groups/${parentOrderId}/pending-items/order-template/${orderTemplateId}`;
        return this.client.raw('get', url);
    }

    /**
     * Get support data of an order item group by an order id.
     * @param {number} orderId - Order id.
     * @example
     * const data = return this.client.getOrderItemGroupSupportDataByOrderId(1);
     */
    getOrderItemGroupSupportDataByOrderId(orderId) {
        return this.client.raw('get', `/ecommerce/order-items-groups/support-data/${orderId}`);
    }

    /**
     * Get a collection of order item groups.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getOrderItemGroups(options);
     */
    getOrderItemGroups(options = null) {
        return this.client.raw('get', '/ecommerce/order-items-groups', options);
    }

    /**
     * Get a order item group info.
     * @param {number} id - Order item group id.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getOrderItemGroup(1, options);
     */
    getOrderItemGroup(id, options = null) {
        return this.client.raw('get', `/ecommerce/order-items-groups/${id}`, options);
    }

    /**
     * Create a order item group with data.
     * @param {Object} data - Data to be submitted.
     * @param {Object} options - Options for the request.
     * @example
     * const data = {
     *   name: 'New Order Item Group',
     *   orderId: 1,
     *   quantity: 1,
     *   salePrice: 200
     * };
     * const data = return this.client.createOrderItemGroup(data, options);
     */
    createOrderItemGroup(data, options = null) {
        return this.client.raw('post', '/ecommerce/order-items-groups', options, this.dataTransform(data));
    }

    /**
     * Update a order item group info.
     * @param {number} id - Order item group id.
     * @param {Object} data - Data to be submitted.
     * @param {Object} options - Options for the request.
     * @example
     * const data = {
     *   name: 'New Order Item Group Modified'
     * };
     * const data = return this.client.updateOrderItemGroup(147, data, options);
     */
    updateOrderItemGroup(id, data, options = null) {
        return this.client.raw('put', `/ecommerce/order-items-groups/${id}`, options, this.dataTransform(data));
    }

    /**
     * Delete a order item group.
     * @param {number} id - Order item group id.
     * @example
     * const data = return this.client.deleteOrderItemGroup(147);
     */
    deleteOrderItemGroup(id) {
        return this.client.raw('delete', `/ecommerce/order-items-groups/${id}`);
    }
}

export default OrderItemsGroups;