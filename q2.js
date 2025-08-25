/*Write a function findMax(...nums) that returns the largest number among
all arguments.*/

function findMax(...nums) {
   if (nums.length === 0) {
    return "Please provide at one number.";
  }
    return Math.max(...nums);
}
console.log(findMax(1,1,2,3,4,5,6));
