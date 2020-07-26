$(document).ready(function () {
    catalog_slide();
    carousel_launch();
    menu_item_active();
    search_mobile();
    width768();
    cart_show();
    sort_by();
    images_carousel();
    equipment_choice();
    plus_minus();
    galery_count();
    checkout();
    form_change();
    map_launch();  
    modal();
    side_filters();
    video_modal();
    opacity_slides();
    
    if ( $('.bread-list li:visible').length == 0) {
        $('.bread-wrap').hide();
    }
    
    if ( $(window).outerWidth() < 768 ) {
        $('.news-row, .products-row, .choose-wrap').find('.slick-active').next().addClass('slide-next');
        $('.news-row, .products-row, .choose-wrap').find('.slick-active').prev().addClass('slide-prev');
        $('.news-row, .products-row, .choose-wrap').find('.slick-active').removeClass('slide-prev slide-next');
    }
    
});

$(window).resize(function () {
    width768();
});

function opacity_slides() {
    $('.slick-arrow').on('click', function() {
        if ( $(window).outerWidth() < 768 ) {
            $(this).closest('.news-row, .products-row, .choose-wrap').find('.slick-active').next().addClass('slide-next');
            $(this).closest('.news-row, .products-row, .choose-wrap').find('.slick-active').prev().addClass('slide-prev');
            $(this).closest('.news-row, .products-row, .choose-wrap').find('.slick-active').removeClass('slide-prev slide-next');
        }
    });
}

function video_modal() {
        if ( $(window).outerWidth() > 767 ) {
            $('.single-video').bind('vclick click',function() {
                    if ( !$('.video-js').hasClass('modal-video') ) {
                        $(this).find('.video-js').addClass('modal-video').fadeIn();
                        $('.black-sheet').fadeIn('fast');
                        $('.close-video').fadeIn('fast');
                    }
            });
        }
}

function side_filters() {
    if ( $(window).outerWidth() < 1200 ) {
        
        $('.filters-content').css('left', - $('.filters-content').outerWidth());
        
        $('.filters-header, .filters-close').on('click', function() {
            
            if ( !$('.filters-content').hasClass('open') ) {
                $('.filters-content').addClass('open').css('left',0);
                $('.black-sheet').fadeIn('fast');
            } else {
                $('.filters-content').removeClass('open').css('left', - $('.filters-content').outerWidth());
                $('.black-sheet').fadeOut('fast');
            }
            
        });
        
        
    }
}

function modal() {
    $('.modal-close').on('click', function() {
        $('.black-sheet').fadeOut('fast');
        $(this).closest('.modal').fadeOut('fast');
    });
    
    $('.modal-trigger').on('click', function() {
        var toggle_name = $(this).attr('data-toggle');
        //console.log(toggle_name);
        $('.black-sheet').fadeIn('fast');
        $('.modal.'+toggle_name).fadeIn('fast');
    });
    
    $('.modal .send-request-btn').on('click', function() {
        $('.modal').fadeOut('fast');
        $('.modal.success-popup').fadeIn('fast');
    });
}

function width768() {

    if ($(window).outerWidth() < 768) {

        if (!$('.choose-wrap').hasClass('carousel')) {

            $('.choose-wrap').slick({
                infinite: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                swipe: false,
            });

            $('.choose-wrap').addClass('carousel');

        }

        if (!$('.main-nav .cart-wrap').length > 0) {
            $('.cart-wrap').appendTo('.main-nav');
        }
        
        $('.cart-outer').on('click', function () {
            //$('.black-sheet').fadeToggle('fast');    
        });
        

    } else {


        if ($('.choose-wrap').hasClass('carousel')) {

            $('.choose-wrap').slick('unslick');
            $('.choose-wrap').removeClass('carousel');

        }

        if ($('.main-nav .cart-wrap').length > 0) {
            $('.cart-wrap').appendTo('header .bottom-header');
        }

    }

}

