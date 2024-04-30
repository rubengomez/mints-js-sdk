class Calendars {
  getCalendars(options = null) {
    return this.client.raw('get', '/config/calendars', options);
  }

  getCalendar(id, options = null) {
    return this.client.raw('get', `/config/calendars/${id}`, options);
  }

  createCalendar(data) {
    return this.client.raw('post', '/config/calendars', null, this.dataTransform(data));
  }

  updateCalendar(id, data) {
    return this.client.raw('put', `/config/calendars/${id}`, null, this.dataTransform(data));
  }

  deleteCalendar(id) {
    return this.client.raw('delete', `/config/calendars/${id}`);
  }
}

export default Calendars;
