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
// 要素ら

var $document = $(document);
var $skills = $('#skills');
var $eventname = $('#eventname');
var $x = $('#x');
var $y = $('#y');

// タッチイベントが利用可能かの判別

var supportTouch = 'ontouchend' in document;

// イベント名

var EVENTNAME_TOUCHSTART = supportTouch ? 'touchstart' : 'mousedown';
var EVENTNAME_TOUCHMOVE = supportTouch ? 'touchmove' : 'mousemove';
var EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

// 表示をアップデートする関数群

var updateXY = function(event) {
  // jQueryのイベントはオリジナルのイベントをラップしたもの。
  // changedTouchesが欲しいので、オリジナルのイベントオブジェクトを取得
  var original = event.originalEvent;
  var x, y;
  if(original.changedTouches) {
    x = original.changedTouches[0].pageX;
    y = original.changedTouches[0].pageY;
  } else {
    x = event.pageX;
    y = event.pageY;
  }
  $x.text(x);
  $y.text(y);
};
var updateEventname = function(eventname) {
  $eventname.text(eventname);
};

// イベント設定

var handleStart = function(event) {
  updateEventname(EVENTNAME_TOUCHSTART);
  updateXY(event);
  $skills.css('background', 'radial-gradient(#20AAD8, #402C86)');
  bindMoveAndEnd();
};
var handleMove = function(event) {
  event.preventDefault(); // タッチによる画面スクロールを止める
  updateEventname(EVENTNAME_TOUCHMOVE);
  updateXY(event);
};
var handleEnd = function(event) {
  updateEventname(EVENTNAME_TOUCHEND);
  updateXY(event);
  $skills.css('background', 'rgb(70, 70, 76, .2');
  unbindMoveAndEnd();
};
var bindMoveAndEnd = function() {
  $document.on(EVENTNAME_TOUCHMOVE, handleMove);
  $document.on(EVENTNAME_TOUCHEND, handleEnd);
};
var unbindMoveAndEnd = function() {
  $document.off(EVENTNAME_TOUCHMOVE, handleMove);
  $document.off(EVENTNAME_TOUCHEND, handleEnd);
};

$skills.on(EVENTNAME_TOUCHSTART, handleStart);