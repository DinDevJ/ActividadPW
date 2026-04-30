# Nota Teórica: Diferencias en la Arquitectura Web

## 1. Programación del lado del cliente (Frontend)
Es el código que se ejecuta directamente en el **navegador web** del usuario.

- **Tecnologías utilizadas:** HTML, CSS, JavaScript.
- **¿Qué hace?** Se encarga de todo lo que el usuario ve e interactúa: botones, menús, animaciones, formularios visuales y la estructura de la página.
- **Ejemplo en este proyecto:** El archivo `main.js` construye toda la interfaz usando `document.createElement()` y `element.appendChild()`. El navegador ejecuta este código localmente sin necesidad de pedirle nada al servidor después de la carga inicial.
- **Limitación principal:** El código fuente es visible para cualquier usuario (se puede ver con "Inspeccionar elemento"), por lo que nunca se deben manejar contraseñas ni lógica de negocio sensible aquí.

## 2. Programación del lado del servidor (Backend)
Es el código que se ejecuta en el **servidor** donde está alojada la aplicación.

- **Tecnologías utilizadas:** Python con Django, Java con JSP, PHP, Node.js, entre otros.
- **¿Qué hace?** Procesa la lógica de negocio, la autenticación de usuarios, las operaciones con la base de datos y decide qué información enviarle al cliente.
- **Ejemplo en este proyecto:** El archivo `views.py` de Django recibe las peticiones HTTP del navegador, consulta los datos necesarios y devuelve la plantilla HTML correspondiente. Por ejemplo, la función `agregar_bd()` recibe los datos del formulario, los valida y los guarda en la base de datos.
- **Ventaja principal:** El usuario final nunca ve este código, lo que permite proteger la lógica de negocio y las credenciales de acceso a la base de datos.

## 3. Almacenamiento local (LocalStorage / SessionStorage / Cookies)
Es una forma de guardar información **dentro del navegador** del usuario.

- **Tecnologías utilizadas:** API de Web Storage (localStorage, sessionStorage) y Cookies del navegador.
- **¿Qué hace?** Permite guardar datos temporales como preferencias del usuario (modo oscuro/claro), tokens de sesión o información de un carrito de compras sin necesidad de un servidor.
- **Ejemplo en este proyecto:** En la Actividad 2 se utilizan las sesiones de Django (`request.session`) para mantener los servicios agregados por el usuario entre recargas de página. Esto funciona de forma similar al localStorage pero gestionado por el servidor.
- **Limitación principal:** La capacidad es limitada (generalmente 5MB para localStorage), los datos pueden perderse si el usuario limpia su historial, y no es apropiado para información que deba persistir a largo plazo o compartirse entre dispositivos.

## 4. Orígenes de datos (Bases de datos)
Son sistemas diseñados para almacenar **grandes volúmenes** de información de forma estructurada y permanente, generalmente ubicados del lado del servidor.

- **Tecnologías utilizadas:** MySQL, PostgreSQL, SQLite, MongoDB.
- **¿Qué hace?** Almacena de forma persistente toda la información crítica de la aplicación: usuarios, productos, servicios, transacciones, etc. Permite realizar consultas complejas, relaciones entre tablas y respaldos automáticos.
- **Ejemplo en este proyecto:** En la Actividad 3 se configuró una base de datos **MySQL** (nombre: `pw`) conectada a Django a través del ORM. El modelo `Servicios` en `models.py` define la estructura de la tabla, y Django se encarga de traducir las operaciones de Python a consultas SQL automáticamente.
- **Ventaja principal:** Los datos no dependen del navegador del usuario; cualquier persona puede acceder a la misma información desde cualquier dispositivo, y la información se mantiene segura y respaldada en el servidor.

## Resumen comparativo

| Concepto | ¿Dónde se ejecuta? | ¿Quién ve el código? | Persistencia | Ejemplo en el proyecto |
|---|---|---|---|---|
| Frontend (Cliente) | Navegador del usuario | El usuario puede verlo | No persiste datos por sí solo | `main.js`, `styles.css` |
| Backend (Servidor) | Servidor web | Oculto al usuario | Depende de la configuración | `views.py`, `urls.py` |
| Almacenamiento local | Navegador del usuario | Solo el usuario local | Temporal, se borra al limpiar historial | `request.session` en Django |
| Base de datos | Servidor de BD | Solo el administrador | Permanente y respaldable | MySQL con modelo `Servicios` |
