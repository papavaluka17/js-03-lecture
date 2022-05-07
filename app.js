const names = [ 'HELLO', 'WORLD', 'JS', 'GEOLAB'];

const lowercased = names.map(name => name.toUpperCase().charAt(0) + name.toLowerCase().slice(1));

console.log(lowercased.join(' '));



const numbers = [4, 5, 11, 2, 9, 99, 1092, 1 ];
numbers.sort(num);
function num(a, b){
    return a - b;
};
console.log(numbers);

const newArr = numbers.filter((value) => {
    return value % 2 === 0;
}).reduce((accumulator, currentValue) => accumulator * currentValue)

console.log(newArr);
