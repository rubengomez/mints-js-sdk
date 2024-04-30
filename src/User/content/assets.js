class Assets {
    getAssets(options = null, usePost = true) {
        return this.getQueryResults('/content/assets', options, usePost);
    }

    getAsset(id, options = null) {
        return this.client.raw('get', `/content/assets/${id}`, options);
    }

    createAsset(data) {
        return this.client.raw('post', '/content/assets', null, data);
    }

    updateAsset(id, data) {
        return this.client.raw('put', `/content/assets/${id}`, null, data);
    }

    deleteAsset(id) {
        return this.client.raw('delete', `/content/assets/${id}`);
    }

    getAssetLinkInfo(data) {
        return this.client.raw('post', '/content/assets/getLinkInfo', null, data);
    }

    downloadAsset(id) {
        return this.client.raw('get', `/content/assets/download/${id}`);
    }

    getAssetThumbnails(id) {
        return this.client.raw('get', `/content/assets/thumbnails/${id}`);
    }

    getAssetUsage(options) {
        return this.client.raw('get', '/content/assets/usage', options);
    }

    getAssetInfo(options) {
        return this.client.raw('get', '/content/assets/getAssetInfo', options);
    }

    getAssetDocTypes() {
        return this.client.raw('get', '/content/assets/docTypes');
    }

    getAssetPublicRoute() {
        return this.client.raw('get', '/content/assets/publicRoute');
    }

    uploadAsset(data) {
        return this.client.raw('post', '/content/assets/upload', null, data);
    }

    getAssetSizes(options) {
        return this.client.raw('get', '/content/assets/sizes', options);
    }

    getAssetSize(id) {
        return this.client.raw('get', `/content/assets/sizes/${id}`);
    }

    createAssetSize(data) {
        return this.client.raw('post', '/content/assets/sizes', null, data);
    }

    getAssetVariation(id) {
        return this.client.raw('get', `/content/assets/variation/${id}`);
    }

    generateAssetVariation(data) {
        return this.client.raw('post', '/content/assets/generate-asset-variations', null, data);
    }
}

export default Assets;