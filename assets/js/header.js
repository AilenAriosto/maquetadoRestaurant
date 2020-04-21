$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).width() >= 800){

            if( $(this).scrollTop() > 0 ){
                $('nav').addClass('home_sectionBackground_header_nav--scroll');
                $('.header-logo').addClass('header-logo--scroll');
                $('.home_sectionBackground_header_nav_ul_li__a').addClass('home_sectionBackground_header_nav_ul_li__a--scroll');
            } else {
                $('nav').removeClass('home_sectionBackground_header_nav--scroll');
                $('.header-logo').removeClass('header-logo--scroll');
                $('.home_sectionBackground_header_nav_ul_li__a').removeClass('home_sectionBackground_header_nav_ul_li__a--scroll');

            }
        }
    })
});

  