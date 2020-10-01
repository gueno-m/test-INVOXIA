// INITIALISER LE SLIDER

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});

// COULEURS DES BOUTONS POUR CHOISIR LA TAILLE

let btnContainer = document.getElementById("buttons");
let btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("check");
        current[0].className = current[0].className.replace("check", "");
        this.className += "check";
        console.log(i)
    });
}

// CHANGER L'AFFICHAGE DU PRIX

btns[0].addEventListener("click", function() {
    $(".buy p span").html("59");
});

btns[1].addEventListener("click", function() {
    $(".buy p span").html("70");
});

// COLLASPES

let coll = document.getElementsByClassName("item-header");

for (let c = 0; c < coll.length; c++) {
    coll[c].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            $(".accordeon-icon").html("⬇");

        } else {
            content.style.display = "block";
            $(this).children(".accordeon-icon").html("⬆");
        }
    });
}