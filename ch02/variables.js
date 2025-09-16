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

const x = 10;

const car = {
    model: 'bmw',
    make: '2019',
}



car.make = 2025;
car.color = 'red';

console.log(car.color);

console.log(`Timestamp `+ Date.now());


// fonction fleche 
const somme = (param1, param2) => param1 + param2;

const log = (param1, param2) => {
    return (param1 + param2 + (Date.now()/1000));
}

console.log(`log : ` + log(10,20));
console.log(`log : ` + log(10,20));
console.log(`log : ` + log(10,20));

//
const somme1 = function (param1, param2) {
    return param1 + param2;
}

const compare = (param1, param2) => {
    if(param1 > param2) return 'param1 superieur param2';
    else return 'param2 superieur ou egal param1'
}

const fullName = 'Abbes'
const employee = {
    fullName
}

console.log(employee);



