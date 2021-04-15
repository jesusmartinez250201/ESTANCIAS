$(window).scroll(function() {
    $('.infoSeccion').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).css({'visibility' : ''});
        $(this).addClass("fadeIn");
      }
    });
  });

  $(window).scroll(function() {
    $('.imgInfo').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).css({'visibility' : ''});
        $(this).addClass("slideRight");
      }
    });
  });

  $(window).scroll(function() {
    $('.textInfo').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).css({'visibility' : ''});
        $(this).addClass("slideLeft");
      }
    });
  });

  $(window).scroll(function() {
    $('.marcas').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).css({'visibility' : ''});
        $(this).addClass("fadeIn");
      }
    });
  });

  function checkScroll(){
    let puntoY = $('#BarraNavegacion').height() * 2;
    if($(window).scrollTop() > puntoY){
      $('#BarraNavegacion').removeClass('navbar-transparent');
      $('#BarraNavegacion').addClass('bg-dark');
      $('.navbar').css({
        '-webkit-transition' : 'all 0.4s ease-out !important;',
        '-moz-transition' : 'all 0.4s ease-out !important;',
        '-o-transition' : 'all 0.4s ease-out !important;',
        '-ms-transition' : 'all 0.4s ease-out !important;',
        'transition' : 'all 0.4s ease-out !important;'});
    }
    else{
      $('#BarraNavegacion').addClass('navbar-transparent');
    }
  }

  if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
    checkScroll();
    });
  }