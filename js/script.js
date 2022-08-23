
const cartItemsArray = [];
const productCart = document.getElementById("products-cart");


function showToCart() {
    let totalPrice = 0;

    for (let i = 0; i < cartItemsArray.length; i++) {


        totalPrice += parseInt(cartItemsArray[i].pPrice)


        const cartItems = document.createElement("tr")
        cartItems.innerHTML =
            `        
            <th>${i + 1}</th>
<td>${cartItemsArray[i].pName}</td>
<td>${cartItemsArray[i].pPrice}</td>
`
        productCart.appendChild(cartItems)
    }


    const cartItemsTotalPrice = document.createElement("tr")
    cartItemsTotalPrice.innerHTML =
        `
    <th></th>
<td>Total Price</td>
<td>${totalPrice}</td>
`
    productCart.appendChild(cartItemsTotalPrice)
}




function addToCart(event) {
    productCart.innerText = "";
    const productName = event.parentNode.parentNode.children[0].innerText
    const productPrice = event.parentNode.parentNode.children[1].children[0].innerText

    const productDetails = { pName: productName, pPrice: productPrice }

    cartItemsArray.push(productDetails);
    console.log(cartItemsArray);
    showToCart();
}















    // cartItemsArray.push(cartItems.innerText);
    // console.log(cartItemsArray);
