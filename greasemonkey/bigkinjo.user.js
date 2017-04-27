// ==UserScript==
// @name        BigKinjo
// @namespace   http://www.acid-chicken.com/greasemonkey
// @description アメちゃんを左下にピタッ！ご近所さんを真ん中にドーン！
// @include     https://mstdn.osaka/*
// @require     https://code.jquery.com/jquery-1.11.1.min.js
// @version     1.5
// @grant       none
// ==/UserScript==
const home = '<a class="drawer__tab" href="javascript:Home()" title="ウチの表示切り替え"><i class="fa fa-fw fa-home"></i></a>';
const script = '<script>function Home(){$(\'#home\').toggle(\'slow\')}</script>';
$(document).on('ready page:load',() => {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    $('body').append(script); // ウチのスクリプトを追加すんで
    $('.column:eq(0)').attr('id', 'home'); // ウチ欄をウチと命名すんで
    $('.column:eq(1)').attr('id', 'candy'); // 通知欄をアメちゃんと命名すんで
    $('.column-icon-clear').css('top', '0'); // 消しゴムのズレを直すで
    $('.drawer').css('display', 'flex'); // 書き込み欄をflex配置にすんで
    $('.drawer__pager').css('flex', '0 0 237px'); // 書き込み欄が消えんのを防ぐで
    $('.drawer__tab:eq(2)').after(home); // 書き込み欄のタブ上の四番目にウチボタンを追加すんで
    $('#candy').appendTo('.drawer'); // アメちゃんを書き込み欄に突っ込むで
    $('#candy').css({ // 突っ込むにあたっていろいろと設定すんで
      'flex': '1 1 auto',
      'height': '100%',
      'padding': '0',
      'margin-top': '10px',
      'width': 'initial'
    });
    $('#home').hide(); // ウチを消すで
    setInterval(() => {
      if (window.matchMedia('(min-width: 1025px)').matches) { // ページを移動すると元に戻ってしまうのを防ぐで
        $('.columns-area').children().css('flex', '1'); // 全体をflexで伸びるようにすんで
        if ($('#home').css('display') === 'none') $('.column:eq(2)').css('flex', '3'); // ウチがなかったら近所のサイズを3倍にすんで
        else $('.column:eq(2)').css('flex', '2'); // ウチがあったらやっぱり2倍にすんで
      }
    }, 16);
  }
});
