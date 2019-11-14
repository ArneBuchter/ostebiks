document.addEventListener("DOMContentLoaded", function() {

    const cardTemplate = document.getElementById("cardTemplate");
    const list = document.getElementsByClassName("cardList")[0];
    const db = firebase.firestore();

    db.collection("bread").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

            console.log(doc.id, " => ", doc.data());
            const clone = cardTemplate.content.cloneNode(true);
            
            clone.querySelector(".kort__h2").innerText = doc.data().name;
            clone.querySelector(".kort__img").src = `/assets/images/${doc.data().image[0]}`;
            clone.querySelector(".country").innerText = doc.data().country;
            clone.querySelector(".price").innerText = doc.data().price;
            clone.querySelector(".region").innerText = doc.data().region;
            clone.querySelector(".category").innerText = doc.data().category;
            clone.querySelector('a').href = `/bread/?sku=${doc.id}`;
            list.appendChild(clone); 
        });
    });

});