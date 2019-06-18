$( document ).ready(function() {
  alert('Bienvenue à tous');
  $("p").on( "click", function() {
          if ($("p").hasClass('red')){
          	$("p").removeClass('red');
          }else{
          $("p").addClass('red');
          }
          })
});