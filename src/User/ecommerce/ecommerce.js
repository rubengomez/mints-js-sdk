import assignMethods from "../../helpers/mixin.js";

import ItemPrices from "./itemPrices.js";
import Locations from "./locations.js";
import OrderItemsGroups from "./orderItemsGroups.js";
import Orders from "./orders.js";
import OrderStatuses from "./orderStatuses.js";
import PriceList from "./priceLists.js";
import Products from "./products.js";
import ProductTemplates from "./productTemplates.js";
import ProductVariations from "./productVariations.js";
import ProductVersions from "./productVersions.js";
import Skus from "./skus.js";
import Taxes from "./taxes.js";
import VariantOptions from "./variantOptions.js";
import VariantValues from "./variantValues.js";
import Vauchers from "./vauchers.js";

class Ecommerce {
}

const allInstances = [
    new ItemPrices,
    new Locations,
    new OrderItemsGroups,
    new Orders,
    new OrderStatuses,
    new PriceList,
    new Products,
    new ProductTemplates,
    new ProductVariations,
    new ProductVersions,
    new Skus,
    new Taxes,
    new VariantOptions,
    new VariantValues,
    new Vauchers
];

assignMethods(allInstances, Ecommerce);
export default Ecommerce;