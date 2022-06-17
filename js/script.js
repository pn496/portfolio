/*-------------------------------------------
AOS animation (Skills)
-------------------------------------------*/
AOS.init({
  duration: 3000
});
/*-------------------------------------------
Menu/Top btn
-------------------------------------------*/
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});
$(function() {
  // 変数にクラスを入れる
  var btn = $('.btn-menu');
  //スクロールしてページトップから1に達したらボタンを表示
$(window).on('load scroll', function(){
  if($(this).scrollTop() > 270) {
  btn.addClass('active');
  }else{
  btn.removeClass('active');
  }
  });
});
$(function() {
  // 変数にクラスを入れる
  var btn = $('.page_top');
  //スクロールしてページトップから1に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 1) {
    btn.addClass('active');
    }else{
    btn.removeClass('active');
    }
  });
  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
    scrollTop: 0
    });
  });
});
/*-------------------------------------------
VANTA 3D動画
-------------------------------------------*/
VANTA.CLOUDS({
  el: "#header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  speed: 0.65
})
VANTA.NET({
  el: "#skills",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x25c841,
  backgroundColor: 0x0,
  maxDistance: 24.00,
  spacing: 14.00
})