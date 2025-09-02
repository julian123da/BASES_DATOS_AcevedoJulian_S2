¿Qué es la Herencia en POO?

Es el mecanismo que permite que una clase (llamada clase hija o subclase) adquiera propiedades y métodos de otra clase (llamada clase padre o superclase).
Beneficio: Reutilización de código y jerarquía lógica.

Ejemplo:
Una clase Estudiante puede heredar atributos y métodos de la clase Persona.

¿Qué es el Encapsulamiento en POO?

Es la técnica de ocultar los detalles internos de un objeto y controlar el acceso a sus datos mediante métodos públicos (getters y setters).
Beneficio: Seguridad y control sobre cómo se accede y modifica la información.

Ejemplo:
En vez de acceder directamente a edad, usamos getEdad() y setEdad() para validarla.

¿Qué es el Polimorfismo en POO?

Es la capacidad que tienen las clases hijas de redefinir métodos heredados para que se comporten de manera diferente según el contexto.
Beneficio: Permite que un mismo método (saludar()) haga cosas distintas según la clase.

Ejemplo:
Persona.saludar() → “Angel está saludando”
Estudiante.saludar() → “Andres está saludando y estudia Medicina”