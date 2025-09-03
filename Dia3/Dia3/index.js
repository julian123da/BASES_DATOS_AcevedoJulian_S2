/*
-- ESCAPSULAMIENTO --
Significa ocultar los detalles internos de un objeto
y exponer solo lo necesario.
En Javascript se logra con propiedades privadas(#) y métodos
públicos
 */

class Persona{
    /*
    Persona{
        nombre:"",
        edad:""
    }
    */

    //Atributos
    nombre;//Propiedad Privada
    edad;//Propiedad Privada

    //Constructor Compuesto
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    /*
    Persona{
        nombre:"Campuslands",
        edad:"3"
    }
     */

    //Constructor Vacio
    constructor(){}

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre=nombre
    }
}