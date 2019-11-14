document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    let path = window.location.pathname.replace(/\/+$/, '');
    path = path[0] == '/' ? path.substr(1) : path;
    const skuId = params.get('sku');
    const db = firebase.firestore();
    let docRef = db.collection(path).doc(skuId);
    const template = document.querySelector('#template');
    const list = document.querySelector('.gallery');
    const container = document.getElementsByClassName("single")[0];

    docRef.get().then(function(doc) {
        container.querySelector(".article-header").innerText = doc.data().name;
        container.querySelector(".kort__img").src = `/assets/images/${doc.data().image[0]}`;
        container.querySelector(".price").innerText = doc.data().price;
        container.querySelector(".region").innerText = doc.data().region;
        container.querySelector(".country").innerText = doc.data().country;
        container.querySelector(".category").innerText = doc.data().category;

                
        doc.data().image.forEach(billede => {
            const clone = template.content.cloneNode(true);
            
            clone.querySelector(".gallery__img").src = `/assets/images/${billede}`;

            list.appendChild(clone);
        });

        document.querySelector('.gallery').addEventListener('click', function(e){
            if(e.target.classList.contains('gallery__img')){
                document.querySelector('.kort__img').src = e.target.src;
            }
        }) 
    })
    document.querySelector('.starlist').addEventListener('click', function(e){
        const stars = parseInt(e.target.dataset.rating);
        
        docRef.collection("ratings")
        .doc("rating")
        .update({
            usersRated: firebase.firestore.FieldValue.increment(1),
            totalStars: firebase.firestore.FieldValue.increment(stars)
        })
    })

    docRef.collection('ratings').doc("rating").onSnapshot(function(doc) {
        const usersRated = doc.data().usersRated;
        const totalStars = doc.data().totalStars;
        let average = totalStars / usersRated;
        if(isNaN(average)){
            average = 0;
        }
        container.querySelector('.placeholder').innerText = average.toFixed(1);
        container.querySelector('.placenumber').innerText = usersRated;
    })

}) //DOM