$(function(){
    /*alert('OK!');*/

    function scroll(position){
        $('html,body').animate({
            'scrollTop':position  
          },600);
    }
    
    $('.main-content a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top-100;
        scroll(position);
    });

    $('.footer-main-content a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top-100;
        scroll(position);
    })

    $(window).on('scroll load',function(){
        $('.effect-fade').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > position - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    });


    $('#title').fadeIn(2500);
    
    jQuery(window).scroll();
    
});
