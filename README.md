# formacion-react-basico-16

## Lecciones aprendidas

* Hemos creado un componente diréctamernte en javascript usando las dos librerías de React (React y React-DOM)
* Hemos separado nuestro código en diferentes ficheros , instalado paquetes con NPM y visto la cantidad de librerías que necesitamos usar en un proyecto React (transpiladores, bundelizadores, servidores, etc)
* Afortunadamente el equipo de react ha creado una librería llamada create-react-app que hace el "trabajo sucio" de configuración por nosotros
* Hemos creado una nueva app y vemos como se utilizan ahora los componentes con JSX
* Hemos creado un componente card
* Hemos creado un componenet dinámico pasándole props

## Añadiendo proipiedades

* Partiendo del ejercicio 06-componente-hijo vamos a crear ahora nuestro componente que pueda hacer una fetch para traerse los datos de forma dinámica
* Metemos la lógica en el componente CardFetch , partir del componente Csrd y migrarlo de función a clase
* Para hacer esto lo primero que deberíamos hacer es convertir nuestra función en una clase
* ¿cómo pasamos ahora los parámetros de las props?
    * La clase tiene un objeto props que se accede desde el render como this.props
    * Por tatno en nuestro caso como hemos llamado a nuestro atributo props, deberíamos acceder de esta forma:  this.props.props ==> objeto que estamos pasando 
* Ahora bien la llamada a un API con fetch devuelve una promesa y tenemos que ver cómo poder trabajar con ella
* En principio el parámetro de entrada ahora debería ser el id del recurso a llamar por ejemplo <CardFetch characterId="1 />
* El fetch lo deberíamos hacer en el componentDidMount() y el resultado guardarlo en el estado
* nuestro componente debería pintar los datos del estado

NOTA: Para hacerlo más interesante y ver los ciclos de vida de react crear el estado :
```javascript
state = {
        data: null
    };
```

* De esta forma al intentar acceder por ejemplo al this.state.data => nos debería devolver un objeto y no podemos devolver un bojeto en react si no una propiedad del objeto
* Cunado intentemos acceder a una de esas propiedades por ejemplo name => this.state.data.name ==> nos va a dar un error porque dice que no puede accceder a una propiedad de un bojeto nulo
Esto se debe a que el renderizado se hace antes de que se resuelva la promesa y nosotros hemos definido en el estado data como nulo
Para solucionar esto tendremos que inicializar nuestro estado a un objeto vacío:
```javascript
state = {
        data: {}
    };
```

De esta forma la primera vez pinta vacío y cuando resuelva la promesa pintará el valor

Utilizar el dev tools y meter un debugger para ver la info


**BOLA EXTRA:** Instalar react developers Tools y Redux y ver los componentes
