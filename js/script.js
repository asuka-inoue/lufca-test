$(window).scroll(function() {
  var windowH = $(window).height(),
    scrollY = $(window).scrollTop();
  $('.fadein').each(function() {
    var elPosition = $(this).offset().top;
    if (scrollY > elPosition - windowH) {
      $(this).addClass("txt-effect");
    }else{
      $(this).removeClass("txt-effect") ;
  }
  });
});


$(window).scroll(function() {
  var windowH = $(window).height(),
    scrollY = $(window).scrollTop();
  $('.fade-in').each(function() {
    var elPosition = $(this).offset().top;
    if (scrollY > elPosition - windowH) {
      $(this).addClass("in");
    }else{
      $(this).removeClass("in") ;
  }
  });
});


$(function(){
  var $win = $(window),
      $header = $('.header'),
      headerHeight = $header.outerHeight();
    $win.on('load scroll',function(){
      var value = $(this).scrollTop();
      
        if( value > headerHeight){
          $('.main-copy').addClass('fadeout');
        }else{
          $('.main-copy').removeClass('fadeout');
        }
      
    });
});

$(function(){
  $('.menu-item').on('click touchstart',function() {
    var num = $('.menu-item').index(this);
    $('.text-item,.img-item').addClass('tab_hidden');
    $('.menu-item').removeClass('active');
    $('.text-item').eq(num).removeClass('tab_hidden');
    $('.img-item').eq(num).removeClass('tab_hidden');
    $('.menu-item').eq(num).addClass('active');
  });
 });


$(function(){
  $('.nav-item').on('click touchstart',function(){
    var num = $('.nav-item').index(this);
    $('.nav-item').removeClass('active');
    $('.nav-item').eq(num).addClass('active');
  });
 });


// ハンバーガー メニュー
$('.burger-btn').on('click',function(){
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
  if ($(this).hasClass('cross')) {
    $('.header-nav').addClass('active');
} else {
    $('.header-nav').removeClass('active');
}
});


$('.nav-list .nav-item a').on('click', function() { 
  if($(window).width() < 769){
    $('.header-nav').removeClass('active');
    $('.header-nav').css({'display': 'none'});
    $('.burger-btn').removeClass('cross');
  }else{
    $('.header-nav').css({'display': 'block'});
    $('.header-nav').addClass('active');
    $('.burger-btn').addClass('cross');
  }
});

//ロード画面
var bg = document.getElementById('loader-bg'),
    loader = document.getElementById('loader');
/* ロード画面の非表示を解除 */
bg.classList.remove('is-hide');
loader.classList.remove('is-hide');

/* 読み込み完了 */
window.addEventListener('load', stopload);

/* 10秒経ったら強制的にロード画面を非表示にする */
setTimeout('stopload()',10000);

/* ロード画面を非表示にする処理 */
function stopload(){
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
}

// スライダー
$(function() {
  var mainSlider = '.slider-for'; //メインスライダー
 var thumbnailSlider = '.slider-nav'; //サムネイルスライダー
  $(mainSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: thumbnailSlider
  });  
  $(thumbnailSlider).slick({
    slidesToShow: 3,
    asNavFor: mainSlider,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '12%',
    arrows: true
  }); 

  $(thumbnailSlider + '.slick-slide').on('click',function(){
    var index = $(this).attr('data-slick-index');
    $(thumbnailSlider).slick('slickGoTo',index,false);
  });
//   $(mainSlider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     if ($(thumbnailSlider).length < 4) {
//         $(thumbnailSlider).slick('slickSetOption', 'centerMode', true, true);
//     }
// });
});
