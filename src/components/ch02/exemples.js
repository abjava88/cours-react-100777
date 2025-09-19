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

/*
Solution exercice chapitre 02
*/

const concatenate = (obj1, obj2) => {
    return {
        name1: obj1.name,
        name2: obj2.name
    }
}

// test concatenate 
const obj1 = {
    name: "Alex",
    position: "Software developer"
}
const obj2 = {
    name: "Rami",
    position: "Designer"
}
console.log(concatenate(obj1, obj2));
