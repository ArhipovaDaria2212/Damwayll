var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    center: true,
    startPosition: 1,
    items: 3,
    dots: false,
    margin: 30,
    responsive: { //Адаптация в зависимости от разрешения экрана
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
})

