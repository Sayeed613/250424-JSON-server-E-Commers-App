fetchProducts()
async function fetchProducts(){
    try{
        const response =  await fetch("http://localhost:3000/products")
        const products = await response.json();
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        displayProducts(products)
    } catch(error){
        console.error('Error:', error);
    }
}

function displayProducts(products){
    const productsContainer = document.querySelector(".all-products")
    productsContainer.innerHTML = ""

    products.forEach(product => {
        const productCard = `
        <div class="product">
        <img src="${product.src}" alt="${product.title}">
                <div class="product-info">
                    <h4 class="product-title">${product.title}</h4>
                    <p class="product-price">${product.price}</p>
                    <p class="product-rating">Rating: ${product.ratings}</p>
                    <a href="./cart.html" class="addtocartBtn">Buy now</a>
                </div>
        </div>`;
        productsContainer.innerHTML += productCard;
    })
}