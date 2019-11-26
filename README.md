# formacion-react-basico-16


## Creando clases y manejando estado

* Primero vamos a crwarnos un botón conn un número que se lo pasamos en la proipiedad
* Luego vamos a crearnos un onClick del botón
* Como no tenemos estado no podemos pasar el incremento --> nos creamos una clase conestado

* Vamos a crearnos un componente que es un botón que irá incrementando un número cada vez que pinchemos en él
* Para crear un componente de clase de react necesitamos:
    * importar {component} de react
    * crear la clase
    * (Opcional) crear el constructor (donde se le pasa las props y se llama al super)
    * crear un método render que devuelve nuestro componente
    * Cresar un objeto state que será el que se utilice dentro del componente
    * hacer refefrencia al objeto / propiedad del state dentro del componente
    * crear un manejador de eventos para actuar sobre el estado. NOTA: al haceder a un evento perdemos el contexto de la clase y lo tenemos
    que asociar a la clase (bind(this))
    * hacer el export de la clase
    * Para eliminarnos el hacer el bind podemos utilizar "public class field feature" que es ele uso de arrow functions como campos de clase
    
Bola extra: Crear un contador con + y -    

