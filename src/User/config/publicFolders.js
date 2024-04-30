class PublicFolders {
  syncPublicFoldersForObject(data) {
    return this.client.raw('put', '/config/public-folders/syncPublic-foldersForObject', null, data);
  }

  getPublicFoldersForObject(options) {
    return this.client.raw('get', '/config/public-folders/getPublic-foldersForObject', options);
  }

  getPublicFolders(options = null) {
    return this.client.raw('get', '/config/public-folders', options);
  }

  createPublicFolder(data) {
    return this.client.raw('post', '/config/public-folders', null, data);
  }

  updatePublicFolder(id, data) {
    return this.client.raw('put', `/config/public-folders/${id}`, null, data);
  }

  getPublicFolderSupportData(id) {
    return this.client.raw('get', `/config/public-folders/support-data/${id}`);
  }

  getPublicFolder(id) {
    return this.client.raw('get', `/config/public-folders/${id}`);
  }
}

export default PublicFolders;