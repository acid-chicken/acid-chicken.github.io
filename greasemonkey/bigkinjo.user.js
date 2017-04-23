// ==UserScript==
// @name        BigKinjo
// @namespace   http://www.acid-chicken.com/greasemonkey
// @description アメちゃんを左下にピタッ！ご近所さんを真ん中にドーン！
// @include     https://mstdn.osaka/*
// @require     https://code.jquery.com/jquery-1.11.1.min.js
// @version     1.1
// @grant       none
// ==/UserScript==
$(document).on('ready page:load',() => {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    $('.column:eq(0)').hide(); // ウチを消すで
    $('.column:eq(1)').attr('id', 'candy'); // 通知欄をアメちゃんと命名すんで
    $('.column-icon-clear').css('top', '0'); // 消しゴムのズレを直すで
    $('.drawer').css('display', 'flex'); // 書き込み欄をflex配置にすんで
    $('.drawer__pager').css('flex', '0 0 237px'); // 書き込み欄が消えんのを防ぐで
    $('.ui').css({ // Wikimediaのパブリックライセンスの大阪城の写真を借りてくんで
      'background-image': 'url("//upload.wikimedia.org/wikipedia/commons/f/f6/Osaka_Castle_Sakura_April_2005.JPG")',
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
          'opacity': '.96' // 4%ほど透かすで
        });
        $('.column:eq(2)').css('flex', '2'); // 近所のサイズを2倍にすんで
      }
    }, 16);
  }
});
