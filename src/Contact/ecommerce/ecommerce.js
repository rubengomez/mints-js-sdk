import assignMethods from "../../helpers/mixin.js";

import OrderItems from "./orderItems.js";
import OrderItemsGroups from "./orderItemsGroups.js";
import Orders from "./orders.js";
import Vouchers from "./vouchers.js";

class Ecommerce {
}

const allInstances = [
    new OrderItems,
    new OrderItemsGroups,
    new Orders,
    new Vouchers
];

assignMethods(allInstances, Ecommerce);

export default Ecommerce;