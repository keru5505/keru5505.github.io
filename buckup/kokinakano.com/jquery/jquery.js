// headerの固定
$(function () {
  var $body = $('body'),
      $navTypeA = $('.header-nav'),
      navTypeAOffsetTop = $navTypeA.offset().top;
  
  $(window).on('scroll', function () {
    if($(this).scrollTop() > navTypeAOffsetTop) {
      $body.addClass('is-fixed');
    } else {
      $body.removeClass('is-fixed');
    }
  });
});

// マウスオンでメニューが反応

$(function(){
 $(window).on('scroll' , function(){
  $('.header-pc-menu li a').each(function() {
   var $window = $(window);
   var $this = $(this);
   var linkTo =  $this.attr('href'); 
   var $target = $(linkTo);
   var topLimit= $target.offset().top;
   var bottomLimit = $target.offset().top + $target.outerHeight();
   if(topLimit - 5 < $window.scrollTop() && $window.scrollTop() < bottomLimit - 5){
    $this.addClass('now');
   }else{
    $this.removeClass('now');
   }
  });
 });
});



// ハンバーガーメニューのスイッチ

$(document).ready(function($){
  $('.menu-icon').on('click',function(){
    $('.menu-bars').toggle();
  });
});



// 日仏英のきりかえ

$(function() {
    $('.try-en').on('click', function (){
      showLanguage('en');  // 英語を表示
    });
    $('.try-jp').on('click', function (){
      showLanguage('jp');  // 英語を表示
    });
    $('.try-fr').on('click', function (){
      showLanguage('fr');  // フランス語を表示
    });
    showLanguage('en');
});
      // デフォルトで英語を表示


// 言語切り替え
function showLanguage(lang) {
    var langSet = ["jp", "en", "fr"];     // 切り替え対象の locale リスト
    for (var i = 0, len = langSet.length; i < len; i++) {
        if (lang === langSet[i]) {
            $('.' + langSet[i]).show();
        } else {
            $('.' + langSet[i]).hide();
        }
    } 
  } 

$("document").ready(function() {
    $("#theTarget").skippr();
});
 
// オプションを指定してSkipperの実行
$("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : false,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 5000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false,
 });


// スムーススクロール

$(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^=#]').click(function() {
          // スクロールの速度
          var speed = 400; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });


