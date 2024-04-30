class PublicAssets {
    /**
     * Get Asset Info.
     * Get a description of an Asset.
     * @param {string} slug - It's the string identifier of the asset.
     * @returns {Promise} - A promise that resolves with the asset info data.
     * @example
     * const data = await mintsPub.getAssetInfo("assetSlug");
     */
    async getAssetInfo(slug) {
        return this.client.raw('get', `/content/asset-info/${slug}`);
    }
}

export default PublicAssets;