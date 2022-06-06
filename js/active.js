$(document) .ready(function(){

    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu'
    });
    


    /* project area */

    $('.service-active').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:0
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })





})