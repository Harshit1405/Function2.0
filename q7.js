/*Write a function getFirstAndLast(arr) that returns the first and last element
of an array.*/
function getFirstAndLast(arr) {
    if (arr.length===0) {
        return[];
        }
        const first= arr[0]; //phla eliment ka index 0 hota hai
        const last= arr[arr.length-1] // arr ka last eliment hota h jo ki length se 1 ghatane pr uski index hota hai
        return [first,last]
}
const number=[1,2,3,4,5,6,7,8,9];
const result=getFirstAndLast(number);
console.log(result);