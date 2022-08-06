$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
$( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');

