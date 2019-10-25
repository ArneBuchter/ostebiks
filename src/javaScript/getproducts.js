document.addEventListener('DOMContentLoaded', () => {

    fetch('/assets/data/produkter.json')
        .then(Response => Response.json())
        .then(function(data) {
            const cardTemplate = document.querySelector('#cardTemplate');
            const list = document.getElementsByClassName('cardList')[0];
            data.forEach(function(product) {
                const clone = cardTemplate.content.cloneNode(true);
                clone.querySelector('h2').innerText = product.navn;
                clone.querySelector('p').innerText = product.beskrivelse[0];
                clone.querySelector('img').src = `/assets/images/${product.billeder[0]}`;
                clone.querySelector('.price').innerText = product.pris;
                clone.querySelector('.weight').innerText = product.vægt;
                clone.querySelector('.country').innerText = product.land;
                clone.querySelector('a').href = `/single/?sku=${product.sku}`
                list.appendChild(clone);
            });
        })

}); //DOM end