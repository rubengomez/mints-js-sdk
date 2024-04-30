import assignMethods from "../../helpers/mixin.js";

import Companies from "./companies.js";
import Contacts from "./contacts.js";
import Deals from "./deals.js";
import Favorites from "./favorites.js";
import Segments from "./segments.js";
import Users from "./users.js";
import Workflows from "./workflows.js";
import WorkflowStepObjects from "./workflowStepObjects.js";
import WorkFlowSteps from "./workflowSteps.js";

class Crm {
}

const allInstances = [
    new Companies,
    new Contacts,
    new Deals,
    new Favorites,
    new Segments,
    new Users,
    new Workflows,
    new WorkflowStepObjects,
    new WorkFlowSteps
];

assignMethods(allInstances, Crm);

export default Crm;