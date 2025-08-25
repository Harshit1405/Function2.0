/*Write a function findSecondLargest(arr) that returns the second largest
number from an array.*/
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; //agr array me 2 sew km number hai tb null return krna hai

    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;


}
console.log(findSecondLargest([10, 5, 20, 8])); // Output: 10
console.log(findSecondLargest([5, 5, 5])); // Output: null
console.log(findSecondLargest([100])); // Output: null
