class Segments {
    getSegmentsSupportData() {
        return this.client.raw('get', '/crm/segments/support-data');
    }

    getSegmentsAttributes(options = null) {
        return this.client.raw('get', '/crm/segments/attributes', options);
    }

    getSegmentGroup(groupId) {
        return this.client.raw('get', `/crm/segments/groups/${groupId}`);
    }

    duplicateSegment(id, data) {
        return this.client.raw('post', `/crm/segments/${id}/duplicate`, null, data);
    }

    getSegments(options = null) {
        return this.client.raw('get', '/crm/segments', options);
    }

    getSegment(id, options = null) {
        return this.client.raw('get', `/crm/segments/${id}`, options);
    }

    createSegment(data) {
        return this.client.raw('post', '/crm/segments', null, this.dataTransform(data));
    }

    updateSegment(id, data) {
        return this.client.raw('put', `/crm/segments/${id}`, null, this.dataTransform(data));
    }

    deleteSegment(id) {
        return this.client.raw('delete', `/crm/segments/${id}`);
    }
}

export default Segments;
