class DAM {
    getDamLoadTree() {
        return this.client.raw('get', '/content/dam/loadtree');
    }

    getDamAssetLocations(options) {
        return this.client.raw('get', '/content/dam/asset-locations', options);
    }

    pasteDam(data) {
        return this.client.raw('post', '/content/dam/paste', null, data);
    }

    renameDam(data) {
        return this.client.raw('post', '/content/dam/rename', null, data);
    }

    searchDam(data) {
        return this.client.raw('post', '/content/dam/search', null, data);
    }

    sendToTrashDam(data) {
        return this.client.raw('post', '/content/dam/sendToTrash', null, data);
    }

    deleteDam(data) {
        return this.client.raw('post', '/content/dam/delete', null, data);
    }

    createDamFolder(data) {
        return this.client.raw('post', '/content/folders/create', null, data);
    }
}

export default DAM;