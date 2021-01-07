$(window).on("load", function(){
    $(".loader .inner").fadeOut(500,function(){
       $(".loader").fadeOut(750);
    });
})

$(document).ready(function(){
    $('#slides').superslides({
        animation :"fade",
        play : 4000,
        pagination : false,
    });

    var typed = new Typed(".typed",{
        strings :["Computing Science Student."],
        startDelay : 1000,
        showCursor : false,
    });

   
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        autoplay:true,
        autoplayTimeout:2300,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    

 

    var skillsTopOffset = $(".skillsSection").offset().top;
    
    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: "easInOut",
                barColor : "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find(".percent").text(Math.round(percent));
                }
            });

        }
    });

    $("#navigation li a").click(function(e){

        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html,body").animate({scrollTop:targetPosition - 180 }, "slow");

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){

        var body = $("body");

        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");

        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});
