// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var array = [];
  Object.entries(objeto).forEach(([key, value]) => {
    let propiedad = key;
    let valor = value;
    array.push([propiedad, valor]);
  });
  return array;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var palabra = string.toLowerCase();
  var array = new Object();

  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    let contador = 0;
    for (x = 0; x < palabra.length; x++) {
      if (palabra[x] == letra) {
        contador = contador + 1;
      }
    }
    array[letra] = contador;
  }
  return array;

}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var letrasMinusculas = "abcdefghijklmnñopqrstuvwxyz";
  var letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var cadenaMinusculas = "";
  var cadenaMayusculas = "";
  var letra = "";
  for (let i = 0; i < s.length; i++) {
    letra = s.charAt(i);
    //compruebo si la letra es mayuscula
    if (letrasMayusculas.indexOf(letra) != -1) {
      cadenaMayusculas = cadenaMayusculas + letra;
    } else if (letrasMinusculas.indexOf(letra) != -1) {
      cadenaMinusculas = cadenaMinusculas + letra;
    }
  }
  return cadenaMayusculas + cadenaMinusculas;

}





function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabraInvertida = "";
  var cadenaInvertida = "";
  var auxiliar = str;
  // recorrer la frase 
  for (let i = 0; i < auxiliar.length; i++) {
    //pongo cada caracter distinto de vacio en una palabra invertida
    if (auxiliar.charAt(i) != " ") {
      palabraInvertida = auxiliar.charAt(i) + palabraInvertida;
    } else {
      if (cadenaInvertida.length == 0) {
        cadenaInvertida = palabraInvertida;
        palabraInvertida = "";
      } else {
        cadenaInvertida = cadenaInvertida + " " + palabraInvertida;
        palabraInvertida = "";
      }
    }
  }
  cadenaIvertida = cadenaInvertida + " " + palabraInvertida;
  return (cadenaInvertida + " " + palabraInvertida);
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var bandera = false;
  var numeroString = numero.toString();
  var x = numeroString.length - 1;
  //recibir el numero y convertirlo en string
  //comenzar a recorrer el string de adelante a atras e ir guardando en una variable 
  for (let i = 0; i < numeroString.length; i++) {
    if (numeroString[i] != numeroString[x]) {
      bandera = true;
      return ("No es capicua");
    }
    x = x - 1;
  }
  if (bandera == false) {
    return ("Es capicua");
  }

}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newCadena = "";
  var caracter = "";
  for(let i= 0; i < cadena.length; i++){
    caracter = cadena.charAt(i);
    if (caracter == 'a' || caracter == 'A' || caracter == 'b' || caracter == 'B' || caracter == 'c' || caracter == 'C'){
    }else{
      newCadena = newCadena + caracter;
    }
  }
  return newCadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let largoArr = arr.length; // toma el largo del array ingresado
  for (let i = 0; i < largoArr; i++) { 
    for (let x = 0; x < largoArr - 1; x++) {
      if (arr[x].length > arr[x + 1].length) {
        let auxiliar = arr[x];
        arr[x] = arr[x+1];
        arr[x + 1] = auxiliar;
      }
    }
  }
  return arr
 
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

var numero1 = Number;
  var numero2 = Number;
  var newArray = [];
  for (let i = 0; i < arreglo1.length; i ++){
    numero1 = arreglo1[i];
    for(let x = 0; x < arreglo2.length; x++){
      numero2 = arreglo2[x];
      if (numero1 == numero2){
        newArray.push(numero1);
        break;
      }
    }

  }
  return newArray;


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

