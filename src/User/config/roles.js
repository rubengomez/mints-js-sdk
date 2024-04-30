class Roles {
  duplicateRole(id, data) {
    return this.client.raw('post', `/config/roles/${id}/duplicate`, null, data);
  }

  getRoles() {
    return this.client.raw('get', '/config/roles');
  }

  getRole(id) {
    return this.client.raw('get', `/config/roles/${id}`);
  }

  createRole(data) {
    return this.client.raw('post', '/config/roles', null, this.dataTransform(data));
  }

  updateRole(id, data) {
    // FIXME: This action is unauthorized
    // TODO: Research permissions variable type. This would be the error's solution.
    return this.client.raw('put', `/config/roles/${id}`, null, this.dataTransform(data));
  }
}

export default Roles;