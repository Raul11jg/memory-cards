# Memory Cards

🃏 Esta es una aplicación web progresiva basada en el juego de "Memory Cards". En este documento encontrarás las instrucciones para hacer funcionar la aplicación en tu entorno local.

URL🌐: [Memory cards](https://memory-cards-ten.vercel.app/)

## Stack Tecnológico

El stack tecnológico utilizado en esta aplicación incluye:

- React.js 🌐: Biblioteca de JavaScript utilizada para construir la interfaz de usuario.
- React Router 🛣️: Librería de enrutamiento utilizada para manejar la navegación entre las diferentes vistas de la aplicación.
- Vite ⚡: Herramienta de construcción y desarrollo rápida para aplicaciones web modernas.
- FontAwesome 🎨: Biblioteca de iconos utilizada para añadir iconos a la aplicación.
- Vitest 🧪: Framework de pruebas unitarias utilizado para realizar pruebas en la aplicación.
- ESLint 🔍: Herramienta de linting utilizada para mantener un código limpio y consistente.
- Prettier 🎨: Formateador de código utilizado para mantener un estilo consistente en el código fuente.
- Vite Plugin PWA 📱: Plugin utilizado para convertir la aplicación en una PWA (Progressive Web App) y agregar funcionalidades offline.

## Instalación

📥 Sigue estos pasos para instalar y ejecutar la aplicación en tu máquina local:

Clona el repositorio de la aplicación desde [memory-cards](https://github.com/Raul11jg/memory-cards).
Asegúrate de tener Node.js instalado en tu máquina.
Abre una terminal y navega hasta el directorio raíz del proyecto.
Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install

```

Una vez que las dependencias estén instaladas, puedes ejecutar el siguiente comando para iniciar la aplicación en modo de desarrollo:

```bash
npm run dev

```

La aplicación se ejecutará en tu navegador en la dirección http://127.0.0.1:5173/

## Uso de la aplicación

La aplicación Memory Cards consta de dos vistas principales: "Home" y "Game".

### Vista "Home"

En la vista "Home", puedes introducir tu nombre de usuario y comenzar el juego. Sigue estos pasos:

Abre la aplicación en tu navegador.
En la vista "Home", ingresa tu nombre de usuario en el campo de texto proporcionado.
Asegúrate de ingresar un nombre de usuario válido.
Haz clic en el botón "Jugar" para comenzar.

### Vista "Game"

En la vista "Game", se mostrará tu nombre de usuario, los puntos que has obtenido y la selección de nivel de dificultad. Sigue estos pasos:

1. Después de iniciar el juego en la vista "Home", serás redirigido/a a la vista "Game".
2. En la vista "Game", se mostrará tu nombre de usuario y los puntos acumulados.
3. Selecciona el nivel de dificultad deseado: "Bajo", "Medio" o "Alto".
4. Haz clic en el botón "Play" para empezar.
   Durante el juego, se mostrarán 9 cuadros con números del 1 al 9 en posiciones aleatorias. Dependiendo del nivel de dificultad seleccionado, los números serán visibles durante un cierto tiempo:

- Nivel de dificultad "Bajo": 10 segundos.⌛⌛⌛
- Nivel de dificultad "Medio": 5 segundos.⌛⌛
- Nivel de dificultad "Alto": 2 segundos.⌛

  Después de que el tiempo haya transcurrido, los números desaparecerán y deberás seleccionar la posición correcta del número que se te pida. Si aciertas, la casilla se marcará en verde ✅, se actualizarán tus puntos y el juego generará nuevos números. Si fallas, la casilla mostrará el número en rojo ❌ y la partida terminará.

### Funcionalidades adicionales

Además de las funcionalidades descritas anteriormente, se han implementado las siguientes mejoras en la aplicación:

- La aplicación funciona offline. Puedes acceder a ella sin conexión después de haberla abierto al menos una vez.
- Se han incluido tests unitarios de las vistas y los componentes de la aplicación.
- Incluir un contador de tiempo que indique los segundos restantes para visualizar los números ⏲️.
- Añadir vibración en el dispositivo cada vez que el usuario pierda 📳.

## Repositorio y despliegue

Puedes acceder al código fuente de la aplicación en el siguiente repositorio: [memory-cards repo](https://github.com/Raul11jg/memory-cards).

La aplicación está desplegada con Vercel y disponible públicamente en 🌐 [Memory cards](https://memory-cards-ten.vercel.app/).
