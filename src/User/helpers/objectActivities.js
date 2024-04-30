class ObjectActivities {
  getObjectActivities(options = null) {
    return this.client.raw('get', '/helpers/object-activities', options);
  }

  getObjectActivity(id, options = null) {
    return this.client.raw('get', `/helpers/object-activities/${id}`, options);
  }

  createObjectActivity(data) {
    return this.client.raw('post', '/helpers/object-activities', null, this.dataTransform(data));
  }

  updateObjectActivity(id, data) {
    return this.client.raw('put', `/helpers/object-activities/${id}`, null, this.dataTransform(data));
  }

  deleteObjectActivity(id) {
    return this.client.raw('delete', `/helpers/object-activities/${id}`);
  }
}

export default ObjectActivities;