$(document).ready(function(){
  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(window).scroll(function() {
      $('.infoSeccion').each(function () {
        let visible = true;
        let windowTop = $(document).scrollTop();
        let windowBottom = windowTop + window.innerHeight;
        let elementPositionTop = $(this).offset().top;
        let elementPositionBottom = elementPositionTop + $(this).height();
        if (elementPositionTop >= windowBottom || elementPositionBottom <= windowTop) {
            visible = false;
        }
        if (visible == true) {
          $(this).css({'visibility' : ''});
          $(this).addClass("fadeIn");
        }
      });
    });
    
    $(window).scroll(function() {
      $('.marcas').each(function () {
        let visible = true;
        let windowTop = $(document).scrollTop();
        let windowBottom = windowTop + window.innerHeight;
        let elementPositionTop = $(this).offset().top;
        let elementPositionBottom = elementPositionTop + $(this).height();
        if (elementPositionTop >= windowBottom || elementPositionBottom <= windowTop) {
            visible = false;
        }
        if (visible == true) {
          $(this).css({'visibility' : ''});
          $(this).addClass("fadeIn");
        }
      });
    });
    
    $(window).scroll(function() {
      $('.textInfo').each(function () {
        let visible = true;
        let windowTop = $(document).scrollTop();
        let windowBottom = windowTop + window.innerHeight;
        let elementPositionTop = $(this).offset().top;
        let elementPositionBottom = elementPositionTop + $(this).height();
        if (elementPositionTop >= windowBottom || elementPositionBottom <= windowTop) {
            visible = false;
        }
        if (visible == true) {
          $(this).css({'visibility' : ''});
          $(this).addClass("slideLeft");
        }
      });
    });
    
    $(window).scroll(function() {
      $('.imgInfo').each(function () {
        let visible = true;
        let windowTop = $(document).scrollTop();
        let windowBottom = windowTop + window.innerHeight;
        let elementPositionTop = $(this).offset().top;
        let elementPositionBottom = elementPositionTop + $(this).height();
        if (elementPositionTop >= windowBottom || elementPositionBottom <= windowTop) {
            visible = false;
        }
        if (visible == true) {
          $(this).css({'visibility' : ''});
          $(this).addClass("slideRight");
        }
      });
    });
    

  }
  else {
    $('.infoSeccion').each(function() {
      $(this).css({'visibility' : ''});
    });
    $('.marcas').each(function() {
      $(this).css({'visibility' : ''});
    });
    $('.textInfo').each(function() {
      $(this).css({'visibility' : ''});
    });
    $('.imgInfo').each(function() {
      $(this).css({'visibility' : ''});
    });
  }

})

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



