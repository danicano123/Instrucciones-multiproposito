/*consiste en propagar los elementos de un iterable, ya sea un array o string utilizando
 tres puntos (...) dentro de un array.*/

// Para strings
const array = [..."Hola"]; // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [...array]; //[ 'H', 'o', 'l', 'a' ]

/* Podemos concluír que es mejor que el "DeepCopy" o por lo menos, más ágil si sólo hablamos de un primer
 nivel como verémos a continuación*/
{
  const originalArray = [1, 2, 3, 4, 5];
  const copyArray = [...originalArray];
  copyArray[0] = 0;

  originalArray; // [1,2,3,4,5]
  copyArray; // [0,2,3,4,5]
  originalArray === copyArray; // false
}

/* Si tenemos niveles más profundos, entonces sí copiará su referencia en memoria pero hay otra solución */
{
  const originalArray = [1, [2, 3], 4, 5];
  const copyArray = structuredClone(originalArray);

  originalArray === copyArray; // false
  originalArray[1] === copyArray[1]; // false
}

// Una curiosidad que me gustó jajaja
{
  let kissEmoji = [..."👩‍❤️‍💋‍👩"];
  console.log(kissEmoji);

  let familyEmoji = [..."👨‍👩‍👦‍👦"];
  console.log(familyEmoji);
}

/* El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...)
 seguido de una variable que contendrá los elementos en un array.
 Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos
  en un array.
  el parámetro "rest" siempre debe ser el último */
{
  function hola(primero, segundo, ...resto) {
    console.log(primero, segundo); // 1 2
    console.log(resto); // [3,4,5,6]
  }

  hola(1, 2, 3, 4, 5);
}

// También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.
{
    const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
  }
  const array = [0,1,2,3,4,5]
  
  const {plataforma, ...usuario} = objeto
  const [cero, ...positivos] = array
  
  usuario // { nombre: 'Andres', age: 23 }
  positivos // [ 1, 2, 3, 4, 5 ]
      
}