function map_launch() {
    
    if (!$("#map").length == 0) {
        ymaps.ready(init);
        function init(){ 
            // Создание карты.    
            var myMap = new ymaps.Map("map", {
                controls: ['zoomControl'],
                center: [59.93982996930304,30.31454337190727],
                zoom: 13
            })
            myPlacemark = new ymaps.Placemark([59.93982996930304,30.31454337190727], {
                balloonContent: 'LiderPart <br>г. Санкт-Петербург, ул. Софийская 17, <br>БЦ Формула, 4 этаж, офис 407.',
            }, {
                iconLayout: 'default#image',
                iconImageHref: "data:image/svg+xml,%3Csvg width='42' height='60' viewBox='0 0 42 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40.5637 15.038C40.3537 14.2509 39.9272 13.4122 39.6117 12.678C35.8364 3.60506 27.5875 0.353516 20.927 0.353516C12.0106 0.353516 2.19025 6.33233 0.87915 18.6561V21.1739C0.87915 21.279 0.915364 22.2229 0.966804 22.695C1.70178 28.5682 6.33616 34.8101 9.79731 40.6833C13.521 46.9759 17.3849 53.1659 21.213 59.3534C23.5735 55.3156 25.9254 51.2246 28.2321 47.2914C28.8608 46.137 29.5905 44.9834 30.2199 43.8816C30.6394 43.148 31.4407 42.4144 31.8068 41.7319C35.5304 34.9145 41.5239 28.0445 41.5239 21.2788V18.4994C41.524 17.766 40.6149 15.1962 40.5637 15.038ZM21.0902 27.6774C18.4692 27.6774 15.6004 26.3669 14.1844 22.7475C13.9734 22.1714 13.9904 21.0168 13.9904 20.9111V19.2853C13.9904 14.6714 17.9081 12.5732 21.3163 12.5732C25.5121 12.5732 28.7572 15.9301 28.7572 20.1259C28.7572 24.3216 25.2861 27.6774 21.0902 27.6774Z' fill='%23fd5c48'/%3E%3C/svg%3E%0A",
                iconImageSize: [50, 50],
                iconImageOffset: [-25, -50]
            });
            myMap.geoObjects
                .add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    }
    
}

function catalog_slide() {

    $('.catalog-nav').on('click', function () {
        $('#catalog-menu').slideToggle('fast');
    });

}

function galery_count() {
    var img_total = $('.company-galery .single-image').length;
    $('.total-count').text(img_total);
    
    $('.company-galery').on('click', '.slick-arrow', function() {
        var img_current = $('.slick-current').index() + 1;
        $('.current-index').text(img_current);
    });
    
    $('.company-galery').on('mouseup', function() {
        var img_current = $('.slick-current').index() + 1;
        $('.current-index').text(img_current);
    });
}

function plus_minus() {
    $('.less').click(function () {
        var $input = $(this).closest('.quantity').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.more').click(function () {
        var $input = $(this).closest('.quantity').find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
}

function cart_show() {
    
    $('.cart-outer').on('click', function() {
        $('.cart-content').slideToggle('fast');
        $(this).toggleClass('pop-up');
        $('.black-sheet').fadeToggle('fast');    
    });
    
    $('.close-cart-content').on('click', function() {
        $('.cart-content').slideUp('fast');
        $('.black-sheet').fadeOut('fast');  
        $('.cart-outer').removeClass('pop-up');
    });
    
}

function sort_by() {
    
    $('.sort-by').on('click', function() {
        $(this).toggleClass('open');
        $(this).find('.sort-content').slideToggle('fast');
    });
    
}

function carousel_launch() {
        
    $('.company-galery.carousel').slick({
        infinite: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipe: false,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.products-row.carousel').slick({
        infinite: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.news-row.carousel').slick({
        infinite: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: false,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.carousel').each(function () {

        var carousel_show = $(this).closest('.container').find('.menu-item.active').find('a').attr('data-toggle');
        //console.log(carousel_show)
        if (($(this).attr('id') !== carousel_show) && ($(this).parent().find('.carousel').length != 1)) {
            $(this).hide();
        }
        
    });
    
    $('.info-wrap').hide();
    
    $('.info-wrap').each(function () {
        var info_show = $('.info-nav').find('li.active a').attr('data-toggle');

        if ($(this).attr('id') == info_show) {
            $(this).show();
        } 
    });
        
    $('.images-carousel').slick({
        infinite: false,
        vertical:true,
        verticalSwiping:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.preview .carousel-nav .up'),
        nextArrow: $('.preview .carousel-nav .down'),
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical:false,
                    verticalSwiping:false,
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

}

function checkout() {
    $('.left .checkout-item').on('click', function() {
        $(this).closest('.checkout-header').find('.checkout-item').removeClass('active');
        $(this).addClass('active');
    });
}

function equipment_choice() {
    
    $('.equipment-choice').on('click', function() {
        $('.equipment-content').slideToggle('fast');
        $(this).find('.title').toggleClass('open');
    });
    
}

function images_carousel() {
    $('.images-carousel .img-container').first().find('img').clone().appendTo('.main-img');
    
    $('.preview .carousel-nav .down, .preview .carousel-nav .up').on('click', function() {
        $('.main-img img').remove();
        $('.images-carousel').find('.slick-current img').clone().appendTo('.main-img');
    });
    
    $('.slick-slide').on('click', function() {
        $('.main-img img').remove();
        $(this).find('img').clone().appendTo('.main-img');
    });
}

function form_change() {
    $('.checkout-form .left .checkout-item').on('click', function() {
        var data_name = $(this).attr('data-toggle');
        
        
        $('.checkout-form .left').find('.checkout-content').hide();
        $('.checkout-form .left').find('.checkout-content[id^=' + data_name + ']').fadeIn('fast');
        $('.checkout-form .left .checkout-item').removeClass('active');
        $(this).addClass('active');
    });
}

function menu_item_active() {
    
    $('.menu-item').on('click', function () {
        var carousel_name = $(this).find('a').attr('data-toggle');
        $(this).closest('.container').find('.carousel').hide().get(0).slick.setPosition();
        $(this).closest('.container').find('.carousel[id^=' + carousel_name + ']').fadeIn('fast').get(0).slick.setPosition();

        $(this).closest('nav').find('.menu-item').removeClass('active');
        $(this).addClass('active');

    });

    
    $('.info-nav li').on('click', function () {
        var info_title = $(this).find('a').attr('data-toggle');

        $(this).closest('.container').find('.info-wrap').hide();
        $(this).closest('.container').find('.info-wrap[id^=' + info_title + ']').fadeIn('fast');
        
        $(this).closest('.info-nav').find('li').removeClass('active');
        $(this).addClass('active');

    });
    
    
}

function search_mobile() {
    $('.bottom-header .blue-btn').on('click', function () {
        if ( $(window).outerWidth() < 1200 ) {

            $(this).parent().find('.inp-custom').animate({
                width: 'toggle',
                padding: 'toggle',
            }, 250);
        
        }
    });
}

$('.mobile-menu-btn').on('click', function () {
    //$('.slideup').slideUp('fast');
    $('.mobile-menu-wrap').slideToggle('fast', function () {
        if ($(this).is(':visible'))
            $(this).css('display', 'flex');
    });
    $(this).find('.menu-title').toggleClass('open');
    $('.black-sheet').fadeToggle('fast');
    $(this).toggleClass('pop-up');
});

$('.black-sheet').on('click', function () {
    $('.mobile-menu-wrap, .cart-content').slideUp('fast');
    $('.menu-title').removeClass('open');
    $(this).fadeOut('fast');
    $('.modal').fadeOut('fast');
    $('.cart-outer, .mobile-menu-btn').removeClass('pop-up');
    $('.filters-content').removeClass('open').css('left', - $('.filters-content').outerWidth());
    reload_video();
    $('.modal-video').removeClass('modal-video');
});

$('.close-video').on('click', function() {
    $(this).fadeOut('fast');
    reload_video();
    $('.modal-video').removeClass('modal-video');
    $('.black-sheet').fadeOut('fast');
});

function reload_video() {
    var video_id = $('.modal-video').find('video').attr('id');
    $('#'+video_id).get(0).pause();
    $('#'+video_id).get(0).currentTime = 0;
    $('#'+video_id).get(0).load();
}

$('.mobile-menu').addClass('open');


$('.mobile-nav .menu-wrap').on('click', function () {
    $('.mobile-menu').addClass('open');
    $('.mobile-catalog').removeClass('open');
});

$('.mobile-nav .catalog-wrap').on('click', function () {
    $('.mobile-menu').removeClass('open');
    $('.mobile-catalog').addClass('open');
});

$(".item").slideDown({
    start: function () {
        $(this).css({
            display: "flex"
        })
    }
});
