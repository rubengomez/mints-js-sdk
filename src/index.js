import MintsUser from './mintsUser.js';
import MintsContact from './mintsContact.js';
import MintsPublic from './mintsPublic.js';
import UserAuthHelper from "./helpers/UserAuthHelper.js";
import ContactAuthHelper from "./helpers/ContactAuthHelper.js";
import dotenv from 'dotenv';
import Cookies from "./helpers/Cookies.js";

let mUser = null;
let mContact = null;
let mPublic = null;
let mCookies = null;
let mUserAuthHelper = null;
let mContactAuthHelper = null;

if (typeof window === 'undefined') {
    try {
        dotenv.config();
        const HOST = process.env.CXF_HOST;
        const API_KEY = process.env.CXF_API_KEY;
        if (!HOST) throw new Error('Mints SDK: CXF_HOST is not defined in your .env file');
        if (!API_KEY) throw new Error('Mints SDK: CXF_API_KEY is not defined in your .env file');

        mUser = new MintsUser(HOST, API_KEY);
        mContact = new MintsContact(HOST, API_KEY);
        mPublic = new MintsPublic(HOST, API_KEY);

        mUserAuthHelper = new UserAuthHelper(mUser);
        mContactAuthHelper = new ContactAuthHelper(mContact);
        mCookies = Cookies;
    } catch (error) {
        console.log('\x1b[31m%s\x1b[0m', error.message);
    }
} else {
    mUser = new MintsUser();
    mContact = new MintsContact();
    mPublic = new MintsPublic();
}

export const mintsUser = mUser;
export const mintsContact = mContact;
export const mintsPublic = mPublic;
export const cookies = mCookies;
export const userAuthHelper = mUserAuthHelper;
export const contactAuthHelper = mContactAuthHelper;