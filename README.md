# Mints JS SDK

This SDK allows you to interact with CXF instances

## Installing

You can install this SDK via npm:
```bash
npm install mints-js-sdk
```

## Basic usage (Client-side)

To use the SDK on the client side, you can import the 'mints-js-sdk' module and grab the following objects:

```javascript
import { mintsUser, mintsPublic, mintsContact } from 'mints-js-sdk';
```

You can then make use of the methods available on each of the objects.
Example:

```javascript
mintsPublic.getStoryVersions(null, false)
    .then(data => {
        console.log('mints_public', data)
    }
);
```

### Important: In order to use the SDK methods, you must have initialized the server-side proxy.

## Basic usage (Server-side)

### Requirements
- Node.js
- Express.js
- Babel

### Installing Dependencies
```bash
npm install express
npm install @babel/core @babel/node @babel/preset-env
```

### Initialization
Make sure you have the following environment variables on your server:
- CXF_HOST
- CXF_API_KEY

### Middleware
You need to create middleware to be able to synchronize session cookies with the SDK. Here's how:

```javascript
import { cookies } from 'mints-js-sdk';

const syncCookiesMiddleware = (req, res, next) => {
  const cookiesToSync = req.cookies;
  cookies.set(cookiesToSync);
  next();
};

export default syncCookiesMiddleware;
```

Now in your route file, you can import the middleware and use it on the routes you need:

```javascript
import express from 'express';
import syncCookiesMiddleware from './middleware/syncCookiesMiddleware';

const router = express.Router();

router.get('/some-route', syncCookiesMiddleware, (req, res) => {
  // Logic here
});

export default router;
```

Or you can use it in your main file to run it on all paths:

```javascript
import express from 'express';
import syncCookiesMiddleware from './middleware/syncCookiesMiddleware';

const app = express();

app.use(syncCookiesMiddleware);

// Routes here

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Uso
To make use of the server-side SDK, you can import the following objects:
- mintsUser: To interact with user methods
- mintsPublic: To interact with public methods
- mintsContact: To interact with contact methods
- cookies: To synchronize session cookies (only available on the server side)
- userAuthHelper: To access authentication methods such as login and logout (only available on the server side)
- contactAuthHelper: To access contact authentication methods (only available on the server side)

Example for logging in with a user and contact on the server:

```javascript
import { userAuthHelper, contactAuthHelper, cookies } from 'mints-js-sdk';

// Here add your logic for keeping cookies synchronized across middleware

// Endpoint to log in the user
app.get('/set-user', (req, res) => {
    let response = userAuthHelper.mintsUserLogin('user@example.com', 'password', res);
    response.then(resp => res.json(resp)); // { response: true }
});

// Endpoint to log in the contact
app.get('/set-contact', (req, res) => {
    let response = contactAuthHelper.mintsContactLogin('contact@example.com', 'password', res);
    response.then(resp => res.json(resp)); // { response: true }
});
```
