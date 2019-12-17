import $ from "jquery";


$(".begin-button").click(function() {
  $(".begin-button").replaceWith(
    '<table><tr><td class="item1"></td><td class="item2"></td><td class="item3"></td></tr><tr ><td class="item4"></td><td class="item5"></td><td class="item6"></td></tr><tr><td class="item7"></td><td class="item8"></td><td class="item9"></td></tr></table>'
  );
});
$(".item2").click(function(){
    $(".item2").append("<div >Х</div>");
})