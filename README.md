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
