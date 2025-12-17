# 🌊 Oceans Stack

Aplicación web full-stack para la gestión de órdenes en un restaurante.  
Permite crear productos, generar órdenes y ver un dashboard de todas las órdenes.

---

## 📦 Tecnologías

**Frontend:**
- React 18 + JavaScript
- TailwindCSS
- Vite
- React Hook Form / Yup para validaciones
- Vercel para despliegue

**Backend:**
- NestJS + TypeScript
- TypeORM
- PostgreSQL
- Swagger (documentación de API)
- Render para despliegue

**Extras:**
- CORS configurado para producción y desarrollo
- Mensajes tipo toast
- Componentes reutilizables

---

## 🛠️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/JonhatanCorona/oceansstack.git
```

### Backend

```bash
cd oceansstack-back
npm install
```

Crea un archivo .env en oceansstack-back con tus variables de entorno:

```bash
DATABASE_URL=postgres://usuario:password@host:puerto/db_name
PORT=3004
```

Levanta el backend:

```bash
npm run start:dev
```
La API estará disponible en http://localhost:3004.

### Frontend

```bash
cd oceansstack--front
npm install
```

Crea un archivo .env en oceansstack-back con tus variables de entorno:

```bash
VITE_API_URL=http://localhost:3004
```

Levanta el frontend en desarrollo:

```bash
npm run dev
```
La app estará disponible en http://localhost:5173.

## 🚀 Despliegue

### Backend
- Deploy en Render
- Configura las variables de entorno y la URL de la base de datos (`DATABASE_URL`)
- Habilita CORS para tu frontend desplegado

### Frontend
- Deploy en Vercel
- Configura la variable de entorno `VITE_API_URL` apuntando a tu backend en producción

---

## 🔧 API Endpoints

### Productos

| Método | Ruta       | Descripción                |
|--------|-----------|----------------------------|
| GET    | /products | Obtener todos los productos|
| POST   | /products | Crear un nuevo producto    |

**Ejemplo POST body:**

```json
{
  "name": "Hamburguesa",
  "price": 12.99
}
```

### Ordenes

| Método | Ruta       | Descripción                |
|--------|-----------|----------------------------|
| GET    | /orders | Obtener todos las ordenes   |
| POST   | /orders | Crear una nueva orden      |

**Ejemplo POST body:**

```json
{
  "products": [
    { "id": 3 },
    { "id": 5 }
  ]
}
```

## 🎨 Funcionalidades
- Crear productos con validación
- Crear órdenes seleccionando productos
- Visualizar total de la orden en tiempo real
- Dashboard con todas las órdenes
- Mensajes tipo toast para errores y confirmaciones
- Diseño responsivo con TailwindCSS

## 📄 Documentación
- Swagger disponible en el backend: `/api` (si habilitado)
- Postman collection puede ser exportada para pruebas

## 📌 Notas
- En desarrollo, CORS permite `localhost:5173`.
- En producción, CORS debe permitir tu dominio de Vercel (`https://oceansstack.vercel.app`).
- Backend y base de datos desplegados en Render, frontend en Vercel.
- TypeScript usado en todo el backend para mayor mantenibilidad.

## 👤 Autor
Jonhatan Corona


