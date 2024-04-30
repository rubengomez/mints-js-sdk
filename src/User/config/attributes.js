class Attributes {
  getAttributesDataTypes() {
    return this.client.raw('get', '/config/attributes/data-types');
  }

  getSubAttributes(options) {
    return this.client.raw('get', '/config/attributes/sub-attributes', options);
  }

  getAttributes() {
    return this.client.raw('get', '/config/attributes');
  }

  getAttribute(id) {
    return this.client.raw('get', `/config/attributes/${id}`);
  }

  createAttribute(data) {
    return this.client.raw('post', '/config/attributes', null, this.dataTransform(data));
  }

  updateAttribute(id, data) {
    return this.client.raw('put', `/config/attributes/${id}`, null, this.dataTransform(data));
  }
}

export default Attributes;
