//# 🎠 Ejercicios básicos en Javascript parte III

// ## Números:

// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

function addNumbers(num1, num2) {
    return num1 + num2;
  }
  console.log(addNumbers(3, 9));

// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.
    
function subtractNumbers(num1, num2) {
        return num1 - num2;
      }
      console.log(subtractNumbers(5, 7));

// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.

function multiplyNumbers(num1, num2) {
    return num1 * num2;
  }
    console.log(multiplyNumbers(6, 7));     

// 4. Escribe una función que tome dos números como argumentos y devuelva su división.

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    }
    console.log(divideNumbers(20, 4));

// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function calculateSquare(num) {                 
    return num * num;
  }
  console.log(calculateSquare(5));

// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.

function calculateRemainder(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 % num2;
    }   
    console.log(calculateRemainder(10, 3));

// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function calculateSquareRoot(num) {
    if (num < 0) {
        return "Cannot calculate square root of a negative number";
      }
      return Math.sqrt(num);
    }
    console.log(calculateSquareRoot(16));

// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function getAbsoluteValue(num) {
    return Math.abs(num);
  }
  console.log(getAbsoluteValue(-10));

// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function roundNumber(num) {
    return Math.round(num);
  }
  console.log(roundNumber(4.7));

// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function generateRandomNumber() {
    return Math.random();
  }
  console.log(generateRandomNumber());

// ## Letras:

// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenateStrings(str1, str2) {
    return str1 + str2;
  }
  console.log(concatenateStrings("Hola", " Mundo"));

// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function getStringLength(str) {
    return str.length;
  }
  console.log(getStringLength("Hola Mundo"));

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function ToUpperCase(str) {
    return str.toUpperCase();
  }
  console.log(ToUpperCase("Hola Mundo"));   

// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function ToLowerCase(str) {
    return str.toLowerCase();
  }
  console.log(ToLowerCase("Hola Mundo"));

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function characterAt(str, index) {
    return str.charAt(index);
  }
  console.log(characterAt("Hola Mundo", 3)); 

// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("Hola Mundo"));
  
// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function countCharacter(str, char) {
    let count = 0;
    for (let c of str) {
      if (c === char) {
        count++;
      }
    }
    return count;
  }
  console.log(countCharacter("Hola Mundo", "o"));

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

function removeSpaces(str) {
    return str.replace(/\s+/g, "");
  }
  console.log(removeSpaces("Hola Mundo"));

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  console.log(isPalindrome("anilina"));
  console.log(isPalindrome("Hola"));

// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizeWords(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  console.log(capitalizeWords("hola mundo desde javascript"));

  // ## Arrays:

// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 

// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function averageArray(arr) {
    if (arr.length === 0) {
        return 0;
      }
      return sumArray(arr) / arr.length;
    }
    console.log(averageArray([1, 2, 3, 4, 5]));
    console.log(averageArray([]));

// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  console.log(sortArray([5, 3, 8, 1, 4]));


// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function filterGreaterThan(arr, num) {
    return arr.filter(element => element > num);
  }
  console.log(filterGreaterThan([1, 2, 3, 4, 5], 3));

// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }             
  console.log(mergeArrays([1, 2, 3], [7, 8, 9]));

// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function findMax(arr) { 
    return Math.max(...arr);
  }
  console.log(findMax([1, 2, 3, 4, 5]));

// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function findMin(arr) {
    return Math.min(...arr);
  }
  console.log(findMin([1, 2, 3, 4, 5]));

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function countElement(arr, element) {
    let count = 0;
    for (let el of arr) {
      if (el === element) {
        count++;
      }
    }
    return count;
  }
  console.log(countElement([1, 2, 3, 1, 4, 1], 1)); 

// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  console.log(removeDuplicates([1, 2, 3, 1, 4, 2]));    

// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function reverseArray(arr) {
    return arr.reverse();
  }
  console.log(reverseArray([1, 2, 3, 4, 5]));

  // ## Objetos literales:

// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function getName(obj) {
    return obj.nombre;
  }     
  console.log(getName({ nombre: "Mariia"}));

// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function updateAge(obj, newAge) {
    obj.edad = newAge;
    return obj;
  }         
    console.log(updateAge({ nombre: "Mariia", edad: 32 }, 33));

// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

function addProperty(obj, propertyName) {
    obj[propertyName] = null;
    return obj;
  }
  console.log(addProperty({ nombre: "Mariia", edad: 32 }, "nuevaPropiedad"));

// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function deleteProperty(obj, propertyName) {
    delete obj[propertyName];
    return obj;
  }
  console.log(deleteProperty({ nombre: "Mariia", edad: 32 }, "edad"));

// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function countProperties(obj) {
    return Object.keys(obj).length;
  }
  console.log(countProperties({ nombre: "Mariia", edad: 32, ciudad: "Valencia" }));

// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

function hasProperty(obj, propertyName) {           
    return obj.hasOwnProperty(propertyName);
  }
  console.log(hasProperty({ nombre: "Mariia", edad: 32 }, "nombre"));

// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

function getPropertyValues(obj) {
    return Object.values(obj);
  }
  console.log(getPropertyValues({ nombre: "Mariia", edad: 32, ciudad: "Valencia" }));

// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  console.log(areObjectsEqual({ nombre: "Mariia", edad: 32 }, { nombre: "Mariia", edad: 33 }));

// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

function copyObject(obj) {
    return { ...obj };
  }
  console.log(copyObject({ nombre: "Mariia", edad: 33 }));      

// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  console.log(mergeObjects({ nombre: "Mariia", edad: 32 }, { ciudad: "Valencia", edad: 33 }));