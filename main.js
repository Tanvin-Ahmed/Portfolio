//  navbar
document.querySelector('.-toggle').addEventListener('click', function(){
    document.querySelector('body').classList.toggle('open')
})

// fiter project
$(document).ready(function () {

        // init Isotope
        var $grid = $('.grid').isotope({
            // options
        });
        // filter items on button click
        $('.project .filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter')
            $grid.isotope({ filter: filterValue })
        })

        // img carosel
        $('.project .grid .element-item .our-project .img .test-popup-link').magnificPopup({
            type: 'image',
            gallery:{enabled:true}
          });

        //    carousel

        $('.about .carousel .-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                544:{
                    items:2
                }
            }
        })

})

// smooth scrolling efect
var scroll = new SmoothScroll('a[href*="#"]',{
    speed:1000,
    speedAsDuration:true
})
