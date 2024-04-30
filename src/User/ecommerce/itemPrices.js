class ItemPrices {
    /**
     * Get a collection of item prices.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getItemPrices(options);
     */
    getItemPrices(options = null) {
        return this.client.raw('get', '/ecommerce/item-prices', options);
    }

    /**
     * Get an item price info.
     * @param {number} id - Item price id.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getItemPrice(1, options);
     */
    getItemPrice(id, options = null) {
        return this.client.raw('get', `/ecommerce/item-prices/${id}`, options);
    }

    /**
     * Create an item price with data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   priceList: [
     *     { id: 1 },
     *     { id: 2 }
     *   ],
     *   priceListId: 1,
     *   title: 'New Item Price'
     * };
     * const data = return this.client.createItemPrice(data);
     */
    createItemPrice(data) {
        // FIXME: Api send skuId as null and DB doesnt allow that.
        return this.client.raw('post', '/ecommerce/item-prices', null, this.dataTransform(data));
    }

    /**
     * Update a item price info.
     * @param {number} id - Order item price id.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   price: 12345
     * };
     * const data = return this.client.updateItemPrice(1, data);
     */
    updateItemPrice(id, data) {
        return this.client.raw('put', `/ecommerce/item-prices/${id}`, null, this.dataTransform(data));
    }

    /**
     * Delete a item price.
     * @param {number} id - Item price id.
     * @example
     * const data = return this.client.deleteItemPrice(803);
     */
    deleteItemPrice(id) {
        return this.client.raw('delete', `/ecommerce/item-prices/${id}`);
    }
}

export default ItemPrices;
