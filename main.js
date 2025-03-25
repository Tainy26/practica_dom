import { products as productslist } from './data.js'

const main = document.querySelector('.products');
productslist.forEach(function(product) {
    main.appendChild(createProduct(product)); //Metemos la funcion creada dentro del main
})


function createStars(rating) {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    return '★'.repeat(fullStars) + '☆'.repeat(totalStars - fullStars);
}

//Creamos la funcion con todo lo que queremos que incluya el producto para meterlo luego en el main.
function createProduct(product) { 
    const article = document.createElement('article');
    article.className = 'product-card';

    article.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${product.price} € </div>
            <div class="product-rating">
                <span class="stars">${createStars(product.stars)}</span>
                <span class="reviews">(${product.reviews} opiniones)</span>
            </div>
            <div class="product-seller">Vendido por: ${product.seller} </div>
            <button class="add-to-cart">Comprar</button>
        </div>
    `;

    return article;
}