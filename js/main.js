let firstSection = $("#home").offset().top
let secondSection = $("#about").offset().top
let thirdSection = $("#team").offset().top
let forthSection = $("#services").offset().top
let fifthSection = $("#pricing").offset().top
let sixthSection = $("#contact").offset().top


$(window).scroll(function(){

    let changescroll = $(window).scrollTop();

    if (changescroll > firstSection  ) {

        //scroll button
        


        //nav bar
        $(".navbar").removeClass("bg-transparent")
        $(".navbar").addClass("navbarbg")
        $('#home .nav-link').css("color" , "black")
        $('.social a').css("color" , "black")
        $('.navbar-brand').css("color" , "black")
        $('.navbar .social').css("border-left" , '2px solid black')

        // $(".navbar .container").removeClass("mt-3")
        // $(".navbar .container").addClass("mt-0")

    }
    else
    {

        
        $(".navbar").addClass("bg-transparent")
        $(".navbar").removeClass("navbarbg")
        $('#home .nav-link').css("color" , "white")
        $('.social a').css("color" , "white")
        $('.navbar-brand').css("color" , "white")
        $('.navbar .social').css("border-left" , '2px solid white')
        // $(".navbar .container").addClass("mt-3")
        // $(".navbar .container").removeClass("mt-0")

    }
    

    if (changescroll > secondSection  ) {
      $(".go-up").fadeIn(500)

    }
    else 
    {
      $(".go-up").fadeOut(300)
    }
    

})


$(".go-up").fadeOut(10)

$(".forUP").click(function(){

    $("html , body").animate( { scrollTop: "0"} , 1000 )

})

$(".home").click(function(){

    $("html , body").animate( { scrollTop: "0"} , 1000 )

})

$(".about").click(function(){

    $("html , body").animate( { scrollTop: secondSection} , 1000 )

})

$(".team").click(function(){

    $("html , body").animate( { scrollTop:thirdSection } , 1000 )

})
$(".services").click(function(){

    $("html , body").animate( { scrollTop:forthSection } , 1000 )

})
$(".pricing").click(function(){

    $("html , body").animate( { scrollTop: fifthSection} , 1000 )

})

$(".contact").click(function(){

    $("html , body").animate( { scrollTop: sixthSection} , 1000 )

})