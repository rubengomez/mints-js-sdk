class ContactAppointments {
    /**
     * Get Appointments.
     * Get a collection of appointments.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = this.mintsContact.getAppointments();
     * @example
     * const options = {
     *   fields: 'id, createdAt'
     * };
     * const data = this.mintsContact.getAppointments(options);
     */
    getAppointments(options = null) {
        return this.client.raw('get', '/contacts/appointments', options);
    }

    /**
     * Get Appointment.
     * Get an appointment info.
     * @param {number} id - Appointment id.
     * @param {Object} options - List of Resource Collection Options shown above can be used as parameter.
     * @example
     * const data = this.mintsContact.getAppointment(1);
     * @example
     * const options = {
     *   fields: 'id, createdAt'
     * };
     * const data = this.mintsContact.getAppointment(1, options);
     */
    getAppointment(id, options = null) {
        return this.client.raw('get', `/contacts/appointments/${id}`, options);
    }

    /**
     * Create Appointment.
     * Create an appointment with data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   objectModel: 'products',
     *   objectId: 1,
     *   title: 'New Appointment',
     *   start: '2021-11-25T14:15:00+00:00',
     *   end: '2022-01-01T13:00:00+00:00'
     * };
     * const data = this.mintsContact.createAppointment(data);
     */
    createAppointment(data) {
        return this.client.raw('post', '/contacts/appointments', null, this.dataTransform(data));
    }
}

export default ContactAppointments;
