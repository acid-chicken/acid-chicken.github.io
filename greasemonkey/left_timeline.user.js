// ==UserScript==
// @name        Left Timeline
// @namespace   http://www.acid-chicken.com/greasemonkey
// @include     *
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==
$(function () {
  $('.column:eq(2)').insertBefore('.column:eq(0)');
});
