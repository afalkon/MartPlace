$(document).ready(function() {
    $('.featuredProducts__slider').slick({
        prevArrow: '<button type="button" class="featuredProducts__slider-prevArrow"><img src="../images/icons/productsSliderChevronPrev.png"</button>',
        nextArrow: '<button type="button" class="featuredProducts__slider-nextArrow"><img src="../images/icons/productsSliderChevronNext.png"</button>'
    });
    $('.followersFeed__inner-slider').slick({
        prevArrow: '<button type="button" class="followersFeed__slider-prevArrow"><img src="../images/icons/productsSliderChevronPrev.png"</button>',
        nextArrow: '<button type="button" class="followersFeed__slider-nextArrow"><img src="../images/icons/productsSliderChevronNext.png"</button>',
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});

var mixer = mixitup('.newestProducts__inner-items');


