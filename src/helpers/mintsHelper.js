class MintsHelper {
    correctJson(data) {
        if (typeof data === 'string') data = JSON.parse(data)
        return data;
    }

    dataTransform(data) {
        data = this.correctJson(data);
        if (!data?.data) data = {data: data}
        return data;
    }

    async getQueryResults(url, options = null, usePost = true) {
        return usePost ?
            await this.client.raw('post', `${url}/query`, options) :
            await this.client.raw('get', url, options);
    }
}

export default MintsHelper;