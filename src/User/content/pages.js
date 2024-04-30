class Pages {
    getPageGroups() {
        return this.client.raw('get', '/content/pages/groups');
    }

    getPages(options = null) {
        return this.client.raw('get', '/content/pages', options);
    }

    getBundles(options = null) {
        return this.client.raw('get', '/content/pages', options);
    }

    getPage(id) {
        return this.client.raw('get', `/content/pages/${id}`);
    }

    createPage(data) {
        return this.client.raw('post', '/content/pages', null, data);
    }

    updatePage(id, data) {
        return this.client.raw('put', `/content/pages/${id}`, null, data);
    }

    deletePage(id) {
        return this.client.raw('delete', `/content/pages/${id}`);
    }
}

export default Pages;