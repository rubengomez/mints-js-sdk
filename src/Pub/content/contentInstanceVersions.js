class PublicContentInstanceVersions {
    /**
     * Get Content Instance Versions.
     * Get a collection of content instance versions.
     * @param {Object} options - List of resource collection options.
     * @param {boolean} usePost - Variable to determine if the request is by 'post' or 'get' functions.
     * @returns {Promise} - A promise that resolves with the content instance versions data.
     * @example
     * const data = await mintsPub.getContentInstanceVersions();
     */
    getContentInstanceVersions(options = null, usePost = true) {
        if (!options || (!options.template && !options['template'])) {
            throw new Error(
                'Error 422 | Missing required fields, see the details for more information. Add the template option, example { template: slug }'
            );
        }

        return this.client.raw('get', '/content/content-instance-versions', options);
    }

    /**
     * Get Content Instance Version.
     * Get a single content instance version.
     * @param {string} slug - It's the string identifier generated by Mints.
     * @param {Object} options - List of single resource options.
     * @returns {Promise} - A promise that resolves with the content instance version data.
     * @example
     * const data = await mintsPub.getContentInstanceVersion('contentInstanceVersionSlug');
     */
    getContentInstanceVersion(slug, options = null) {
        return this.client.raw('get', `/content/content-instance-versions/${slug}`, options);
    }
}

export default PublicContentInstanceVersions;