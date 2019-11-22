# formacion-react-basico-16

Formación react básico 16 h

#01 Raw React
Vamos a crear un componente react desde 0 ¡sólo con javaScript!

0. Prerequisito: instalar un servidor http (npm install http-server -g)

1. creamos un html index.html

1. creamos un contenedor (div) en nuestro body en donde añadimos un texto y un identificador único a nuestro contenedor:

```html
<div id="root">Esto no es un componente React</div>
```

3. Añadimos algo de CSS diréctamente en el head del documento

```html
<style>
    body {
      padding: 10px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 18px;
      background-color: #81a69b;
    }
    div {
      padding: 10px;
      background-color: white;
      margin: 5px;
      border: 1px solid darkolivegreen;
    }    
</style>
```

4. Añadimos los scripts de react al final del body (unpkg.com)

```html
<script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
```

5. Probamos a ver si hemos metido bien los javascript (mirar el dev tools y comprobar que no hay ningún 404)

6. Si hemos cargado bien la librería deberíamos poder acceder al objeto React y ReactDOM

7. Añadimos un script para nuestro javascript custom:

```html
<script>
  // Your code is going to go here
</script>
```

8. dentro de la etiqueta script vamos a crearnos un componente react

```javascript

function App() {
  return React.createElement("div", {id:'darth-vader'}, "Yo soy un componente React");
};
```

9. Vale ya tenemos nuestro componente react y ahora necesitamos "renderizarlo"

```javascript
    ReactDOM.render(
        React.createElement(App), 
        document.getElementById("root")
    );
```

10) Bola extra:<br>
Imaginaros que ahora queremos meter otro componente, podríamos:<br>
a) crear otra etiqueta en el HTML con un nuevo identificador <br>
b) añadir otro componente hijo a nuestro componente padre ( las matrioskas)

