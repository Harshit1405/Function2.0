/*Write a function mergeUsers(user1, user2) that combines two user objects
into one*/

function mergeUsers(user1,user2) {
    return { ...user1, ...user2 };
}

let user1 = {
  name: "harshit ",
  age: 20,
  email:"technoskill@gmail.com"
};

let user2 = {
  email: "harshit@gmail.com",
  age: 25
};
const mergedUser = mergeUsers(user1, user2);
console.log(mergedUser);