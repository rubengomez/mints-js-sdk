# Mints JS SDK

Este SDK te permite interactuar con las instancias de CXF

## Instalación

Puedes instalar este SDK a través de npm:
```bash
npm install mints-js-sdk
```

## Uso básico (Client-side)

Para usar el SDK en el lado del cliente, puedes importar el módulo `mints-js-sdk` y tomar los siguientes objetos:

```javascript
import { mintsUser, mintsPublic, mintsContact } from 'mints-js-sdk';
```

A continuacion ya puedes hacer uso de los métodos disponibles en cada uno de los objetos.
Ejemplo:

```javascript
mintsPublic.getStoryVersions(null, false)
    .then(data => {
        console.log('mints_public', data)
    }
);
```

### Importante: Para poder hacer uso de los métodos del SDK, es necesario haber inicializado el proxy del lado del servidor.

## Uso básico (Server-side)

### Requerimientos
- Node.js
- Express.js
- Babel

### Instalación de dependencias
```bash
npm install express
npm install @babel/core @babel/node @babel/preset-env
```

### Inicialización
Asegurate de tener las siguientes variables de entorno en tu servidor:
- CXF_HOST
- CXF_API_KEY

### Middleware
Es necesario crear un middleware para poder sincronizar las cookies de sesión con el SDK. Puedes hacerlo de la siguiente manera:

```javascript
import { cookies } from 'mints-js-sdk';

const syncCookiesMiddleware = (req, res, next) => {
  const cookiesToSync = req.cookies;
  cookies.set(cookiesToSync);
  next();
};

export default syncCookiesMiddleware;
```

Ahora en tu archivo de rutas, puedes importar el middleware y usarlo en las rutas que necesites:

```javascript
import express from 'express';
import syncCookiesMiddleware from './middleware/syncCookiesMiddleware';

const router = express.Router();

router.get('/some-route', syncCookiesMiddleware, (req, res) => {
  // Tu lógica aquí
});

export default router;
```

O bien puedes usarlo en tu archivo principal para ejecutarlo en todas las rutas:

```javascript
import express from 'express';
import syncCookiesMiddleware from './middleware/syncCookiesMiddleware';

const app = express();

app.use(syncCookiesMiddleware);

// Tus rutas aquí

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Uso
Para hacer uso del SDK en el lado del servidor, puedes importar los siguientes objetos:
- mintsUser: Para interactuar con los métodos de usuario
- mintsPublic: Para interactuar con los métodos públicos
- mintsContact: Para interactuar con los métodos de contacto
- cookies: Para sincronizar las cookies de sesión (solo disponible en el lado del servidor)
- userAuthHelper: Para acceder a los métodos de autenticación como login y logout (solo disponible en el lado del servidor)
- contactAuthHelper: Para acceder a los métodos de autenticación de contacto (solo disponible en el lado del servidor)

Ejemplo para iniciar sesión con un usuario y contacto en el servidor:

```javascript
import { userAuthHelper, contactAuthHelper, cookies } from 'mints-js-sdk';

// Logica para mantener las cookies sincronizadas a traves del middleware

// Endpoint para iniciar sesión en el usuario
app.get('/set-user', (req, res) => {
    let response = userAuthHelper.mintsUserLogin('usuario@example.com', 'password', res);
    response.then(resp => res.json(resp)); // { response: true }
});

// Endpoint para iniciar sesión en el contacto
app.get('/set-contact', (req, res) => {
    let response = contactAuthHelper.mintsContactLogin('contacto@examploe.com', 'password', res);
    response.then(resp => res.json(resp)); // { response: true }
});
```

## Métodos disponibles
Por el momento la documentacion de los métodos disponibles se encuentra en desarrollo.
Puedes revisar el siguiente link para ver los métodos disponibles en el SDK: [Documentación](https://www.rubydoc.info/gems/mints/0.0.33/)
Los metodos mostrados en el link estan en Ruby, pero los metodos en el SDK son los mismos.
No olvides usar camelCase en lugar de snake_case para los nombres de los métodos.
