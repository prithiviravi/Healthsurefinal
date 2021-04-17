$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
        
    })
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active")
    })

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id= $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active')
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });
});

