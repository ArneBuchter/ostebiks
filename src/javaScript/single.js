document.addEventListener('DOMContentLoaded', () => {

    let params = new URLSearchParams(document.location.search);
    const produktSku = parseInt(params.get('sku'));
       
    
    fetch('/assets/data/produkter.json')
        .then(Response => Response.json())
        .then(function(data) {
            const produkt = data.find( function (Element) {
                return Element.sku === produktSku;
            })
            document.querySelector('.kort__img').src = `/assets/images/${produkt.billeder[0]}`;
            document.querySelector('.kort__tekst').innerText = `${produkt.beskrivelse[0] + produkt.beskrivelse[1]}`;
            document.querySelector('a').innerText = ``;
            document.querySelector('#imgOne').src = `/assets/images/${produkt.billeder[1]}`;
            document.querySelector('#imgtwo').src = `/assets/images/${produkt.billeder[2]}`;
            document.querySelector('#imgthree').src = `/assets/images/${produkt.billeder[3]}`;
            document.querySelector('#imgfour').src = `/assets/images/${produkt.billeder[0]}`;
            document.querySelector('.country').innerText = produkt.land;
            document.querySelector('.weight').innerText = produkt.vægt;
            document.querySelector('.price').innerText = produkt.pris;
            
        }) 
        document.querySelector('.gallery').addEventListener('click', function(e){
            if(e.target.classList.contains('gallery__img')){
                document.querySelector('.kort__img').src = e.target.src;
            }
        })
    })
    /* 
    const list = document.getElementsByClassName('cardList')[0]; */