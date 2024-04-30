class ObjectFolders {
  getObjectFolders(options = null) {
    return this.client.raw('get', '/helpers/object-folders', options);
  }

  getObjectFolder(id, options = null) {
    return this.client.raw('get', `/helpers/object-folders/${id}`, options);
  }

  createObjectFolder(data) {
    return this.client.raw('post', '/helpers/object-folders', null, this.dataTransform(data));
  }

  updateObjectFolder(id, data) {
    return this.client.raw('put', `/helpers/object-folders/${id}`, null, this.dataTransform(data));
  }

  deleteObjectFolder(id) {
    return this.client.raw('delete', `/helpers/object-folders/${id}`);
  }
}

export default ObjectFolders;