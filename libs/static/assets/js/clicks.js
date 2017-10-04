$(window).resize(function(){
   var width = $(window).width();
   if(width<990){
     $('#border.about').show();
   }
   else{
     $('#border.about').hide();
   }
 })
 .resize();


  var sections = $('section')
   , nav = $('nav')
   , nav_height = nav.outerHeight();

 $(window).on('scroll', function () {
   var cur_pos = $(this).scrollTop();

   sections.each(function() {
     var top = $(this).offset().top - nav_height,
         bottom = top + $(this).outerHeight();

     if (cur_pos >= top && cur_pos <= bottom) {
       nav.find('a').removeClass('active');
       sections.removeClass('active');

       $(this).addClass('active');
       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
     }
   });
 });

 nav.find('a').on('click', function () {
   var $el = $(this)
     , id = $el.attr('href');

   $('html, body').animate({
     scrollTop: $(id).offset().top - nav_height
   }, 500);

   return false;
 });

$(window).scroll(function(event){
   var contTop = $(this).scrollTop();
   var textpos = $('.top-wrapper').offset().top;
   if(textpos <= contTop){
     $('.top-text').hide('slow');
     $('#button-top').hide('slow')
   }if(contTop < textpos) {
     $('.top-text').show('slow');
    $('#button-top').show('slow')
   }
  if (contTop >= 600){
    $('.nav-bar').css('background','rgb(250, 250, 250)');
    $('.nav-bar').css('box-shadow', '0px 2px 8px  #888888');
    $('nav a').css('color', '#FDCD3B');
  }if(contTop < 600){

    $('.nav-bar').css('background', 'none');
    $('.nav-bar').css('box-shadow', 'none');
    $('nav a').css('color', 'white');
  }
});

// scroll to div on click section

$("body").on('click', '.pointer-wrap a', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top
    }, 700);
});

$("body").on('click', '.pointer-wrap svg', function() {
    $('html, body').animate({
        scrollTop: $(".container").offset().top - 50
    }, 700);
});

$('body').on('click touchstart', '#button-top h4', function() {
    $('html, body').animate({
        scrollTop: $('.email-sect').offset().top - 50
    }, 700);
});

$('body').on('click touchstart', '.work', function() {
    $('html, body').animate({
        scrollTop: $('.work-sect').offset().top - 50
    }, 700);
});

$('body').on('click touchstart', '.about', function() {
    $('html, body').animate({
        scrollTop: $('.about-sect').offset().top - 100
    }, 700);
});

$('body').on('click touchstart', '.cont', function() {
    $('html, body').animate({
        scrollTop: $('.email-sect').offset().top - 100
    }, 700);
});

  //hide scroll on modal
$('body').on('click','.btn', function(){
    $('body').css('overflow-y', 'hidden');
    $('body').css('overflow-x', 'hidden');
}).on('click','.cd-modal-close', function(){
    $('body').css('overflow-x', 'visible');
    $('body').css('overflow-y', 'visible');
})
