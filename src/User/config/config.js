import assignMethods from "../../helpers/mixin.js";

import ApiKeys from "./apiKeys.js";
import Appointments from "./appointments.js";
import AttributeGroups from "./attributeGroups.js";
import Attributes from "./attributes.js";
import Calendars from "./calendars.js";
import ExportConfiguration from "./exportConfiguration.js";
import Exports from "./exports.js";
import PublicFolders from "./publicFolders.js";
import Relationships from "./relationships.js";
import Roles from "./roles.js";
import Seeds from "./seeds.js";
import SystemSettings from "./systemSettings.js";
import Tags from "./tags.js";
import Taxonomies from "./taxonomies.js";
import Teams from "./teams.js";
import Users from "./users.js";

class Config {
}

const allInstances = [
    new ApiKeys,
    new Appointments,
    new AttributeGroups,
    new Attributes,
    new Calendars,
    new ExportConfiguration,
    new Exports,
    new PublicFolders,
    new Relationships,
    new Roles,
    new Seeds,
    new SystemSettings,
    new Tags,
    new Taxonomies,
    new Teams,
    new Users
];

assignMethods(allInstances, Config);

export default Config;