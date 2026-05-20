# Proyecto Spotify App - Tripleten

¡Hola! Este es el proyecto final de mi aplicación de Spotify. Es una app web interactiva hecha con **React** y **Vite** que se conecta en tiempo real con la API oficial de Spotify para buscar tus canciones y artistas favoritos.

## 🛠️ Tecnologías Usadas

### Frontend

- **React & Vite:** Para armar una estructura limpia, rápida y basada en componentes.
- **React Router Dom:** Para manejar las páginas (`/`, `/about`, `/search-results`) y controlar quién puede entrar a ellas.
- **API de Spotify:** Para conectar la app con el buscador real de música a través de peticiones asíncronas.

### Diseño y Estilos

- **CSS3 (Metodología BEM):** Para que los estilos sean ordenados y fáciles de mantener.
- **Diseño Responsivo:** Se adapta de forma fluida si lo miras desde la compu, una tablet o el celular.
- **Detalles Visuales:** Tipografía _Inter_, botones con efectos modernos e ilustraciones cargadas directamente desde el CSS para que todo se vea premium.

## 🔥 Funcionalidades Clave

- **Búsqueda en Modal:** Un botón genial que abre un modal con el formulario para buscar música.
- **Pantallas de Estado:** Si está cargando verás un _Preloader_, y si algo falla o no encuentra nada, te saldrá un mensaje claro con una ilustración de unDraw.
- **Rutas Protegidas:** Blindamos la página de `/search-results`. Si alguien intenta escribir la URL a mano sin haber buscado nada antes, la app lo regresa automáticamente al Inicio.
- **Memoria Inteligente (`sessionStorage`):** Si estás viendo las canciones y recargas la página, ¡los resultados no se borran! El estado se recarga al instante y no te expulsa de la pantalla.
- **Botón de Nueva Búsqueda:** Cuando no hay resultados, tienes un botón a la mano que te regresa al Inicio para limpiar todo y volver a intentar.

---

## Enlace del proyecto en vivo

[Ver la aplicación desplegada en GitHub Pages](https://alsic05.github.io/spotify-music-explorer-frontend/)

## ✒️ Autor

- **Alejandra Sichaca**
