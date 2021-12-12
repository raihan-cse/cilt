$(document).ready(function () {
    $(".partners_slider").owlCarousel({
        items: 3,
        margin: 16,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<img src="assets/images/icons/angle-left-small.svg" alt="angle left">', '<img src="assets/images/icons/angle-right-small.svg" alt="angle right">'],
        responsive: {
            0: {
                items: 2,
                nav: false,
                // stagePadding: 42,
            },
            600: {
                items: 3,
            },
            800: {
                items: 6,
            }
        }
    });
})