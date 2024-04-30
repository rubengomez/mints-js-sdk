import assignMethods from "../../helpers/mixin.js";

import Conversations from "./conversations.js";

class Contact {
}

const allInstances = [
    new Conversations
];

assignMethods(allInstances, Contact);

export default Contact;