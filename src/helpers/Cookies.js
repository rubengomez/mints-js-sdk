class Cookies {
    cookies = {};
    constructor() {
        if (!Cookies.instance) {
            Cookies.instance = this;
        }
    }

    set(name, value) {
        if (typeof name !== 'string') {
            this.cookies = { ...this.cookies, ...name };
        } else {
            this.cookies[name] = value;
        }
    }

    get(name) {
        if (name === undefined) return this.cookies;
        return this.cookies[name];
    }

    remove(name) {
        if (name === undefined) {
            this.cookies = {};
        } else {
            delete this.cookies[name];
        }
    }
}

const instance = new Cookies();

export default instance;