// Arrojo un error cada vez que el campo sea obligarorio
function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}
// Recibo "X" parámetros, lo cuales yo defino qué traen por defecto y si son obligatorios
function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) 
  /* 
  si no me mandan parámetros, me saldría un error ya que no hay un "return" por defecto. 
  Se declara que por defecto el objetoserá igual a objeto vacío
  */
{

    //Retorna todos los parámetros que por defecto serán asignados a "undefined" si no les pusimos nada
  return {
    name,
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });
