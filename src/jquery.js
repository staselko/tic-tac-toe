import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;
$('.begin-button').click(function(){
    $('.begin-button').replaceWith('<table><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>')
})
$