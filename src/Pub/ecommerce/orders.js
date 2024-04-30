class PublicOrders {
    /**
     * Get a collection of items in the shopping cart.
     * @param {Object} options - List of options.
     */
    async getMyShoppingCart(options = null) {
        return this.client.raw('get', '/ecommerce/my-shopping-cart', options, null);
    }

    /**
     * Add an item into a shopping cart.
     * @param {Object} data - Data to be submitted.
     * @param {Object} options - List of options.
     */
    async addItemToShoppingCart(data, options = null) {
        return this.client.raw('post', '/ecommerce/shopping-cart', options, this.dataTransform(data));
    }
}

export default PublicOrders;