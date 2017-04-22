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
    $('.columns-area').children().css({
      'flex': '1',
      'opacity': '.96'
    });
    $('.column:eq(0)').hide();
    $('.column:eq(1)').attr('id', 'candy');
    $('.column-icon-clear').css('top', '0');
    $('.drawer').css('display', 'flex');
    $('.drawer__pager').css('flex', '0 0 237px');
    $('.ui').css({
      'background-image': 'url("//upload.wikimedia.org/wikipedia/commons/f/f6/Osaka_Castle_Sakura_April_2005.JPG")',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
    $('#candy').appendTo('.drawer');
    $('#candy').css({
      'flex': '1 1 auto',
      'height': '100%',
      'padding': '0',
      'margin-top': '10px',
      'width': 'initial'
    });
    setInterval(() => {
      if (window.matchMedia('(min-width: 1025px)').matches) {
        $('.column:eq(2)').css('flex', '2');
      }
    }, 16);
  }
});
