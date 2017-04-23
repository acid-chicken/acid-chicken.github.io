// ==UserScript==
// @name        BigKinjo
// @namespace   http://www.acid-chicken.com/greasemonkey
// @description アメちゃんを左下にピタッ！ご近所さんを真ん中にドーン！
// @include     https://mstdn.osaka/*
// @require     https://code.jquery.com/jquery-1.11.1.min.js
// @version     1.3
// @grant       none
// ==/UserScript==
$(document).on('ready page:load',() => {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    $('.column:eq(0)').hide(); // ウチを消すで
    $('.column:eq(1)').attr('id', 'candy'); // 通知欄をアメちゃんと命名すんで
    $('.column-icon-clear').css('top', '0'); // 消しゴムのズレを直すで
    $('.drawer').css('display', 'flex'); // 書き込み欄をflex配置にすんで
    $('.drawer__pager').css('flex', '0 0 237px'); // 書き込み欄が消えんのを防ぐで
    $('.ui').css({
      'background-image': 'url(//mstdn.osaka/assets/background-photo-4d5afc27a5805bfb866b8f7f5067c66af99595cdc8dc46ece07fb5ff375cc3d5.png)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
    $('#candy').appendTo('.drawer'); // アメちゃんを書き込み欄に突っ込むで
    $('#candy').css({ // 突っ込むにあたっていろいろと設定すんで
      'flex': '1 1 auto',
      'height': '100%',
      'padding': '0',
      'margin-top': '10px',
      'width': 'initial'
    });
    setInterval(() => {
      if (window.matchMedia('(min-width: 1025px)').matches) { // ページを移動すると元に戻ってしまうのを防ぐで
        $('.columns-area').children().css({
          'flex': '1', // 全体をflexで伸びるようにすんで
          'opacity': '.8' // 20%ほど透かすで
        });
        $('.column:eq(2)').css('flex', '2'); // 近所のサイズを2倍にすんで
      }
    }, 16);
  }
});
