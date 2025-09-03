/*
-- POLIMORFISMO --
Permite que un mismo método se comporte
de manera distinta según el objeto que lo use.
En JS se logra mediante la sobreescritura de métodos.
*/class Animal{
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
    hacerSonido(){
        prompt(`${this.nombre} , el cual es un perro, hace un sonido!`)
    }
}
class Gato extends Animal{
    constructor(nombre){
        super(nombre);
        this.ronronea=true;
    }
    hacerSonido(){
        prompt(`${this.nombre} , el cual es un gato, maulla!`);
        prompt(`El gato ronronea?: ${this.ronronea}`)
    }
}
const perro1= new Perro("Paco");
perro1.hacerSonido();

const gato1= new Gato("Simona");
gato1.hacerSonido();