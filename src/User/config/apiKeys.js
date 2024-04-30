class ApiKeys {
  getApiKeys(options = null) {
    return this.client.raw('get', '/config/api-keys', options);
  }

  getApiKey(id, options = null) {
    return this.client.raw('get', `/config/api-keys/${id}`, options);
  }

  createApiKey(data) {
    return this.client.raw('post', '/config/api-keys', null, this.dataTransform(data));
  }

  deleteApiKey(id) {
    return this.client.raw('delete', `/config/api-keys/${id}`);
  }
}

export default ApiKeys;