class ExportConfiguration {
  getExportConfigurations(options = null) {
    return this.client.raw('get', '/config/export-configurations', options);
  }

  getExportConfiguration(id) {
    return this.client.raw('get', `/config/export-configurations/${id}`);
  }

  createExportConfiguration(data) {
    return this.client.raw('post', '/config/export-configurations', null, this.dataTransform(data));
  }

  updateExportConfiguration(id, data) {
    return this.client.raw('put', `/config/export-configurations/${id}`, null, this.dataTransform(data));
  }
}

export default ExportConfiguration;
