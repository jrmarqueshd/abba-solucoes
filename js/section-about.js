//pick cards
const $quality = document.querySelector(".about-card.quality");
const $who = document.querySelector(".about-card.who");
const $partners = document.querySelector(".about-card.partners");

//pick desc
let $_quality = document.querySelector(".desc-toggle._quality");
let $_who = document.querySelector(".desc-toggle._who");
let $_partners = document.querySelector(".desc-toggle._partners");

//add event
$quality.addEventListener("click", showHide_quality);
$who.addEventListener("click", showHide_who);
$partners.addEventListener("click", showHide_partners);

//functions
function showHide_quality(){
    $_quality.classList.toggle("-hidden");

    if($_who.classList.contains("-hidden") == false || $_partners.classList.contains("-hidden") == false){
        $_who.classList.add("-hidden");
        $_partners.classList.add("-hidden");
    }
}

function showHide_who(){
    $_who.classList.toggle("-hidden");

    if($_quality.classList.contains("-hidden") == false || $_partners.classList.contains("-hidden") == false){
        $_quality.classList.add("-hidden");
        $_partners.classList.add("-hidden");
    }
}

function showHide_partners(){
    $_partners.classList.toggle("-hidden");

    if($_who.classList.contains("-hidden") == false || $_quality.classList.contains("-hidden") == false){
        $_who.classList.add("-hidden");
        $_quality.classList.add("-hidden");
    }
}

