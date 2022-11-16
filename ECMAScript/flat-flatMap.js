/** Los arrays pueden tener varios niveles. Esta función nos permite unir todos los niveles
 * que deseemos en uno solo
 */
{
  const array = [1, 2, [3, 4], 5, 6];
  const result = array.flat();
  result; // [1,2,3,4,5,6]

  const array2 = [1, 2, [3, 4, [5, 6]]];
  const result2 = array2.flat();
  result2; // [1, 2, 3, 4, [5, 6]]

  const array3 = [1, 2, [3, 4, [5, 6]]];
  const result3 = array3.flat(2);
  result3; // [1, 2, 3, 4, 5, 6]

  const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  const result4 = array4.flat(Infinity);
  result4; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
// flatMap
{
  const strings = ["Nunca pares", "de Aprender"];
  strings.map((string) => string.split(" "));
  // [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
  strings.flatMap((string) => string.split(" "));
  // [ 'Nunca', 'pares', 'de', 'Aprender' ]

  const numbers = [1, 2, 3, 4];
  numbers.map((number) => [number * 2]);
  // [[2], [4], [6], [8]]
  numbers.flatMap((number) => [number * 2]);
  // [2, 4, 6, 8]

  // Cuidado, primero hace el map y luego el flat
  const numbers2 = [1, [2, 3], 4, 5];
  numbers2.flatMap((number) => [number * 2]);
  // [ 2, NaN, 8, 10 ]
  // * Recuerda: NaN = No a Number
}

