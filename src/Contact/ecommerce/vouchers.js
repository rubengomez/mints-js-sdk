class ContactVouchers {
    /**
     * Apply voucher.Contact
     * Apply voucher code to the existing order, only applies to sale orders.
     * @param {number} orderId - Order id.
     * @param {Object} data - Data to be submitted.
     * @example
     * const data = {
     *   description: 'This is the transaction description',
     *   voucherCode: 'XAZWQ12MP'
     * };
     * const data = return this.client.applyVoucher(1, data);
     */
    applyVoucher(orderId, data) {
        return this.client.raw('post', `/ecommerce/orders/${orderId}/voucher`, null, this.dataTransform(data), this.contactV1Url);
    }
}

export default ContactVouchers;
