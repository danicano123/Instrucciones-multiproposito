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
    /* 
    cuando retornamos "name" por ejemplo, no tenemos que hacer "name: name" ya que toma el nombre como el parametro como "key"
    y el argumento como "value" por defecto y puedo recibir cualquier parámetro por fuera de su "key" y al retornarlo, solo lo
    ingreso dentro del "key" y así me ahorro algo como "socialMedia.twitter"
    */
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
