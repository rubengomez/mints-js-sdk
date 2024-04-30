import assignMethods from "../../helpers/mixin.js";

import Locations from "./locations.js";
import Orders from "./orders.js";
import ProductVersions from "./productVersions.js";

class Ecommerce {
}

const allInstances = [
    new Locations,
    new Orders,
    new ProductVersions
];

assignMethods(allInstances, Ecommerce);

export default Ecommerce;