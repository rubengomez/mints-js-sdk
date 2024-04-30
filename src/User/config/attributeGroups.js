class AttributeGroups {
  getAttributeGroupsDataTypes() {
    return this.client.raw('get', '/config/attribute-groups/object-types');
  }

  getAttributeGroups(options = null) {
    return this.client.raw('get', '/config/attribute-groups', options);
  }

  getAttributeGroup(id) {
    return this.client.raw('get', `/config/attribute-groups/${id}`);
  }

  createAttributeGroup(data) {
    return this.client.raw('post', '/config/attribute-groups', null, this.dataTransform(data));
  }

  updateAttributeGroup(id, data) {
    return this.client.raw('put', `/config/attribute-groups/${id}`, null, this.dataTransform(data));
  }
}

export default AttributeGroups;