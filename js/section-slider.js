$('.single-item-rtl').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000
});

document.querySelector(".slick-prev").innerHTML = '<i class="fas fa-arrow-circle-left"></i>';
document.querySelector(".slick-next").innerHTML = '<i class="fas fa-arrow-circle-right"></i>';