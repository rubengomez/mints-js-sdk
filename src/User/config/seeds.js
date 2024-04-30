class Seeds {
  applySeeds(data, async = false) {
    let url = '/config/seeds';
    url = async ? `${url}?async` : url;
    return this.client.raw('post', url, null, data);
  }

  getSeedProcesses(options = null) {
    return this.client.raw('post', '/config/seed-processes', options);
  }

  getSeedProcess(id, options = null) {
    return this.client.raw('get', `/config/seed-processes/${id}`, options);
  }
}

export default Seeds;