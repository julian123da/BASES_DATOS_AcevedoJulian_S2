/*
-- HERENCIA --
Permite reutilizar código creado clases hijas a
partir de una clase padre.
En Javascript se logra mediante extends.
 */
class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hacerSonido(){
        prompt(`${this.nombre} hace un sonido!`)
    }
}
class Perro extends Animal{
    constructor(ladra){
        super(ladra);
    }
}
const perro1= new Perro("Paco");
perro1.hacerSonido();