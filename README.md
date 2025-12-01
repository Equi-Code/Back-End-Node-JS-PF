📦 Back-End Node.js — Arquitectura Modular + Firebase + JWT

Este proyecto implementa un **API RESTful backend** utilizando una arquitectura por capas (**Controllers → Services → Models → Data → Routes → Middelware **), autenticación con **JWT**, persistencia en **Firebase Firestore**, configuración mediante **dotenv**, servidor Express con **CORS habilitado**, y deploy listo para **Vercel**.

---

## 📂 Instalación y ejecución

1. Clona el repositorio:

    ```sh
    https://github.com/Equi-Code/Back-End-Node-JS-PF.git
    ```
    
2. Instala las dependencias:

    ```sh
    npm init -y 
    npm install express cors dotenv firebase jsonwebtoken
    ```

Dependencias

```json
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "firebase": "^12.6.0",
    "jsonwebtoken": "^9.0.2"

3.Configura las variables de entorno (ejemplo en .env.example).

4.Inicia el servidor:

    ```sh
    npm start
    ```
El servidor se ejecutará en `http://localhost:3000`

---

## 📁 Arquitectura del Proyecto

        root/
        │
        ├── src/
        │   ├── controllers/
        │   │   ├── auth.controllers.js
        │   │   └── products.controllers.js
        │   │
        │   ├── services/
        │   │   └── products.services.js
        │   │
        │   ├── models/
        │   │   └── products.models.js
        │   │
        │   ├── routes/
        │   │   ├── auth.routes.js
        │   │   └── products.routes.js
        │   │
        │   ├── middleware/
        │   │   └── authentication.js
        │   │
        │   ├── data/
        │   │   ├── data.js
        │   │   └── token.js
        │
        ├── index.js
        ├── .env
        ├── package.json
        └── vercel.json

---

## 🏗️ Arquitectura y Diseño

    Separation of Concerns (SoC)

    Single Responsibility Principle (SRP)

    Controladores sin lógica de negocio

    Services desacoplados de Express

    Capa de datos independiente (Firebase)

    Middleware centralizado para JWT

    Estructura escalable y testeable

---


## 📌 API Reference (Endpoints)

    POST /auth/register

        Registra usuario

        Valida datos

        Retorna token JWT

    POST /auth/login

        Autentica usuario

        Devuelve token firmado

Products (Protegidos)

    | Método | Endpoint        | Descripción      |
    | ------ | --------------- | ---------------- |
    | GET    | `/products`     | Listar productos |
    | GET    | `/products/:id` | Obtener por ID   |
    | POST   | `/products`     | Crear producto   |
    | PUT    | `/products/:id` | Actualizar       |
    | DELETE | `/products/:id` | Eliminar         |

Authorization: Bearer <token>

---

## 🛠️ Scripts

    "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
    }

Modo desarrollo:

npm start

---

## 🔑 Admin Access

Para probar endpoints protegidos y funcionalidades de administrador, utiliza estas credenciales predeterminadas:

    {
    "email": "test@gmail.com",
    "password": "123456"
    }

Esta cuenta de administrador tiene permisos completos para:

Crear, leer, actualizar y eliminar productos
Acceder a todos los endpoints protegidos.

---

## 📦 Variables de Entorno (.env)

PORT=3000
JWT_SECRET=your_secret_key

FIREBASE_API_KEY=xxxx
FIREBASE_AUTH_DOMAIN=xxxx
FIREBASE_PROJECT_ID=xxxx
FIREBASE_STORAGE_BUCKET=xxxx
FIREBASE_MESSAGING_SENDER_ID=xxxx
FIREBASE_APP_ID=xxxx

---

## 🚀 Deployment

La aplicación está desplegada en Vercel y se actualiza automáticamente desde la rama principal.

URL de producción: https://back-end-node-js-pf.vercel.app/

    Pasos de despliegue:
    Conecta tu repositorio de GitHub a Vercel
    Configura todas las variables de entorno en el panel de control de Vercel
    Los despliegues se realizan automáticamente al hacer push a la rama principal

---


## 📩 Uso en Postman

Para probar la API en **Postman**, sigue estos pasos:

1. **Abre Postman** y crea una nueva solicitud.
2. **Configura la URL** con `http://localhost:3000/api/` o https://back-end-node-js-pf-r7nu.vercel.app/.
3. **Si es un POST o PUT**, en la pestaña **Body**, selecciona `raw` y elige el formato `JSON`, luego ingresa los datos.
4. **Envía la solicitud** y revisa la respuesta.

También puedes importar una colección de Postman con todas las rutas. 🚀

---

