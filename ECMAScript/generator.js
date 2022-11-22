{
  // Declaración de su estructura
  function* nombre(parámetros) {
    yield "primer valor retornado";
    yield "segundo valor retornado";
    //...
    yield "último valor retornado";
  }

  //Crear el generador
  const generador = nombre(argumentos);

  // Invocacioens
  generador.next().value; //primer valor retornado
  generador.next().value; //segundo valor retornado
  //...
  generador.next().value; //último valor retornado
}

{
    /** Aquí podemos comprobar que por defecto lo que entregan los "yield" es un objeto que dice
     * el valor y si es el final de la ejecución siendo "true" si ya se llegó al final y "false"
     * en caso contrario
     */
    function* generator(){
        yield 1
        yield 2
        yield 3
    }
    
    const generador = generator()
    
    console.log(generador.next()) // {value: 1, done: false}
    generador.next().value //2
    generador.next().value //3
    console.log(generador.next()) // {value: undefined, done: true}
    
}
