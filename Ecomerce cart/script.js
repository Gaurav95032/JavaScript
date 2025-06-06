document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.querySelectorAll(".addButton");
    const cartItems = document.getElementById('cartItems');
    const checkout = document.getElementById('addTotalButton');
    const totalPrice = document.getElementById('totalPrice');

    let total = 0;

    addToCartButton.forEach((addCartButton) => {
        addCartButton.addEventListener('click', () => {
            
            const products = addCartButton.closest(".product");
            const clonedProducts = products.cloneNode(true);

            const clonedButton = clonedProducts.querySelector(".addButton");
            if (clonedButton) {
                clonedButton.remove();
            }

            cartItems.append(clonedProducts);

            const clonedProductprice = clonedProducts.querySelector(".productprice")
            const price = parseInt(clonedProductprice.textContent.trim());
            total += price
            totalPrice.textContent = total;
            
            const removeFromCart = document.createElement('button');
            removeFromCart.className = "mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full";
            removeFromCart.textContent = "Remove product";
            clonedProducts.append(removeFromCart);

            removeFromCart.addEventListener('click', () => {
                clonedProducts.remove();
                total -= price;
                totalPrice.textContent = total;
            })

            


        })

        checkout.addEventListener('click', () => {
            alert("the product has been check out")
        })

    })

})