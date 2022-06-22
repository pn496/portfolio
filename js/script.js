/*-------------------------------------------
AOS animation (Skills)
-------------------------------------------*/
AOS.init({
  duration: 1000
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
  color: 0xff,
  backgroundColor: 0x0,
  points: 12.00,
  maxDistance: 27.00,
  spacing: 16.00
})
/*-------------------------------------------
ダークモード手動切り替え
-------------------------------------------*/
const btn_dm = document.querySelector("#modeChange");
 
// チェックした時の挙動
btn_dm.addEventListener("change", () => {
  if (btn_dm.checked == true) {
    // ダークモード
    document.body.classList.remove("lightTheme");
    document.body.classList.add("darkTheme");
  } else {
    // ライトモード
    document.body.classList.remove("darkTheme");
    document.body.classList.add("lightTheme");
  }
});