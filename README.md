Conceptos de Programación Orientada a Objetos (POO)
## Encapsulamiento

Es la técnica de ocultar los detalles internos de un objeto y controlar el acceso a sus datos mediante métodos públicos (getters y setters).

 Beneficio:
Seguridad y control sobre cómo se accede y modifica la información.

Ejemplo:
En vez de acceder directamente a edad, usamos getEdad() y setEdad() para validarla.


## Abstracción

Es el proceso de mostrar solo los detalles esenciales de un objeto y ocultar su complejidad interna, permitiendo que el usuario se enfoque únicamente en lo necesario para su uso.

 Beneficio:
Simplificación del código y reducción de la complejidad.

Ejemplo:
Un objeto Auto puede exponer métodos como encender() y acelerar() sin mostrar cómo funciona el motor internamente.

## Herencia

Es el mecanismo que permite que una clase (llamada clase hija o subclase) adquiera propiedades y métodos de otra clase (llamada clase padre o superclase).

 Beneficio:
Reutilización de código y jerarquía lógica.

Ejemplo:
Una clase Estudiante puede heredar atributos y métodos de la clase Persona.


## Polimorfismo

Es la capacidad que tienen las clases hijas de redefinir métodos heredados para que se comporten de manera diferente según el contexto.

 Beneficio:
Permite que un mismo método (saludar()) haga cosas distintas según la clase.

## Paradigma
UN paradigma es una teoria o conjunto de teorias que sireve de modelo a seguir.

Un paradigma es, por tanto, una vision o una determinada perpesctiva de entender algo, es decir, un sistema de pesamiento o forma de hacer las cosas.

Por ejemplo, el paradigma cientifico, es un principio,
teoria o conocimiento originado de la investigacion de un ambito especifico,
y que servira de referencia para futuras investigaciones.

## -JVM: 
Java virtual machine.
## -JRE:
Java rutime enviroment.
## -JDK:
Java developer keep.

-Sobreescribir un metodo cerrado. POLIFORMISMO

## Tipo de dependencias funcionales
--Completa
                         A => B
B tiene dependencia funcional compelta de A si depende funcionalmente de el pero de ningun subconjunto suyo.

--Trival
                        A -> B
En este caso el atributo B es un conjunto de A.

--Transitiva
                        A -> B -> X, entonces A... -> X
A, B y C son atributos o conjuntos de atributos s B depede funcionlamente de A y C depende funcionalmente de B, ae puede deducir que C depende transitivamente de A.

## Introduccion de base de datos
La BBDD o SGBD (Sistema gestores de base de datos) fueron creados para buscar problematicas que los sistemas de archivos tenian al momento y gestionar información.

## 3 metodos para sobrellevar integridad de datos
1.Data si sentido.
2.Establecimiento de valor default.
3.Generación de data mediante estadisticas matematica.







