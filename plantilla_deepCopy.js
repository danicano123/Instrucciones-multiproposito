// Pregunto si este elemento es un objeto
function isObject(subject) {
  return typeof subject == "object";
}

// Pregunto si este elemento es un array
function isArray(subject) {
  return Array.isArray(subject);
}
function deepCopy(subject) {
    // resibo X parametro que será evaluado para ver que tipo de dato es
  let copySubject;
  // Aplico las validaciones a mi parametro
  const subjectIsObject = isObject(subject); // true/false
  const subjectIsArray = isArray(subject); // true/false
  // dependiendo del tipo de dato, lo inicializo de esa manera
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
    // Si el dato es de tipo normal, devuelvo su mismo valor ya que no tengo que analizarlo
  } else {
      return subject;
    }

  // Reviso las keys de el objeto para ver si por dentro tiene más objetos
  //El "for in guarda tanto la "Key" como su "valor"
  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    /* 
        Si la keys es un objeto, vuelvo a aplicar deepCopy con recursividad para que se analicen primero todos sus elementos
        dentro del "for in" y así sucesivamente mientras que los keys del objeto tengas más objetos por dentro.
    */
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
        // Si la "Key" es un array, solo debo hacer push ya que guardará todos sus valores
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        // Si es un primitivo, lo guarda sin más
        copySubject[key] = subject[key];
      }
    }
  }
  // Despúes de terminar el recorrido por las "Keys" y sus valores internos, retorna "copySubject" que finalmente tiene todo

  return copySubject;
}
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
}; 
const juan = deepCopy(studentBase);
Object.seal(juan);
