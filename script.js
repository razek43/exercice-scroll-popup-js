// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector ("#navbar");
const imgImprovise = document.querySelector ("#imgImprovise");
const popup = document.querySelector ("#popup");
let lastScroll = 0;
let playOnce = true;



window.addEventListener ("scroll", () => {

    if (window.scrollY > lastScroll) {
        navbar.style.height = "45px";
    } else {
        navbar.style.height = "90px";
    }
    lastScroll = window.scrollY;

// image 
// Pour l'image avec la méthode suivante que j'ai fait ne marche pas de la même manière selon la taille de l'écran


/*if  (window.scrollY >= 300) {
imgImprovise.style.opacity = "1";
imgImprovise.style.transform = "translateX(10px)";
}*/
/*nous allons alorsfaire la formule suivante pour avoir enquelque sorte le pourcentage de la hauteur de l'écran, pour ne pas mettre des pixels en transfrom = translate 
let crollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
window.scrollY est notre niveau de scroll
window.innerHeight est la partie quireste du scroll (si en regarde la barre de scroll il reste toujours environ 30% de la page)
document.body.offsetHeight est la taille de la page sans la window.innerHeight

*/
let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
if (scrollValue > 0.45 ) {
imgImprovise.style.opacity = "1";
imgImprovise.style.transform = "translateX(10px)";
}

if (scrollValue > 0.70 && playOnce) {
        popup.style.opacity = "1";
        popup.style.transform = "translateX(0px)";
        playOnce = false;
        

    }
    
});

closeBtn.addEventListener ("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(500px)";
    

});



