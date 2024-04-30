class Locations {
    /**
     * Get a collection of locations.
     * @param {Object} options - Options for the request.
     * @param {boolean} usePost - Variable to determine if the request is by 'post' or 'get' functions.
     * @example
     * const data = return this.client.getLocations(options, usePost);
     */
    getLocations(options = null, usePost = true) {
        return this.getQueryResults('/ecommerce/locations', options, usePost);
    }

    /**
     * Get a location info.
     * @param {number} id - Location id.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getLocation(2, options);
     */
    getLocation(id, options = null) {
        return this.client.raw('get', `/ecommerce/locations/${id}`, options);
    }

    /**
     * Create a location with data.
     * @param {Object} data - Data to be submitted.
     * @param {Object} options - Options for the request.
     * @example
     * const data = {
     *   title: 'New Location',
     *   locationTemplateId: 1
     * };
     * const data = return this.client.createLocation(data, options);
     */
    createLocation(data, options = null) {
        return this.client.raw('post', '/ecommerce/locations', options, this.dataTransform(data));
    }

    /**
     * Update a location info.
     * @param {number} id - Location id.
     * @param {Object} data - Data to be submitted.
     * @param {Object} options - Options for the request.
     * @example
     * const data = {
     *   title: 'New Location Modified'
     * };
     * const data = return this.client.updateLocation(5, data, options);
     */
    updateLocation(id, data, options = null) {
        return this.client.raw('put', `/ecommerce/locations/${id}`, options, this.dataTransform(data));
    }

    /**
     * Delete a location.
     * @param {number} id - Location id.
     * @example
     * const data = return this.client.deleteLocation(5);
     */
    deleteLocation(id) {
        return this.client.raw('delete', `/ecommerce/locations/${id}`);
    }

    /**
     * Get support data used in a location template.
     * @param {number} id - Location template id.
     * @example
     * const data = return this.client.getLocationTemplateSupportData(1);
     */
    getLocationTemplateSupportData(id) {
        return this.client.raw('get', `/ecommerce/location-templates/${id}/support-data`);
    }

    /**
     * Get support data used in location templates.
     * @example
     * const data = return this.client.getLocationTemplatesSupportData();
     */
    getLocationTemplatesSupportData() {
        return this.client.raw('get', '/ecommerce/location-templates/support-data');
    }

    /**
     * Get a collection of location templates.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getLocationTemplates(options);
     */
    getLocationTemplates(options = null) {
        return this.client.raw('get', '/ecommerce/location-templates', options);
    }

    /**
     * Get a location template info.
     * @param {number} id - Location template id.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getLocationTemplate(1, options);
     */
    getLocationTemplate(id, options = null) {
        return this.client.raw('get', `/ecommerce/location-templates/${id}`, options);
    }

    /**
     * Create a location template with data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   title: 'New Location Template',
     *   slug: 'new-location-template'
     * };
     * const data = return this.client.createLocationTemplate(data);
     */
    createLocationTemplate(data) {
        return this.client.raw('post', '/ecommerce/location-templates', null, this.dataTransform(data));
    }

    /**
     * Update a location template info.
     * @param {number} id - Location template id.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   title: 'New Location Template Modified'
     * };
     * const data = return this.client.updateLocationTemplate(3, data);
     */
    updateLocationTemplate(id, data) {
        return this.client.raw('put', `/ecommerce/location-templates/${id}`, null, this.dataTransform(data));
    }
}

export default Locations;
