class UserFolders {
  getUserFolders(options = null) {
    return this.client.raw('get', '/helpers/folders', options);
  }

  getUserFolder(id, options = null) {
    return this.client.raw('get', `/helpers/folders/${id}`, options);
  }

  createUserFolder(data) {
    return this.client.raw('post', '/helpers/folders', null, this.dataTransform(data));
  }

  updateUserFolder(id, data) {
    return this.client.raw('put', `/helpers/folders/${id}`, null, this.dataTransform(data));
  }

  deleteUserFolder(id) {
    return this.client.raw('delete', `/helpers/folders/${id}`);
  }
}

export default UserFolders;