class Users {
  canUsersCoach() {
    return this.client.raw('get', '/config/users/canCoach');
  }

  getUsers(options) {
    return this.client.raw('get', '/config/users', options);
  }

  getUser(id) {
    return this.client.raw('get', `/config/users/${id}`);
  }

  createUser(data, options = null) {
    return this.client.raw('post', '/config/users', options, this.dataTransform(data));
  }

  updateUser(id, data, options = null) {
    return this.client.raw('put', `/config/users/${id}`, options, this.dataTransform(data));
  }
}

export default Users;