class PublicAttributes {
    /**
     * Get Attributes.
     * Get a collection of attributes.
     * @returns {Promise} - A promise that resolves with the attributes data.
     * @example
     * const data = await mintsPub.getAttributes();
     */
    getAttributes() {
        return this.client.raw('get', '/config/attributes');
    }
}

export default PublicAttributes;
