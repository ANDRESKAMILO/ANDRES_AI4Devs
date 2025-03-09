# Resumen de Conclusiones Finales del Proyecto Utilizando la extensión de CodeGpt desde VS Code.

1. Tecnologías Usadas
En el desarrollo de nuestro proyecto "LTI", hemos utilizado las siguientes tecnologías:

Lenguajes de Programación

* JavaScript: Utilizado tanto en el frontend como en el backend para desarrollar la lógica de la aplicación.

* TypeScript: Utilizado para añadir tipado estático a JavaScript, mejorando la calidad del código y facilitando el mantenimiento.

* HTML: Utilizado para estructurar el contenido de las páginas web.

* CSS: Utilizado para estilizar y diseñar las páginas web.

## Frameworks y Librerías

* Node.js: Plataforma de desarrollo que nos permite ejecutar JavaScript en el servidor. Utilizado para construir el backend de la aplicación.

* Express.js: Framework web para Node.js que facilita la creación de APIs y manejo de rutas en el servidor.

* React.js: Librería de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables en el frontend.

* Sequelize: ORM (Object-Relational Mapping) para Node.js que facilita la interacción con la base de datos PostgreSQL mediante modelos y consultas en JavaScript.

* PostgreSQL: Sistema de gestión de bases de datos relacional utilizado para almacenar y gestionar los datos de la aplicación.

* Docker: Plataforma de contenedores que nos permite empaquetar la aplicación y sus dependencias en contenedores, asegurando que se ejecute de manera consistente en cualquier entorno.

## Herramientas de Desarrollo

* Git, GitHub y GuitHub Copilot: Utilizados para el control de versiones y la colaboración en el desarrollo del proyecto.

* Visual Studio Code: Editor de código utilizado para escribir y depurar el código de la aplicación.

* Postman: Herramienta utilizada para probar y depurar las APIs del backend.

2. Partes que Han Dado Más Problemas a la Hora de Implementar

Durante la implementación del proyecto, hemos encontrado algunos desafíos significativos en las siguientes áreas:

* Configuración del Entorno de Desarrollo:

	- Configuración de variables de entorno y manejo de archivos .env.
	
	- Problemas con la instalación y compatibilidad de dependencias en diferentes sistemas operativos.
	
* Integración de Componentes:

	- Integración de frontend y backend, especialmente en la comunicación entre React y Express.
	
	- Manejo de CORS (Cross-Origin Resource Sharing) al realizar peticiones API.
	
* Gestión de Estado en React:

	- Implementación de Redux para la gestión del estado global de la aplicación.
	
	- Sincronización del estado entre diferentes componentes y manejo de efectos secundarios.
	
* Base de Datos:

	- Diseño del esquema de la base de datos y relaciones entre tablas en PostgreSQL.
	
	- Optimización de consultas y manejo de índices para mejorar el rendimiento.
	
3. Cómo las Hemos Resuelto

Para superar los desafíos mencionados, hemos adoptado las siguientes soluciones:

* Configuración del Entorno de Desarrollo:

	- Creación de un archivo .env para gestionar las variables de entorno de manera centralizada.

	- Documentación detallada de los pasos de instalación y configuración para diferentes sistemas operativos.

	- Uso de un archivo **.gitignore** para evitar la inclusión de archivos sensibles y específicos del sistema en el repositorio

* Integración de Componentes:

	- Configuración adecuada de CORS en el servidor Express para permitir peticiones desde el frontend.
	
	- Uso de herramientas como Postman para probar y depurar las APIs antes de integrarlas con el frontend.
	
* Gestión de Estado en React:

	- Implementación de Redux y uso de middleware como Redux Thunk para manejar acciones asíncronas.
	
	- Creación de componentes reutilizables y bien documentados para facilitar la gestión del estado.
	
* Base de Datos:

	- Diseño cuidadoso del esquema de la base de datos y uso de Sequelize para definir modelos y realizar consultas en PostgreSQL.
	
	- Optimización de consultas mediante el uso de índices y técnicas de optimización de SQL.
	
* Docker:

	- Creación de contenedores Docker para asegurar que la aplicación y sus dependencias se ejecuten de manera consistente en cualquier entorno.
	
	- Uso de Docker Compose para orquestar múltiples contenedores y simplificar el despliegue de la aplicación.
	
Hay que reconocer que me cuesta más por mi desconocimiento que poseo en muchos aspectos, pero trabajó a doble jornada para lograr los objetivos. Solo espero terminar con muchos más conocimientos que ojeras. Saludos desde Colombia mis parceros!!!
Por cierto támbien me dio mucha lidia subir el repositorio. Pero con ayuda de GitHub Copilot, lo logramos subir. https://github.com/ANDRESKAMILO/ANDRES_AI4Devs.git
