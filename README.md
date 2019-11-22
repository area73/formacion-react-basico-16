# formacion-react-basico-16

## Lecciones aprendidas

Hemos visto que podemos crear componentes react diréctasmente en una única página html añadiendo las librerías de javascript de react y creando elementos utilizando 2 librerías de react (react y react DOM)

```javascript

function App() {
  return React.createElement("div", {id:'darth-vader'}, "Yo soy un componente React");
};

ReactDOM.render(
        React.createElement(App), 
        document.getElementById("root")
    );
```

## Separando nuestro código y bundelizando

Ahora vamos a crearnos una arquitectura para poder trabajar con nuestros componentes.

NOTA: Esto hacerlo sólo el instructor a modo de ejemplo.

1) vamos a crearnos un html sólo con el contenedor. para hacer esto necesitaríamos: 

    * Sacar el css en un archivo externo
    * crear un paquete de NPM (npm init)
    * Instalamos los paquetes de react en los node_modules `npm i react react-dom`
    * Sacar el javascript custom a un archivo externo (app.js)
    * Incluimos las referencias de los paquetes de rect en nuestro archivo app.js mediante los imports
    * ahora el problema que vamos a tener es que los archivos no están bundelizados (agrupadados y listos para usar en el navegador)
    Para solucionar esto tendremos que utilizar algún tipo de "bundelizador" como webpack , parcels, etc
    * Además deberíamos transformar nuestro javascript para poder ser usado por navegadores "legacy" así wue usaríamos un transpilador como babel.
    * La forma de trabajar con react no va a ser diréctamente escribiendo javascript si no utilizando un super juego de javascript llamado JSX que es muy parecido
    a javascript pero tiene algunas diferencias que nos aydan a poder trabajar con los componenres de forma más sencilla
    * Si además ahora usamos JSX también tendríamos que "transpilar" nuestro JSX en JS y luego en JS "legacy"
    * Cada vez que hicieramos un proyecto tendríamos que configurar un montón e paquetes, así que el equipo de React ha creado  un paquete propio llamado
    [create-react-app](https://github.com/facebook/create-react-app) que nos va a instalar y configurar todas estas cosas de forma automática 
    
    



