import assignMethods from "../../helpers/mixin.js";

import Attributes from "./attributes.js";
import PublicFolders from "./publicFolders.js";
import Tags from "./tags.js";
import Taxonomies from "./taxonomies.js";

class Config {
}

const allInstances = [
    new Attributes,
    new PublicFolders,
    new Tags,
    new Taxonomies
];

assignMethods(allInstances, Config);

export default Config;