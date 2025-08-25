/*Write a function doubleArray(arr) that returns a new array with all values
doubled.*/

function doubleArray(arr) {
    return arr.map(function(element){
        return element*2;
    });
}
const number=[1,2,3,4,5,6,7,8,9];
const result= doubleArray(number);
console.log(result);
