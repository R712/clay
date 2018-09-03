$(document).ready(function ($) {
    $('.scroll').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
    $('header li a').click(function(){
        $('header li').removeClass('is-current');
        $(this).parent('li').addClass('is-current');
    });
    $('#hero p a').click(function(){
        $('header li').removeClass('is-current');
        $('header li:nth-child(2)').addClass('is-current');
    });
    $('[data-clayview-label]').click(function(){
        $('[data-clayview-label]').removeClass('current').find('.screen').fadeOut(); 
        $(this).addClass('current').find('.screen').fadeIn();
    });
});