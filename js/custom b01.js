$(function () {
    // 윈도우 스크롤 할 때, sct는 윈도우 스크롤 탑에, 만약 sct가 0보다 크면 .header에 on을 붙이고 아니면 떼라 //
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    // 스와이퍼를 써 보아요! //
    let snum = 1;
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
        on: {
            init: function () {
                // console.log('하이', this.realIndex, this.slides.length, this);
                $('.num span').text(this.realIndex + 1);
                $('.num strong').text(this.slides.length);
            },
            slideChangeTransitionEnd: function () {
                $('.num span').text(this.realIndex + 1);
                $('.cicle span:nth-child(1)').css({
                    transform: 'translate(-50%, 0) rotate(' + snum * 45 + 'deg)'
                });
                snum = snum + 1;
            }
        },
    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    $('.main_visual .slide_dots li').on('click', function () {
        let idx = $(this).index();
        mainSlide.slideTo(idx);
        $(this).addClass('on').siblings().removeClass('on');
    });

})