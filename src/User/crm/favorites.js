class Favorites {
    updateMultipleFavorites(data) {
        return this.client.raw('put', '/crm/favorites', null, this.dataTransform(data));
    }

    getFavorites(options = null) {
        return this.client.raw('get', '/crm/favorites', options);
    }

    updateFavorites(id, data) {
        return this.client.raw('put', `/crm/favorites/${id}`, null, this.dataTransform(data));
    }
}

export default Favorites;
