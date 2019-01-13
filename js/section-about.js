// alert("debug");

const $card = document.querySelector(".about-card");
$card.addEventListener("click", showOrHide);

let $div = document.querySelector(".teste1");

function showOrHide(){
    $div.classList.toggle("teste");
}