# formacion-react-basico-16
Formación react básico 16 h

#React router

* Nos creamos una nueva aplicación que se llama menu

npx create-react-app menu



* nos borramos todo lo que tenemos dentro de App y dejamos sólo el primer <div> y dentro del div creamos una lista <ul> que contendrá 3 enlaces y un hr para separar


```html
<div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Acerca de </a>
          </li>
          <li>
            <a href="/help">Ayuda</a>
          </li>
        </ul>
</div>
        <hr /> 
```
 * Aplicamos estos estilos:
 
```css
ul {
  list-style: none;
}

li {
  display: inline-block;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px;
}
```

* debajo de la lista deberíamos poner las 3 páginas que serán 3 componentes, los vamos a llamar Home, About, Help

La idea es que pinchando en cada uno de los enlaces nos muestre sólo uno de los componentes, podemos pensar que cada componente es una página

NOTA: esto sería con un switch

* Para utilizar el router tenemos que instalar el paquete ` npm i react-router-dom`

* importamos los siguientes objetos del paquete:

```javascript

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
```

1) Router es un componente que engloba toda la aplicación
2) el componente Link hace las veces de Anchor (etiqueta a)
    `<Link to="/">Home</Link>`
3) El componente Switch hace de switch entre los componentes y utiliza el componente Route