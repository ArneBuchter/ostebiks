document.addEventListener('DOMContentLoaded', () => {

    let params = new URLSearchParams(document.location.search);
    const produktSku = params.get('sku');
       
    
    fetch(`https://briansostebiksarne.herokuapp.com/products/${produktSku}`)
        .then(Response => Response.json())
        .then(function(produkt) {

            document.querySelector('.kort__img').src = `/assets/images/${produkt.image[0]}`;
            document.querySelector('.kort__tekst').innerText = `${produkt.description}`;
            document.querySelector('a').innerText = ``;
            document.querySelector('#imgOne').src = `/assets/images/${produkt.image[1]}`;
            document.querySelector('#imgtwo').src = `/assets/images/${produkt.image[2]}`;
            document.querySelector('#imgthree').src = `/assets/images/${produkt.image[3]}`;
            document.querySelector('#imgfour').src = `/assets/images/${produkt.image[0]}`;
            document.querySelector('.country').innerText = produkt.land;
            document.querySelector('.weight').innerText = produkt.weight;
            document.querySelector('.price').innerText = produkt.price;
            
        }) 
        document.querySelector('.gallery').addEventListener('click', function(e){
            if(e.target.classList.contains('gallery__img')){
                document.querySelector('.kort__img').src = e.target.src;
            }
        })
    })
    /* 
    const list = document.getElementsByClassName('cardList')[0]; */