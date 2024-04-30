class OrderStatuses {


    getOrderStatuses() {
        return this.client.raw('get', '/ecommerce/order-statuses');
    }

    getOrderStatus(id) {
        return this.client.raw('get', `/ecommerce/order-statuses/${id}`);
    }
}

export default OrderStatuses;