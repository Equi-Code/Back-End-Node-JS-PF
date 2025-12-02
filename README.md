Back-End Node.js — Arquitectura Modular + Firebase + JWT

Este proyecto implementa un API RESTful backend utilizando una arquitectura por capas (Controllers → Services → Models → Data → Routes → Middleware), autenticación con JWT, persistencia en Firebase Firestore, configuración mediante dotenv, servidor Express con CORS habilitado, y deploy listo para Vercel.

---

## 📂 Instalación y ejecución

### 1. Clona el repositorio:
https://github.com/Equi-Code/Back-End-Node-JS-PF.git

### 2. Instala las dependencias:

npm init -y
npm install express cors dotenv firebase jsonwebtoken

Dependencias:
"cors": "^2.8.5"
"dotenv": "^17.2.3"
"express": "^5.1.0"
"firebase": "^12.6.0"
"jsonwebtoken": "^9.0.2"

### 3. Configura las variables de entorno (.env example)

### 4. Inicia el servidor:
npm start

Servidor:
http://localhost:3000

---

## 📁 Arquitectura del Proyecto

root/
 ├── src/
 │   ├── controllers/
 │   ├── services/
 │   ├── models/
 │   ├── routes/
 │   ├── middleware/
 │   ├── data/
 ├── index.js
 ├── .env
 ├── package.json
 └── vercel.json

---

## 📌 API Reference (Endpoints)

POST /auth/register  
POST /auth/login  

Products (Protegidos)
GET /products
GET /products/:id
POST /products
PUT /products/:id
DELETE /products/:id

Authorization: Bearer <token>

---

## 🛠️ Scripts
"start": "node index.js"
"dev": "nodemon index.js"

---

## 🔑 Admin Access
{
 "email": "test@gmail.com",
 "password": "123456"
}

---

## 📦 Variables de Entorno
PORT=3000
JWT_SECRET=your_secret_key
FIREBASE_API_KEY=xxxx
...

---

## 🚀 Deployment (Vercel)
Producción:

El backend está desplegado en Vercel y se actualiza automáticamente desde la rama principal.

🌐 URL de producción:

https://back-end-node-js-pf.vercel.app/

Pasos de despliegue:

Conecta tu repositorio de GitHub a Vercel

Configura las variables de entorno en Vercel

Cada push a main dispara un nuevo deploy

---

## 📩 Uso en Postman
Usar:
http://localhost:3000/api/ o https://back-end-node-js-pf-r7nu.vercel.app/


