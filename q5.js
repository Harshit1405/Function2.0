/*Write a function applyDiscount(product) that reduces the price of a
product object by 20%.*/


function applyDiscount(product) {

    if (product && typeof product.price === "number") {
        product.price = product.price * 0.8;//kyuki product.price*(1-0.20) karte hai

    }
    else {
        console.log("Invalid product or price.");
    }
}
let product = {
    name: "Laptop",
    price: 5500
};
console.log("Before discount:", product.price);  //Before discount: 5500

applyDiscount(product);

console.log("After discount:", product.price); //After discount: 4400