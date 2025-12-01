# 📦 Back-End Node.js — Arquitectura Modular + Firebase + JWT

Este proyecto implementa un **API RESTful backend** utilizando una arquitectura por capas (**Controllers → Services → Models → Data → Routes → Middelware **), autenticación con **JWT**, persistencia en **Firebase Firestore**, configuración mediante **dotenv**, servidor Express con **CORS habilitado**, y deploy listo para **Vercel**.

---

## ⚙️ Tecnologías Principales

### Dependencias

```json
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "firebase": "^12.6.0",
    "jsonwebtoken": "^9.0.2"

## Instalación:

📁 Arquitectura del Proyecto

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

🏗️ Arquitectura y Diseño

    Separation of Concerns (SoC)

    Single Responsibility Principle (SRP)

    Controladores sin lógica de negocio

    Services desacoplados de Express

    Capa de datos independiente (Firebase)

    Middleware centralizado para JWT

    Estructura escalable y testeable


🔐 Middleware de Autenticación (JWT)

    const jwt = require("jsonwebtoken");

        module.exports = function (req, res, next) {
        const header = req.headers["authorization"];
        if (!header) return res.status(401).json({ error: "Token requerido" });

        const token = header.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (e) {
            return res.status(403).json({ error: "Token inválido" });
        }
        };

🔥 Conexión a Firebase (Firestore)

    const { initializeApp } = require("firebase/app");
    const { getFirestore } = require("firebase/firestore");

    const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID
    };

    const app = initializeApp(config);
    const db = getFirestore(app);

    module.exports = db;

📌 API Reference (Endpoints)

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

🛠️ Scripts

    "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
    }

Modo desarrollo:

npm run dev

📦 Variables de Entorno (.env)

PORT=3000
JWT_SECRET=your_secret_key

FIREBASE_API_KEY=xxxx
FIREBASE_AUTH_DOMAIN=xxxx
FIREBASE_PROJECT_ID=xxxx
FIREBASE_STORAGE_BUCKET=xxxx
FIREBASE_MESSAGING_SENDER_ID=xxxx
FIREBASE_APP_ID=xxxx



## 📜 Licencia

- Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir! 💻✨
