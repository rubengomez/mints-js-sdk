class Taxonomies {
  syncTaxonomiesForObject(data) {
    return this.client.raw('put', '/config/taxonomies/syncTaxonomiesForObject', null, this.dataTransform(data));
  }

  getTaxonomiesForObject(options) {
    return this.client.raw('get', '/config/taxonomies/getTaxonomiesForObject', options);
  }

  getTaxonomiesSupportData() {
    return this.client.raw('get', '/config/taxonomies/support-data');
  }

  getTaxonomies(options = null, usePost = true) {
    return this.getQueryResults('/config/taxonomies', options, usePost);
  }

  getTaxonomy(id, options = null) {
    return this.client.raw('get', `/config/taxonomies/${id}`, options);
  }

  createTaxonomy(data, options = null) {
    return this.client.raw('post', '/config/taxonomies', options, this.dataTransform(data));
  }

  updateTaxonomy(id, data, options = null) {
    return this.client.raw('put', `/config/taxonomies/${id}`, options, this.dataTransform(data));
  }
}

export default Taxonomies;