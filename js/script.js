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


$(".menu-item").click(function() {
  var num = $(".menu-item").index(this);
  $(".text-item,.img-item").addClass('tab_hidden');
  $(".text-item").eq(num).removeClass('tab_hidden');
  $(".img-item").eq(num).removeClass('tab_hidden');
});


// ハンバーガー メニュー
$('.burger-btn').on('click',function(){
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');
});

$('.nav-list a').on('click', function() {
      
  $('.header-nav').slideToggle();

  $('.header-nav').removeClass('active');

});

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
