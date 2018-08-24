//Hover function for program
$(document).ready(function(){
  $("#p").click(function(){
      $("#p").fadeOut();
      $("#p-fade").fadeOut();
  });

  $( "button-test" ).click(function() {
    $( "p-test" ).toggle( "slow" );
  });

});