class Users {
    getCrmUsers(options = null) {
        return this.client.raw('get', '/crm/users', options);
    }
}

export default Users;