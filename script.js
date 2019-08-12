jQuery(document).ready(function($){
    gamburger();
    showForm();
    redrawDotNav();
    $(window).bind('scroll',function(e){redrawDotNav();});
    $('.logo').click(function(){$('html, body').animate({scrollTop:0}, 1500);return false;});
    $('.step__one').click(function(){$('html, body').animate({scrollTop:0}, 1500);return false;});
    $('.step__two').click(function(){$('html, body').animate({scrollTop:$('#fem-scroll').offset().top}, 1500);return false;});
    $('.step__three').click(function(){$('html, body').animate({scrollTop:$('#bjud-scroll').offset().top}, 1500);return false;});
    $('#arrow-one').click(function(){$('html, body').animate({scrollTop:$('#fem-scroll').offset().top}, 1500);return false;});
    $('#arrow-two').click(function(){$('html, body').animate({scrollTop:$('#bjud-scroll').offset().top}, 1500);return false;});
});
function redrawDotNav(){
    const section1Top =  0;
    const section2Top =  $('#fem-scroll').offset().top - (($('#bjud-scroll').offset().top - $('#fem-scroll').offset().top) / 3);
    const section3Top =  $('#bjud-scroll').offset().top - (($(document).height() - $('#bjud-scroll').offset().top) / 3);
    
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
        $('nav .step__one ').addClass('active-a');
        $('nav .step__two').removeClass('active-a');
        $('nav .step__three').removeClass('active-a');
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
        $('nav .step__two').addClass('active-a');
        $('nav .step__one').removeClass('active-a');
        $('nav .step__three').removeClass('active-a');
    } else if ($(document).scrollTop() >= section3Top){
        $('nav .step__three').addClass('active-a');
        $('nav .step__one').removeClass('active-a');
        $('nav .step__two').removeClass('active-a');
    }

}

function showForm(){
    const form = document.querySelector('form');
    $('#showForm').click(function(){
        form.style.display = "flex";
    })
    $('#enterForm').click(function(){
        form.style.display = "none";
    })
}

function gamburger(){
    const step = document.querySelector('.step');
    const gamburger = document.querySelector('.gamburger');
    const widthWin = $( window ).width();
    console.log(widthWin);
    $(".gamburger").click(function(){
        step.style.display = "flex";
        gamburger.style.display ="none";
    })
    $(".step a").click(function(){
        if(widthWin < 991){
            gamburger.style.display = "flex";
            step.style.display ="none";
        }
       
    })
}

