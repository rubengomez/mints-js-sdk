class ContactOrders {
    /**
     * Get Orders.
     * Get a collection of orders.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @param {boolean} usePost - Variable to determine if the request is by 'post' or 'get' functions.
     * @example
     * const data = return this.client.getOrders();
     */
    getOrders(options = null, usePost = true) {
        if (usePost) {
            return this.client.raw('post', '/ecommerce/orders/query', options, null, this.contactV1Url);
        } else {
            return this.client.raw('get', '/ecommerce/orders', options, null, this.contactV1Url);
        }
    }

    /**
     * Get Order.
     * Get an order info.
     * @param {number} id - Order id.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getOrder(25);
     */
    getOrder(id, options = null) {
        return this.client.raw('get', `/ecommerce/orders/${id}`, options, null, this.contactV1Url);
    }

    /**
     * Create Order.
     * Create a order with data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   orderTemplateId: 1,
     *   orderStatusId: 1,
     *   salesChannelId: 1
     * };
     * const data = return this.client.createOrder(data);
     */
    createOrder(data) {
        return this.client.raw('post', '/ecommerce/orders', null, this.dataTransform(data), this.contactV1Url);
    }

    /**
     * Update Order.
     * Update an order info.
     * @param {number} id - Order Id
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   name: 'New Order Name Updated'
     * };
     * const data = return this.client.updateOrder(130, data);
     * FIXME: This method doesnt update an order.
     */
    updateOrder(id, data) {
        return this.client.raw('put', `/ecommerce/orders/${id}`, null, this.dataTransform(data), this.contactV1Url);
    }

    /**
     * Detach Order Item From Order Item Group.
     * Detach an order item from an order item group.
     * @param {number} orderItemId - Order item id.
     * @param {number} groupId - Order items group id.
     * @example
     * return this.client.detachOrderItemFromOrderItemGroup(orderItemId, groupId);
     * // FIXME: This method doesn't work. Throw no action error.
     */
    detachOrderItemFromOrderItemGroup(orderItemId, groupId) {
        return this.client.raw('put', `/ecommerce/order-items/detach/${orderItemId}/order-items-groups/${groupId}`, null, null, this.contactV1Url);
    }

    /**
     * Update Order Item From Order Item Group.
     * Update an order item data from an order item group.
     * @param {number} orderItemId - Order item id.
     * @param {number} groupId - Order items group id.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   name: 'New Order Item Name Updated'
     * };
     * const data = return this.client.updateOrderItemFromOrderItemGroup(orderItemId, groupId, data);
     */
    updateOrderItemFromOrderItemGroup(orderItemId, groupId, data) {
        const url = `/ecommerce/order-items/update/${orderItemId}/order-items-groups/${groupId}`;
        return this.client.raw('put', url, null, this.dataTransform(data), this.contactV1Url);
    }

    /**
     * Get My Shopping Cart.
     * Get a collection of items in the shopping cart.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getMyShoppingCart();
     */
    getMyShoppingCart(options = null) {
        return this.client.raw('get', '/ecommerce/my-shopping-cart', options, null, this.contactV1Url);
    }

    /**
     * Add Item To Shopping Cart.
     * Add an item into a shopping cart.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   quantity: 1,
     *   skuId: 1,
     *   priceListId: 1
     * };
     * const data = return this.client.addItemToShoppingCart(data);
     */
    addItemToShoppingCart(data, options = null) {
        return this.client.raw('post', '/ecommerce/shopping-cart', options, this.dataTransform(data), this.contactV1Url);
    }
}

export default ContactOrders;
