/**
 * EXemple 01 fonction arrow - some des deux parametres
 */

const somme = (a,b) => a + b

// exemple somme 10 + 100 resultat 110
console.log(somme(10,100));


const numbers = [1,2,3,4,5,6];

const sum = (a,b,c,d) => {
    return a+b+c+d;
}

console.log(sum(...numbers));