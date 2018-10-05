$(document).ready(function ($) {
    $('.scroll').on('click', function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
    $('.lang-selected').click(function(){
       $('.lang-list ul').toggle(); 
    });
    $('header li a').click(function(){
        $('header li').removeClass('is-current');
        $(this).parent('li').addClass('is-current');
    });
    $('#hero p a').click(function(){
        $('header li').removeClass('is-current');
        $('header li:nth-child(2)').addClass('is-current');
    });
    $('.tab-downloads li').click(function(){
        $('.tab-downloads li').removeClass('is-current');
        $(this).addClass('is-current');
        if ($(this).hasClass('tab-qrcode')) {
            $('.tab-content.tab-appstore').hide();
            $('.tab-content.tab-qrcode').fadeIn();
        } else {
            $('.tab-content.tab-qrcode').hide();
            $('.tab-content.tab-appstore').fadeIn();
        }
    });
    $('[data-clayview-label]').click(function(){
        $('[data-clayview-label]').removeClass('current').find('.screen').fadeOut(); 
        $(this).addClass('current').find('.screen').fadeIn();
    });
    /* ========================================== 
    scrollTop() >= 300
    Should be equal the the height of the header
    ========================================== */
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
});