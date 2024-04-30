class Profile {
    /**
     * Get contact logged info.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.me(options);
     */
    me(options = null) {
        return this.client.raw('get', '/profile/me', options);
    }

    /**
     * Get preferences of current user logged.
     * @example
     * const data = return this.client.getPreferences();
     */
    getPreferences() {
        return this.client.raw('get', '/profile/preferences');
    }

    /**
     * Create preferences of current user logged with data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   timeZone: 'GMT-5'
     * };
     * const data = return this.client.createPreferences(data);
     */
    createPreferences(data) {
        return this.client.raw('post', '/profile/preferences', null, this.dataTransform(data));
    }

    /**
     * Get preferences using a setting key.
     * @param {string} settingKey - Setting key.
     * @example
     * const data = return this.client.getPreferencesBySettingKey('timeZone');
     */
    getPreferencesBySettingKey(settingKey) {
        return this.client.raw('get', `/profile/preferences/${settingKey}`);
    }

    /**
     * Get a collection of notifications.
     * @param {Object} options - Options for the request.
     * @example
     * const data = return this.client.getNotifications(options);
     */
    getNotifications(options = null) {
        return this.client.raw('get', '/profile/notifications', options);
    }

    /**
     * Read notifications by data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   ids: ['406e9b74-4a9d-42f2-afc6-1587bad6147c', 'a2d9f582-1bdb-4e55-8af0-cd1962eaa88c'],
     *   read: true
     * };
     * const data = return this.client.readNotifications(data);
     */
    readNotifications(data) {
        // TODO: Inform NotificationController.read method has been modified
        // TODO: Method in controller didnt return data
        return this.client.raw('post', '/profile/notifications/read', null, this.dataTransform(data));
    }

    /**
     * Delete notifications by data.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   ids: ['179083e3-3678-4cf6-b75e-5a8b9761245e']
     * };
     * const data = return this.client.deleteNotifications(data);
     */
    deleteNotifications(data) {
        // TODO: Inform NotificationController.delete method has been modified
        // TODO: Method in controller didnt return data
        return this.client.raw('post', '/profile/notifications/delete', null, this.dataTransform(data));
    }
}

export default Profile;