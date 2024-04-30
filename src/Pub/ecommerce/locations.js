class PublicLocations {
    /**
     * Get all locations.
     * @param {Object} options - List of resource collection options.
     * @param {boolean} usePost - Variable to determine if the request is by 'post' or 'get' functions.
     */
    async getLocations(options = null, usePost = true) {
        return this.getQueryResults('/ecommerce/locations', options, usePost);
    }
}

export default PublicLocations;