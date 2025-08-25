/*Write a function shoppingCart(discount, ...prices) that calculates the total
price after applying a discount percentage.*/

function shoppingCart(discount, ...prices) {
    let Total =0;
    for(let price of prices){
    Total += price;

    }
    let discountammount= (discount/100)*Total;
    let finelprice = Total -discountammount;
    return finelprice;
}
console.log(shoppingCart(10,100,200,300));  // isme 1st number jo 10 h vo discount h or baki ke prices hai 
