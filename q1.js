/*Write a function sumAll(...numbers) that takes any number of arguments
and returns their sum.*/

function sumAll(...numbers) {
    let Total=0;
    for(let num of numbers){

        Total += num;
    }
    return Total;
}
console.log(sumAll(1,2,3,4,5));
