$("body").on('click', '.pointer a', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 1000);
});

$("body").on('click', '.pointer svg', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 1000);
});

$('body').on('click', '#button-top h3', function() {
    $('html, body').animate({
        scrollTop: $('.email-sect').offset().top
    }, 1500);
});

$('body').on('click','.btn', function(){
    $('body').css('overflow-y', 'hidden');
    $('body').css('overflow-x', 'hidden');
}).on('click','.cd-modal-close', function(){
    $('body').css('overflow-x', 'visible');
    $('body').css('overflow-y', 'visible');
})
