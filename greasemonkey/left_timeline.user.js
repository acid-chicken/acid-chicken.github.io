// ==UserScript==
// @name        Left Timeline
// @namespace   http://www.acid-chicken.com/greasemonkey
// @include     *
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==
$(() => {
  $('.column:eq(0)').attr('id', 'left_timeline_to');
  setInterval(() => {
    if(!($('#left_timeline_from').length)) {
      $('.column:eq(2)').attr('id', 'left_timeline_from');
      $('#left_timeline_from').insertBefore('#left_timeline_to')
    }
  }, 16);
});
