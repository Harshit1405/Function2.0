/*Write a function printUserDetails(user) that takes a user object (name, age,
email) and prints a formatted string.
*/

function printUserDetails(user) {
    console.log(`User Name is: ${user.Name}, Age is: ${user.age}, Email is: ${user.email}`);
}

const user = {
    Name: "Harshit",
    age: 20,
    email: "harshit@gmail.com"
};

printUserDetails(user);

