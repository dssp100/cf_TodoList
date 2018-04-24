// Wait for documnet to load
$(document).ready(() => {

  // select the li and mark of when done
  $('ul').on('click', 'li', function() {
    $(this).toggleClass('completed')
  });

  // Remove the item by clicking on the span and fading out.
  $('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove()
    });
    event.stopPropagation()
  });

  // Create a new item
  $("input[type='text']").keypress( function(event){
    if(event.which === 13){
      // Getting new todo from input
      var newTodo = $(this).val();
      // Add new todo to ul
      $('ul').append("<li><span><i class='fa fa-trash'></i> </span>"+ newTodo +"</li>")
      
      // Clear inputs field
      $(this).val('')

      }

    });

    //Toggle hide form
    $('.fa-plus-circle').on('click', function(){
      $("input").fadeToggle();
    });
});
