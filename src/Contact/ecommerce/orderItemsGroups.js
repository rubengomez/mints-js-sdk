class ContactOrderItemsGroups {
    /**
     * Get Order Item Groups.
     * Get a collection of order item groups.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getOrderItemGroups();
     */
    getOrderItemGroups(options = null) {
        return this.client.raw('get', '/ecommerce/order-items-groups', options, null, this.contactV1Url);
    }

    /**
     * Get Order Item Group.
     * Get an order item group info.
     * @param {number} id - Order Item Group Id.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getOrderItemGroup(130);
     */
    getOrderItemGroup(id, options = null) {
        return this.client.raw('get', `/ecommerce/order-items-groups/${id}`, options, null, this.contactV1Url);
    }

    /**
     * Create Order Item Group.
     * Create an order item group with data if you are related to that order.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   name: 'New Order Item Group',
     *   quantity: 1,
     *   orderId: 1,
     *   onSalePrice: 100
     * };
     * const data = return this.client.createOrderItemGroup(data);
     */
    createOrderItemGroup(data) {
        return this.client.raw('post', '/ecommerce/order-items-groups', null, this.dataTransform(data), this.contactV1Url);
    }

    /**
     * Update Order Item Group.
     * Update an order item group info if you are related to that order.
     * @param {number} id - Order Item Group Id.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   name: 'New Order Item Group Name Updated'
     * };
     * const data = return this.client.updateOrderItemGroup(130, data);
     */
    updateOrderItemGroup(id, data) {
        return this.client.raw('put', `/ecommerce/order-items-groups/${id}`, null, this.dataTransform(data), this.contactV1Url);
    }

    /**
     * Delete Order Item Group.
     * Delete an order item group.
     * @param {number} id - Order Item Group Id.
     * @example
     * return this.client.deleteOrderItemGroup(130);
     * FIXME: This method doesn't work. Throw no action error.
     */
    deleteOrderItemGroup(id) {
        return this.client.raw('delete', `/ecommerce/order-items-groups/${id}`, null, null, this.contactV1Url);
    }
}

export default ContactOrderItemsGroups;
