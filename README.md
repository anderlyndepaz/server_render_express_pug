# server_render_express_pug

🎬 Proyecto Buscador de Películas
Este proyecto es una aplicación web que permite buscar información sobre películas utilizando un formulario para ingresar el título. La aplicación fue desarrollada con Express y Pug para renderizar las vistas de manera dinámica.

🛠️ Tecnologías utilizadas
Node.js: Entorno de ejecución para JavaScript en el backend.

Express: Framework minimalista para la creación de aplicaciones web.

Pug: Motor de plantillas que facilita la creación de vistas HTML dinámicas.

Render: Servicio de hosting donde está desplegada la aplicación.


🚀 Funcionalidades
Búsqueda de películas: Permite a los usuarios buscar información de películas a través de un formulario.
Renderizado dinámico: Las vistas se actualizan de acuerdo con los resultados de la búsqueda.


📦 Instalación
Clona el repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/anderlyndepaz/server_render_express_pug.git

Navega a la carpeta del proyecto:

bash
Copiar código
cd nombre-del-proyecto
Instala las dependencias del proyecto:

bash
Copiar código
npm install
🚀 Ejecución del proyecto en local
Inicia el servidor en modo desarrollo:

bash
Copiar código
npm run dev
Abre tu navegador y navega a http://localhost:3000/home para ver la aplicación en funcionamiento.

📂 Estructura del proyecto

/views: Contiene las plantillas Pug que generan el HTML de la aplicación.

/routes: Contiene las rutas de la aplicación, incluidas las rutas de búsqueda de películas.

app.js: Configuración principal de Express y middlewares.


🌐 Endpoints principales

Método	Ruta	Descripción
GET	/home	Página principal con formulario de búsqueda
📄 Ejemplo de una plantilla Pug
Ejemplo de una plantilla Pug en el proyecto:

pug
Copiar código
//- views/home.pug
doctype html
html
  head
    title Buscador de Películas
    link(rel="stylesheet", href="/public/styles.css")
  body
    h1 Busca tu película favorita 🎥
    form(action="/search" method="GET")
      input(type="text" name="title" placeholder="Título de la película")
      button(type="submit") Buscar


🤝 Contribuir

Haz un fork del repositorio 🍴.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad) 🌿.

Haz commit de tus cambios (git commit -am 'Agrega nueva funcionalidad') 📌.

Haz push a la rama (git push origin feature/nueva-funcionalidad) 🚀.
Abre un Pull Request 🔄.


📜 Licencia

Este proyecto está bajo la licencia MIT.