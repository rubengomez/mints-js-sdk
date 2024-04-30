import ObjectActivities from "./objectActivities.js";
import ObjectFolders from "./objectFolders.js";
import UserFolders from "./userFolders.js";
import assignMethods from "../../helpers/mixin.js";

class helpers {
}

const allInstances = [
    new ObjectActivities,
    new ObjectFolders,
    new UserFolders
];
assignMethods(allInstances, helpers);
export default helpers;