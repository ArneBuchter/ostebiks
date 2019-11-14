document.addEventListener('DOMContentLoaded', () => {      

    fetch('https://briansostebiksarne.herokuapp.com/products/')
        .then(Response => Response.json())
        .then(function(data) {
            const cardTemplate = document.querySelector('#cardTemplate');
            const list = document.getElementsByClassName('cardList')[0];
            data.forEach(function(product) {

                    const clone = cardTemplate.content.cloneNode(true);
                    clone.querySelector('h2').innerText = product.name;
                    clone.querySelector('p').innerText = product.description;
                    clone.querySelector('img').src = `/assets/images/${product.image[0]}`;
                    clone.querySelector('.price').innerText = product.price;
                    clone.querySelector('.weight').innerText = product.weight;
                    clone.querySelector('.country').innerText = product.land;
                    clone.querySelector('a').href = `/single/?sku=${product.sku}`
                    list.appendChild(clone);
            });

        })

}); //DOM end