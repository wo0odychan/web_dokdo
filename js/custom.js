$(function () {
    // 윈도우 스크롤 할 때, sct는 윈도우 스크롤 탑에, 만약 sct가 0보다 크면 .header에 on을 붙이고 아니면 떼라 //
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    });

    $('.mobil_btn').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.header').toggleClass('on')
    });

    $('.gnb .menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            // 메뉴 리스트 덮어버리기//
            $(this).parent().siblings().find('.sub').stop().slideUp();
        }

    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on')
    });

    $('.gnb').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }

    })

    // 스와이퍼를 써 보아요! //
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });


    const noticeSlide = new Swiper('.notice_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });

    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    });
    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    });



})