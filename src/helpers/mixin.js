const assignMethods = (instances, targetClass) => {
    instances.forEach((Class) => {
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(Class));
        methods.forEach((method) => {
            if (method !== 'constructor') targetClass.prototype[method] = Class[method];
        });
    });
};

export default assignMethods;