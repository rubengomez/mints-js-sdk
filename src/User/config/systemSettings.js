class SystemSettings {
  getSettingsByKeys(options) {
    return this.client.raw('get', '/config/settings/by-keys', options);
  }

  getSettings() {
    return this.client.raw('get', '/config/settings');
  }

  createSetting(data) {
    return this.client.raw('post', '/config/settings', null, this.dataTransform(data));
  }

  clearTag(tag) {
    return this.client.raw('get', `/config/settings/tags/${tag}/clear`);
  }
}

export default SystemSettings;