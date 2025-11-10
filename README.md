Vista general
Movie es una aplicación que permite buscar películas, ver sus detalles (sinopsis, reparto, calificación, etc.) y guardar favoritas para consultarlas después. Combina un diseño moderno con la fluidez de Ionic y la potencia de Angular.


🗺️Stack técnico


•	Framework: Ionic + Angular

•	Mobile bridge: Capacitor (Android/iOS)

•	Lenguajes: TypeScript, HTML, SCSS

•	API: TMDB (The Movie Database) 


📦  Requisitos

•	Node.js ≥ 18 LTS (recomendado)

•	Ionic CLI: npm i -g @ionic/cli


⚙️Configuración
1.	Clonar el repositorio:
   
git clone https://github.com/samsam-pm/Movie.git

cd Movie

2.	Instalar dependencias:
   
npm install

3.	Configurar la clave de la API de TMDB:
   
Crea el archivo src/environments/environment.ts (y su versión environment.prod.ts) con el siguiente contenido:

export const environment = {
production: false,
TMDB_API_KEY: '<TU_API_KEY_DE_TMDB>',
API_BASE_URL: 'https://api.themoviedb.org/3'
};

🖥️ Desarrollo (web)

ionic serve

La aplicación se abrirá en http://localhost:8100.

✨ Funcionalidades

•	 Búsqueda de películas mediante TMDB API.

•	 Vista de detalle con sinopsis, géneros y puntuaciones.

•	 Favoritos locales, almacenados con Ionic Storage.

•	 Diseño responsivo y nativo en dispositivos móviles.

