/* console.log("el JS del index correctamente linkeado"); */

//constantes y las variables
const codigoEncryption = "elefante";
const numberOfPi = 3.1415982;
//console.log(codigoEncryption);

let numberOfCar = 3;
let numberOfUser = 20;
//console.log(numberOfCar);
//console.log(numberOfUser);


let numberOfCoders = 200;
let numberOfRooms = 10;
let codersByRoom = numberOfCoders / numberOfRooms;

/* console.log("Cantidad de Programadores: " + numberOfCoders);
console.log("Coders Por Sala : " + codersByRoom); */

let codersAproved = 40;

/* numberOfCoders = numberOfCoders - codersAproved;
console.log("Cantidad de Programadores: " + numberOfCoders);
codersByRoom = numberOfCoders / numberOfRooms;
console.log("Coders Por Sala : " + codersByRoom) */;


let radius = 20;
let areaOfCircleLibrary = radius** Math.PI;
let areaOfCircle = radius** numberOfPi;
let QuantityOfCircles = 5;
let areaTotal = areaOfCircle * QuantityOfCircles;

/* console.log("Cantidad de area de un cirulo : " + areaOfCircle); */
/* console.log("Cantidad de area de un cirulo library: " + areaOfCircleLibrary); */


//tipo de variables
let numberOfStudents = 20; //Integer
let priceOfProduct = 19.99; //float decimal
let numberOfDays; //undefined
let dayOfWeek = "Lunes"; //string

let number = 1; //integer
let numberString = "1"; //string

let boolean1 = true; //boolean
let boolean2 = false; //boolean

/* ---------------------------------------- */

//Arrays


let listOfCoders = ["Patricia" , "Jose" , "MArgarita", "Jesus", "Fredy"];

/* console.log(listOfCoders);
console.log(listOfCoders[0]); */




let agenda = [["Patricia", 1985, "Sevilla"] , ["Jose", 1990, "Murcia"], ["Margarita", 1988, "Mallorca"], ["Jesus", 1992, "Granada"], ["Fredy", 1987, "Sevilla"]];



let resultRace = ["Patricia" , "Jose" , "Margarita", "Jesus", "Fredy", "Carlos", "William"];

let sizeOfArraysResultRace = resultRace.length;

/* console.log("Cantidad de corredores: " + sizeOfArraysResultRace); */

/* for (let index = 0 ; index < resultRace.length ; index++){
    console.log((index + 1) + " : " + resultRace[index]);
}

console.log("fin de la carrera"); */

/* for (let index = resultRace.length - 1; index >= 0 ; index--){
    console.log((index + 1) + " : " + resultRace[index]);
}

console.log("fin de la carrera"); */


function sumTwonumber(number1,number2){
    let result = number1 + number2;
    console.log("La suma de " + number1 + " + " + number2 + " es: " + result);
    return result;
}


/* let number1 = 10;
let number2 = 20;
let sum = sumTwonumber(number1,number2);

number1 = 23;
number2 = 45;
sum = sumTwonumber(number1,number2);


number1 = 47;
number2 = 33;
sum = sumTwonumber(number1,number2);


number1 = 105;
number2 = 225;
sum = sumTwonumber(number1,number2);




numberA = 1254788721;
numberB = 3258521545;
sum = sumTwonumber(numberA,numberB); */




function calculator(number1Calculator,number2Calculator){

    console.log("------------------------------");
    let sum = number1Calculator + number2Calculator;
    console.log("La suma de " + number1Calculator + " + " + number2Calculator + " es: " + sum);

    let substraction = number1Calculator - number2Calculator;
    console.log("La resta de " + number1Calculator + " - " + number2Calculator + " es: " + substraction);

    let multiplication = number1Calculator * number2Calculator;
    console.log("La multiplicacion de " + number1Calculator + " * " + number2Calculator + " es: " + multiplication);


    if (number2Calculator === 0){ // equals
        console.log("No se puede dividir entre 0");
    } 
    

    if(number2Calculator !== 0) // not equals
    {
        let division = number1Calculator / number2Calculator;
        console.log("La division de " + number1Calculator + " / " + number2Calculator + " es: " + division);
    }

    


}

//  = -> aigancion
// 1 == "1"
// 1 === 1  //true

let numberOfPatricia1 = 22;
let numberOfPatricia2 = 35;

calculator(numberOfPatricia1,numberOfPatricia2);

let numberOfMauricio1 = 13;
let numberOfMauricio2 = 43;
calculator(numberOfMauricio1, numberOfMauricio2);

let numberOfCamilo1 = Math.PI;
let numberOfCamilo2 = 0;
calculator(numberOfCamilo1, numberOfCamilo2);



let age

if (age >= 18){
    console.log("Puuedes entrar a la discoteca");
}

if (age <= 14 && age >= 18){
    console.log("Puedes entrar a la discoteca pero no puedes tomar alcohol");
}


if (age < 14){
    console.log("No puedes entrar a la discoteca");
}

function verificarAcceso(edad) {
    if (edad >= 21) {
        console.log("Puedes entrar y beber alcohol.");
    } else if (edad >= 18) {
        console.log("Puedes entrar, pero sin beber alcohol.");
    } else if (edad >= 16) {
        console.log("Puedes entrar, pero debes venir acompañado.");
    } else if (edad < 2) {
        console.log("¡Alerta! Llamar a la policía de inmediato.");
    } else {
        // Esto cubre automáticamente a los que tienen entre 2 y 15 años
        console.log("No puedes entrar.");
    }
}


/* function verificarAcceso2(edad) {
    if (edad >= 21) {
        console.log("Puedes entrar y beber alcohol.");
    } else if (edad >= 18) {
        console.log("Puedes entrar, pero sin beber alcohol.");
    } if (edad >= 16) {
        console.log("Puedes entrar, pero debes venir acompañado.");
    }
    } else {
        // Esto cubre automáticamente a los que tienen entre 2 y 15 años
        console.log("No puedes entrar.");
    }
}
 */

function conditionEnComun(edad) {
        if (edad >= 21) {
        console.log("Puedes entrar y beber alcohol.");
    }
    
    if (edad >= 18 && edad < 21) {
        console.log("Puedes entrar, pero sin beber alcohol.");
    }
    
    if (edad >= 16 && edad < 18) {
        console.log("Puedes entrar, pero debes venir acompañado.");
    }
}

function verificarAcceso1(edad) {

    conditionEnComun(edad);
    
    if (edad >= 2 && edad < 16) {
        console.log("No puedes entrar.");
    }
    

}



function verificarAcceso2(edad) {

    conditionEnComun(edad);
    
    if (edad < 2) {
        console.log("¡Alerta! Llamar a la policía de inmediato.");
    }
}




let edad = 17;
let mayorDeEdad;

if (edad >= 18) {
    mayorDeEdad = true;
}

if(edad < 18) {
    mayorDeEdad = false;
}



if (mayorDeEdad) {
    console.log("Puedes entrar y beber alcohol.");
}

let arrays4 = [["Patricia", true], ["Jose", false], ["Margarita", true], ["Jesus", false], ["Fredy", true]];


for (let index = 0; index < arrays4.length; index++) {
    if (arrays4[index][1]) {
        let name = arrays4[index][0];
        console.log("Nombre: " + name);
    }
}