class Relationships {
  getRelationshipsAvailableFor(options) {
    return this.client.raw('get', '/config/relationships/available-for', options);
  }

  attachRelationship(data) {
    // FIXME: Method doesn't work, RelationshipManager cannot access to id attribute.
    return this.client.raw('post', '/config/relationships/attach', null, this.dataTransform(data));
  }

  detachRelationship(data) {
    // FIXME: Method doesn't work, RelationshipManager cannot access to id attribute.
    return this.client.raw('post', '/config/relationships/detach', null, this.dataTransform(data));
  }

  relationshipHasObjects(id) {
    return this.client.raw('get', `/config/relationships/${id}/hasObjects`);
  }

  getRelationships(options = null) {
    return this.client.raw('get', '/config/relationships', options);
  }

  getRelationship(id, options = null) {
    return this.client.raw('get', `/config/relationships/${id}`, options);
  }

  createRelationship(data) {
    return this.client.raw('post', '/config/relationships', null, this.dataTransform(data));
  }

  updateRelationship(id, data) {
    return this.client.raw('put', `/config/relationships/${id}`, null, this.dataTransform(data));
  }

  deleteRelationship(id) {
    return this.client.raw('delete', `/config/relationships/${id}`);
  }
}

export default Relationships;