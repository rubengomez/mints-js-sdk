class ContactOrderItems {
    /**
     * Get Order Items.
     * Get a collection of order items.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getOrderItems();
     */
    getOrderItems(options = null) {
        return this.client.raw('get', '/ecommerce/order-items', options, null, this.contactV1Url);
    }

    /**
     * Get Order Item.
     * Get an order item info.
     * @param {number} id - Order item id.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = return this.client.getOrderItem(1);
     */
    getOrderItem(id, options = null) {
        return this.client.raw('get', `/ecommerce/order-items/${id}`, options, null, this.contactV1Url);
    }
}

export default ContactOrderItems;
