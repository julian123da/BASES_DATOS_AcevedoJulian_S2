class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar() {
        console.log(`${this.nombre} está saludando!`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, apellido, edad, carrera) {
        super(nombre, apellido, edad);
        this.carrera = carrera;
    }

    saludar() {
        console.log(`${this.nombre} está saludando y estudia ${this.carrera}`);
    }
}

let persona1 = new Persona("Angel", "Perez", 22);
let estudiante1 = new Estudiante("Andres", "Barrera", 28, "Medicina");

persona1.saludar();
estudiante1.saludar();