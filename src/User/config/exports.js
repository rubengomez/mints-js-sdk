class Exports {
  getExports(options = null) {
    return this.client.raw('get', '/config/exports', options);
  }

  getExport(id) {
    return this.client.raw('get', `/config/exports/${id}`);
  }

  createExport(data) {
    return this.client.raw('post', '/config/exports', null, this.dataTransform(data));
  }

  updateExport(id, data) {
    return this.client.raw('put', `/config/exports/${id}`, null, this.dataTransform(data));
  }
}

export default Exports;