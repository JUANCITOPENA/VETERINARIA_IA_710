# 🐾 VetDominicana – Portal Web de Clínica Veterinaria

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet_1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](#-licencia)

Plataforma web moderna, adaptable (*responsive*) y accesible desarrollada para **VetDominicana**, una clínica veterinaria integral ubicada en **Herrera, Santo Domingo Oeste, República Dominicana** 🇩🇴.

El proyecto implementa maquetado semántico, diseño UI/UX centrado en el usuario, un carrusel de testimonios con animaciones CSS personalizadas, un mapa interactivo con geolocalización precisa y un formulario con validación en tiempo real que abre el cliente de correo y muestra una ventana modal de confirmación.

> 💡 **Sitio 100 % estático:** no requiere backend, base de datos ni gestores de paquetes (Node/npm).

---

## 📌 Tabla de Contenidos

1. [Características Principales](#-características-principales)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
4. [Paleta de Colores y Tipografía](#-paleta-de-colores-y-tipografía)
5. [Instalación y Configuración Local](#-instalación-y-configuración-local)
6. [Personalización Rápida](#-personalización-rápida)
7. [Guía de Despliegue](#-guía-de-despliegue)
   - [GitHub Pages](#-despliegue-en-github-pages-sin-consola)
   - [Vercel](#-despliegue-en-vercel)
8. [Buenas Prácticas Implementadas](#-buenas-prácticas-implementadas)
9. [Solución de Problemas](#-solución-de-problemas)
10. [Hoja de Ruta](#-hoja-de-ruta)
11. [Autor](#-autor)
12. [Licencia](#-licencia)

---

## 🚀 Características Principales

- 🧭 **Navbar fija inteligente:** menú superior con desplazamiento suave (*smooth scroll*) y cierre automático en dispositivos móviles.
- 🖼️ **Banner Hero de alto impacto:** imagen optimizada a todo el ancho, degradado superpuesto (*overlay*) y botón de llamada a la acción (CTA).
- 🩺 **Catálogo de servicios:** 3 tarjetas interactivas (**Consulta General**, **Cirugías**, **Peluquería & Spa**) con microinteracciones y zoom al pasar el cursor.
- 👩‍⚕️ **Equipo especializado:** perfiles con avatares circulares, insignias de especialidad y tarjetas limpias.
- ⭐ **Carrusel de reseñas (10 clientes):**
  - Vista de 4 tarjetas simultáneas en escritorio.
  - Botones de navegación exteriores e independientes (sin solapamiento visual).
  - Bordes con degradado animado continuo tipo arcoíris.
  - Animación de latido (*heartbeat*) en las fotografías de los clientes.
- 🗺️ **Mapa de localización (Herrera, Santo Domingo Oeste):** mapa **Leaflet** con teselas de OpenStreetMap y marcador temático con *popup* en la sede.
- 📞 **Zona de contacto dominicana:**
  - Enlaces `tel:` directos a números con prefijos locales `(809)` y `(829)`.
  - Botón hacia la API de WhatsApp con mensaje predefinido.
- 📝 **Formulario dinámico:** validación de campos con expresiones regulares (patrón de correo basado en RFC 5322), generación automática del mensaje mediante enlace `mailto:` y confirmación con **ventana modal**.

---

## 📁 Estructura del Proyecto

Arquitectura limpia de tres capas (estructura, presentación y comportamiento):

```text
clinica-veterinaria/
│
├── index.html     # Estructura semántica, accesibilidad y maquetación del DOM
├── style.css      # Variables globales, animaciones, media queries y estilos UI
├── script.js      # Mapa Leaflet, validaciones con Regex y control de modales
└── README.md      # Documentación técnica completa
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología / Recurso | Versión / Fuente | Propósito |
|---|---|---|
| **HTML5** | Estándar W3C | Estructura semántica, metadatos SEO y accesibilidad (ARIA). |
| **CSS3** | Estándar W3C | Maquetación con Flexbox/Grid, animaciones `@keyframes` y variables CSS. |
| **JavaScript (ES6+)** | Vanilla JS | Manipulación del DOM, validación de formularios y manejo de eventos. |
| **Bootstrap** | v5.3.0 (CDN) | Cuadrícula responsiva, navbar colapsable, carrusel y modal. |
| **Font Awesome** | v6.0.0 (CDN) | Iconografía vectorial escalable para servicios, contacto y mapa. |
| **Leaflet** | v1.9.4 (CDN) | Mapa geográfico interactivo y marcador en Herrera. |
| **OpenStreetMap** | Teselas públicas | Capa base cartográfica del mapa. |

---

## 🎨 Paleta de Colores y Tipografía

El archivo `style.css` centraliza los estilos mediante **variables nativas de CSS**:

| Variable | Hex | Vista previa | Aplicación en el sitio |
|---|---|---|---|
| `--color-primary` | `#2C3E50` | ![#2C3E50](https://placehold.co/15x15/2C3E50/2C3E50.png) | Navbar, encabezados, títulos y footer. |
| `--color-secondary` | `#18BC9C` | ![#18BC9C](https://placehold.co/15x15/18BC9C/18BC9C.png) | Botones primarios, divisores e iconos. |
| `--color-accent` | `#F39C12` | ![#F39C12](https://placehold.co/15x15/F39C12/F39C12.png) | Botón CTA, estrellas de valoración y efectos hover. |
| `--color-light` | `#F8F9FA` | ![#F8F9FA](https://placehold.co/15x15/F8F9FA/F8F9FA.png) | Fondos de secciones alternas. |

**Tipografía principal:** `Arial, Helvetica, sans-serif`, con escala jerárquica clara (`display-3`, `h2`, `h4`, `lead`).

---

## 💻 Instalación y Configuración Local

No necesitas entornos pesados ni gestores de paquetes.

### 1️⃣ Obtener los archivos

Clona el repositorio (reemplaza `tu-usuario` por tu usuario de GitHub) o descarga el ZIP:

```bash
git clone https://github.com/tu-usuario/clinica-veterinaria.git
cd clinica-veterinaria
```

### 2️⃣ Abrir con Visual Studio Code

1. Abre **VS Code**.
2. Ve a **File > Open Folder…** y selecciona la carpeta del proyecto.

### 3️⃣ Ejecutar con Live Server

1. Instala la extensión **Live Server** (Ritwick Dey) si no la tienes.
2. Abre `index.html`, haz clic derecho y elige **Open with Live Server**.
3. Se abrirá tu navegador en `http://127.0.0.1:5500`.

> ⚠️ **Importante:** abre el sitio mediante un servidor local (Live Server) y no con doble clic al archivo, para que el mapa y los recursos externos carguen correctamente.

---

## 🧩 Personalización Rápida

| Qué quieres cambiar | Dónde |
|---|---|
| 🎨 Colores del sitio | Variables `:root` en `style.css` |
| 📍 Coordenadas y texto del *popup* del mapa | Inicialización de Leaflet en `script.js` |
| 📱 Números de teléfono y WhatsApp | Enlaces `tel:` y `https://wa.me/` en `index.html` |
| ✉️ Correo destino del formulario | Constante o enlace `mailto:` en `script.js` |
| 💬 Reseñas del carrusel | Sección de testimonios en `index.html` |

**Formato del enlace de WhatsApp** (código de país de RD + número, sin signos ni espacios):

```text
https://wa.me/1809XXXXXXX?text=Hola%20VetDominicana%2C%20quisiera%20agendar%20una%20cita
```

---

## 🌐 Guía de Despliegue

### 🐙 Despliegue en GitHub Pages (sin consola)

1. Ingresa a [GitHub](https://github.com) e inicia sesión.
2. Crea un repositorio **público** llamado `clinica-veterinaria` marcando **Add a README file**.
3. En el repositorio, haz clic en **Add file > Upload files**.
4. Arrastra `index.html`, `style.css` y `script.js` y confirma con **Commit changes**.
5. Ve a **Settings > Pages**.
6. En **Build and deployment > Branch**, selecciona la rama `main` y la carpeta `/(root)`. Presiona **Save**.
7. En 1–2 minutos tu sitio estará disponible en:

```text
https://tu-usuario.github.io/clinica-veterinaria/
```

### ▲ Despliegue en Vercel

1. Ingresa a [Vercel](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. En el *Dashboard*, pulsa **Add New… > Project**.
3. Busca el repositorio `clinica-veterinaria` y presiona **Import**.
4. Deja la configuración predeterminada (*Framework Preset:* **Other**, *Root Directory:* `./`) y haz clic en **Deploy**.
5. En segundos obtendrás un dominio global con SSL:

```text
https://clinica-veterinaria-tu-usuario.vercel.app
```

---

## ✅ Buenas Prácticas Implementadas

### 🔍 SEO On-Page
- Metatags descriptivos (`title`, `description`, Open Graph).
- Atributos `alt` descriptivos en todas las imágenes.
- Jerarquía lógica de encabezados (un único `H1`, luego `H2` y `H3`).

### ♿ Accesibilidad (A11y)
- Contraste tipográfico pensado según las pautas **WCAG 2.1**.
- Etiquetas `aria-label` en botones y controles sin texto visible.
- Navegación operable con teclado en navbar, carrusel y modal.

### ⚡ Rendimiento
- Recursos servidos desde **CDN** de alta disponibilidad, con atributos de integridad (**SRI**) cuando el proveedor los ofrece.
- `scrollWheelZoom` desactivado en el mapa Leaflet para evitar capturar el desplazamiento de la página en móviles.
- Reglas `object-fit: cover` para evitar la distorsión de imágenes en distintas resoluciones.

---

## 🧯 Solución de Problemas

| Problema | Causa probable | Solución |
|---|---|---|
| El mapa aparece en blanco | Falta el CSS de Leaflet o el contenedor no tiene altura | Verifica el `<link>` de Leaflet y define `height` en el contenedor del mapa. |
| Los iconos no se ven | CDN de Font Awesome bloqueado o sin conexión | Revisa la conexión y la URL del CDN. |
| El formulario no abre el correo | No hay cliente de correo predeterminado configurado | Configura uno en tu sistema o usa el botón de WhatsApp. |
| Estilos o scripts no cargan en GitHub Pages | Rutas incorrectas (mayúsculas/minúsculas) | Usa rutas relativas y respeta exactamente los nombres de archivo. |

---

## 🗺️ Hoja de Ruta

- [ ] Envío de formulario con servicio sin backend (Formspree / EmailJS).
- [ ] Sistema de citas en línea.
- [ ] Galería de mascotas atendidas.
- [ ] Versión bilingüe (ES/EN).
- [ ] Modo oscuro opcional.

---

## 👨‍💻 Autor

**Ing. Juancito Peña**
🔗 GitHub: [@JUANCITOPENA](https://github.com/JUANCITOPENA)

Proyecto desarrollado con fines formativos y comerciales para **VetDominicana** 🐶🐱.

---

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Puedes usarlo, adaptarlo y redistribuirlo libremente, tanto en proyectos formativos como comerciales, conservando el aviso de copyright.

```text
MIT License © 2026 Ing. Juancito Peña
```
