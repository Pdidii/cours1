$( document ).ready(function() {
  alert('Bienvenue à vous tous');
  $("p").on( "click", function() {
          if ($(this).hasClass('red')){
          	$(this).removeClass('red');
          }else{
          $(this).addClass('red');
          }
      $(this).html("HELLOOOO")
          });
});