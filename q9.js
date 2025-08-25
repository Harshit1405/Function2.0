/*Write a function countEvenOdd(arr) that counts how many even and odd
numbers are in the array.
*/
// function countEvenOdd(arr) {
//     let even=0;
//     let odd=0;
    
//     arr.forEach(element => {
//         if(element%2===0){
//             even++;
//         }
//         else{
//             odd++;
//         }

//     });
//     return `Total even number=${even},
//     Total odd number=${odd}`
// }
// const number=[1,2,3,4,5,6];
// const result=countEvenOdd(number);
// console.log(result);

function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return {
    even: evenCount,
    odd: oddCount
  };
}
const numbers = [1, 2, 3, 4, 5, 6];
const result = countEvenOdd(numbers);
console.log(result);

