class Tags {
  getTags() {
    return this.client.raw('get', '/config/tags');
  }

  getTag(id) {
    return this.client.raw('get', `/config/tags/${id}`);
  }

  createTag(data) {
    return this.client.raw('post', '/config/tags', null, this.dataTransform(data));
  }

  updateTag(id, data) {
    return this.client.raw('put', `/config/tags/${id}`, null, this.dataTransform(data));
  }
}

export default Tags;