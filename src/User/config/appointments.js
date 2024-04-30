class Appointments {
  getAppointments(options = null) {
    return this.client.raw('get', '/config/appointments', options);
  }

  getAppointment(id, options = null) {
    return this.client.raw('get', `/config/appointments/${id}`, options);
  }

  createAppointment(data) {
    return this.client.raw('post', '/config/appointments', null, this.dataTransform(data));
  }

  updateAppointment(id, data) {
    return this.client.raw('put', `/config/appointments/${id}`, null, this.dataTransform(data));
  }

  deleteAppointment(id) {
    return this.client.raw('delete', `/config/appointments/${id}`);
  }

  scheduledAppointments(data) {
    return this.client.raw('post', '/config/appointments/scheduled-appointments', null, this.dataTransform(data));
  }

  rescheduleAppointment(data) {
    return this.client.raw('post', '/config/appointments/reschedule-appointment', null, this.dataTransform(data));
  }

  attachInvitee(data) {
    return this.client.raw('post', '/config/appointments/attach-invitee', null, this.dataTransform(data));
  }

  attachFollower(data) {
    return this.client.raw('post', '/config/appointments/attach-follower', null, this.dataTransform(data));
  }

  detachInvitee(data) {
    return this.client.raw('post', '/config/appointments/detach-invitee', null, this.dataTransform(data));
  }

  detachFollower(data) {
    return this.client.raw('post', '/config/appointments/detach-follower', null, this.dataTransform(data));
  }

  syncInvitee(data) {
    return this.client.raw('post', '/config/appointments/sync-invitee', null, this.dataTransform(data));
  }

  syncFollower(data) {
    return this.client.raw('post', '/config/appointments/sync-follower', null, this.dataTransform(data));
  }
}

export default Appointments;