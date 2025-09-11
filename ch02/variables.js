var count = 10;

function add(x,y){
    var somme = 10;
    console.log(`interieur add` + somme);
}

var xy;

add(10,20);

console.log(typeof(xy));

xy = 10;

console.log(typeof(xy));

//console.log(`exterieur add` + somme);

const port = 12012;

console.log(port);

const numbers = [1, 2, 3, 4, 5];
[first, second, ...others] = numbers

console.log(first);
console.log(second);
console.log(others);

let a = "Hello";
a[0] = "a";   // ❌ Impossible, la chaîne reste inchangée
console.log(a); // "Hello"
