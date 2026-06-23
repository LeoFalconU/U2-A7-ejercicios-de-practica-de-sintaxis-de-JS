
const number = parseInt(prompt('Ingresa un numero positivo: '));
let n1 = 0, n2 = 1, sigTerm;

console.log('Numeros Fibonacci:');
console.log(n1);
console.log(n2);

sigTerm = n1 + n2;

if (number === 0){
    return []
} else{
while (sigTerm <= number) {


    console.log(sigTerm);

    n1 = n2;
    n2 = sigTerm;
    sigTerm = n1 + n2;
}
}


const gFibonacci = (n) => {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    let resultado = [0, 1];
    for (let i = 2; i < n; i++) {
        let sigTermino = resultado[i - 1] + resultado[i - 2];
        resultado.push(sigTermino);
    }
    return resultado;
};

console.log(gFibonacci(1)); 
console.log(gFibonacci(2)); 
console.log(gFibonacci(10)); 
console.log(gFibonacci(20));

function fizzBuzz(n = 30) {
    for (let i = 1; i <= n; i++) {

        if (i % 15 === 0 ) {
            console.log("FizzBuzz");
        } 
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }

    }
    
} fizzBuzz()



const number = parseInt(prompt('Ingresa un numero positivo:  '));

let n1 = 0, n2 = 1, sigTerm;

if (number <= 0) {
    return [];
} else if (number === 1) {
    console.log(0);
} else {
    console.log('Numeros Fibonacci:');
    console.log(n1);
    console.log(n2);


    for (let i = 3; i <= number; i++) {
        sigTerm = n1 + n2;
        console.log(sigTerm);
        

        n1 = n2;
        n2 = sigTerm;
    }
}