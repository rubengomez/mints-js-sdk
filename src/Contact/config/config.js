import assignMethods from "../../helpers/mixin.js";

import Appointments from "./appointments.js";

class Contact {
}

const allInstances = [
    new Appointments
];

assignMethods(allInstances, Contact);

export default Contact;