# 🏨 Hotel San Remo React

Aplicación web desarrollada con **React** y **Vite**.  
El proyecto implementa un sitio moderno y modular con componentes reutilizables, páginas principales y una organización clara de datos y estilos con Tailwindcss.

Proyecto académico realizado por Lucía Ayelén Farrapeira como parte de la carrera *Diplomatura Universitaria En Desarrollo Web Full Stack* en UADE

---
## Autora


**Lucía Ayelen Farrapeira**  
📍 San Clemente del Tuyú, Buenos Aires
🎓 Diplomatura Universitaria En Desarrollo Web Full Stack– UADE Academy
📅 Año: 2025


## 📂 Estructura del proyecto

```
public/              # Recursos públicos accesibles por URL
 └── img/            # Imágenes globales
src/
 ├── assets/         # Recursos estáticos (íconos, imágenes internas)
 ├── components/     # Componentes reutilizables (Footer, Menu, Botones, etc.)
 ├── contexts/            # Contextos globales (AuthContext)
 ├── data/           # Datos en formato JS (fotos, habitaciones, promociones)
 ├── hooks/               # Hooks personalizados (useHabitaciones)
 ├── pages/          # Páginas principales del sitio (Inicio, Contacto, etc.)
 ├── App.jsx         # Componente raíz de la aplicación
 ├── index.css       # Estilos globales
 └── main.jsx        # Punto de entrada de la app
.gitignore           # Configuración de archivos ignorados en Git
index.html           # Plantilla base HTML
package.json         # Dependencias y scripts del proyecto
vite.config.js       # Configuración de Vite
```

## 🧱 Tecnologías utilizadas

-⚛️ React

-⚡ Vite

-🎨 TailwindCSS

-📜 JavaScript (ES6+)

-🗂️ React Router (para navegación entre páginas)

-🔐 Context API (para autenticación y estados globales)


## 🖼️ Páginas principales

- Inicio — Presentación del hotel.

- Habitaciones — Listado de habitaciones disponibles.

- Habitación Detalle — Información individual con foto y precio.

- Promociones — Ofertas y descuentos actuales.

- Servicios — Servicios ofrecidos por el hotel.

- Contacto — Formulario para enviar consultas.

- Ubicación — Dirección del hotel y mapa.

- Panel Admin (HabitacionAdmin) — Gestión de habitaciones (CRUD).

- Login / Logout — Acceso de administración mediante JWT.

- NotFound — Página 404 personalizada.

## 🚀 Funcionalidades principales

✔️ Navegación completa con React Router

✔️ Diseño 100% responsive gracias a TailwindCSS

✔️ Listado de habitaciones conectado a la API

✔️ Vista detallada por habitación

✔️ CRUD de habitaciones (solo administración)

✔️ Autenticación con JWT + Context API

✔️ ProtectedRoute para proteger panel admin

✔️ Formulario de contacto

✔️ Sección de promociones y servicios

✔️ Menú móvil responsivo

✔️ Footer institucional con enlaces

✔️ Datos cargados dinámicamente desde backend + archivos locales


🚀 Deploy

🔗 Deploy: https://hotelsanrem.netlify.app/
