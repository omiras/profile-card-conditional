## Preguntas previas antes de comenzar a codificar

- LEE TODO EL DOCUMENTO README antes de empezar a porgramar nada. Intenta entender todas las partes que conforman este ejercicio.
- ANTES de empezar a programar, contesta a las siguientes preguntas (que encontrarás en este documento)
  1. ¿Qué contiene la variable _variables_?
  Es un objeto que contiene 13 propiedades.

  2. ¿Cómo puedo mostrar el valor de la variable anterior por consola en el navegador Web?
  escribiendo variables intro y ya esta
  3. ¿De que **tipo** es la variable _variables_?
  es un objeto
  4. ¿Cuál es la ÚNICA función que me permiten tocar en este código?
  render
  5. ¿Has visto el vídeo de cómo hacer el ejercicio?
  lo he visto
  6. Si puedes contestar a todas las preguntas anteriores, ve al a última parte del documento: Ejercicio y evlauación

# Tarjeta de Perfil Condicional

Como desarrollador web, estarás creando muchos HTML dinámicos + CSS usando algoritmos de Javascript. Además, muchas veces no vas a poder tocar todo el código a tu antojo, si no que tendrás que confiar en los datos que te llegan y manejarlos de la mejor manera posible para conseguir tus objetivos.

En este ejercicio, debes crear el código HTML necesario para representar una tarjeta de perfil. El código final cambiará en tiempo de ejecución. En función de una serie de variables que podrían cambiar.

![Conditional Profile Card](https://github.com/breatheco-de/exercise-conditional-profile-card/raw/master/preview.gif?raw=true)

1. Dentro de `src/app.js` hay una función llamada `render` que recibe un objeto `variables`.
2. Este objeto `variables` contiene todos los valores asignados en el formulario de la aplicación (redes sociales, nombre y apellido; etc.).
3. La función `render tiene la lógica necesaria para recibir los valores del objeto `variables`e incluirlos dentro del HTML de la página utilizando`innerHTML`.

```js
function render(variables = {}) {
  document.querySelector(
    "#widget_content"
  ).innerHTML = `<div>Website code</div>`;
}
```

Puedes ver el contenido del objeto `variables` en cualquier momento imprimiendo la variable `variables` en la consola.

```js
console.log(window.variables);
/*
{
    includeCover: true, // if includeCover is true the algorithm should
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
    socialMediaPosition: "left", // social media bar position (left or right)
    
    twitter: null, // social media usernames
    github: "alesanchezr",
    linkedin: null,
    instagram: null,

    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
}
*/
```

## 📝Instrucciones:

Revisa este video con las instrucciones para que entiendas mejor el ejercicio: https://youtu.be/gaVm8eyCqlM

1. Lee y comprende la función `render` y el valor de la variable `variables` que recibe.

2. Cambia el contenido de la función `render` para que renderice todos los valores que llegan a través de `variables` en la tarjeta de perfil.

## Valores de variables iniciales

| Nombre              | Tipo    | Valor por Defecto | Descripción                                                                     |
| ------------------- | ------- | ----------------- | ------------------------------------------------------------------------------- |
| background          | string  | null              | La url de la imagen que se utilizará como fondo para la portada del perfil      |
| includeCover        | boolean | true              | Determina si debe mostrarse la portada o no.                                    |
| avatarURL           | string  | null              | La url para el avatar del perfil                                                |
| socialMediaPosition | string  | "right"           | puede ser `left` o` right` y determina dónde colocar la barra de redes sociales |
| twitter             | string  | null              | El nombre de usuario de Twitter que se mostrará en el perfil.                   |
| github              | string  | null              | El nombre de usuario de Github que se mostrará en el perfil.                    |
| linkedin            | string  | null              | El nombre de usuario de Linkedin que se mostrará en el perfil.                  |
| instagram           | string  | null              | El nombre de usuario de Instagram para ser mostrado en el perfil.               |
| name                | string  | null              | El nombre del usuario que se mostrará en el perfil.                             |
| lastname            | string  | null              | El nombre del usuario que se mostrará en el perfil.                             |
| role                | string  | null              | El nombre del título del trabajo que se mostrará en el perfil.                  |
| country             | string  | null              | El país de residencia del usuario que se mostrará en el perfil.                 |
| city                | string  | null              | La ciudad de residencia del usuario que se mostrará en el perfil.               |

## Ejemplo de HTML codificado

Este es un ejemplo de un posible **resultado** HTML, debes reemplazar:
_name_, //h1
_lastname_, //h1
_role_, //h2
_city_, //h3
_country_, //h3
_social networks_,//ul
_photo_, //img
_background_, //div->img

Con valores reales.

```html
<div class="widget">
  <div class="cover">
    <img src="https://the_url.com/for_the_background.png" />
  </div>
  <img src="https://the_url.com/for_the_image.png" class="photo" />
  <h1>Ryan Boylett</h1>
  <h2>Web Developer</h2>
  <h3>Miami, USA</h3>
  <ul class="position-right">
    <li>
      <a href="https://twitter.com/alesanchezr"
        ><i class="fa fa-twitter"></i
      ></a>
    </li>
    <li>
      <a href="https://github.com/alesanchezr"><i class="fa fa-github"></i></a>
    </li>
    <li>
      <a href="https://linkedin.com/alesanchezr"
        ><i class="fa fa-linkedin"></i
      ></a>
    </li>
    <li>
      <a href="https://instagram.com/alesanchezr"
        ><i class="fa fa-instagram"></i
      ></a>
    </li>
  </ul>
</div>
```

## Ejercicio y evlauación

Completa el ejercicio. Por cada campo que consigas visualizar en la tarjeta se otorgará 1 punto.
Hay 13 campos a completar.

Fíjate que los enlaces a las redes sociales deben funcionar correctamente.

Antes cualquier duda o dar el ejercicio por bueno, consulta con el formador.

¡Buena suerte!
