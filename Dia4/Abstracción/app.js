/*
--Abstracción--

Consiste en mostrarsolo lo ensencial y ocultar lo complejo.
Se logra creando metodos que representen acciones
de alto nivel, sin necesidad de que el usuario entienda
toda la logica interna.
*/

class Coche{
    encender(){
        console.log('El coche esta encendido')
    }
    apagar(){
        console.log('El coche esta apagado')
    }
}

const miCoche = new Coche();
miCoche.encender();
miCoche.apagar();