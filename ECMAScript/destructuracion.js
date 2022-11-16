/** Antes, debíamos escribir una por una las asignaciónes de las propiedades de un objeto
 * o las posiciones de un array al momento de realizar una asignación en variables diferentes
 * lo cual suponía más lineas de código y menos tiempo de producción
 */
{
  var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };

  var nombre = usuario.nombre;
  var edad = usuario.edad;
  var plataforma = usuario["plataforma"];

  console.log(nombre); // 'Andres'
  console.log(edad); // 23
  console.log(plataforma); // 'Platzi'
}

/**Con la desestructuración puedes realizar lo mismo, pero en una sola línea,
 * provocando que el código seas más legible y mantenible. */
{
  const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };

  const { nombre, edad, plataforma } = usuario;

  console.log(nombre); // 'Andres'
  console.log(edad); // 23
  console.log(plataforma); // 'Platzi'
}

/** Al destructurar, se debe poner el nombre de la variable tal cual está en el objeto,
 * eso no significa que no pueda cambiar el nombre del parámetro que recibo
 */

{
  const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };

  const { nombre: name, edad: age, plataforma: platform } = usuario;

  console.log(name); // 'Andres'
  console.log(age); // 23
  console.log(platform); // 'Platzi'

  console.log(nombre); // Uncaught ReferenceError: nombre is not defined
}

/** Así funciona en funciones */
{
  const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };

  function mostrarDatos({ nombre, edad, plataforma }) {
    console.log(nombre, edad, plataforma);
  }

  mostrarDatos(usuario); // 'Andres', 23, 'Platzi'
}

/** En arrays */

{
  const array = [1, 2, 3, 4, 5];

  // Desestructuración
  const [uno, dos, tres] = array;

  console.log(uno); // 1
  console.log(dos); // 2
  console.log(tres); // 3
}

/** Pequeña trampa en arrays. La "," me separa posiciones sin necesidad de asignarlas
 * si no las necesito */

{
  const array = [1, 2, 3, 4, 5];

  const [, , , , cinco] = array;

  console.log(cinco); // 5
}

/** Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos
 *  mediante el índice y utilizando un nombre para la variable.
 */
{
  const array = [1, 2, 3, 4, 5];

  const { 4: cinco } = array;

  console.log(cinco); // 5
}
