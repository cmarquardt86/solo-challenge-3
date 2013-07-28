// Bind functions which add, remove, and complete todos to the appropriate
  // elements
function bindEvents() {
   
    $('.add').on('click', function () {
      addTodo();
    });

    $('.todo_list').on('click', '.delete', function (event) {
      deleteTodo(event);
    });

    $('.todo_list').on('click', '.complete', function (event) {
      completeTodo(event);
    });
}

//Create functions to add, remove and complete todos

function addTodo() {
  buildTodo($('.todo').val()).appendTo('.todo_list');
  $('.toolbox .todo').val('');
}

function completeTodo(event) {
  $(event.target).closest('.todo').addClass("complete");
} 

function deleteTodo(event) {
  $(event.target).closest('.todo').remove();
} 


function buildTodo(todoName) {
  // Creates an jQueryDOMElement from the todoTemplate.
  var $todo = $('#todo_template .todo').clone().show();

    
  // Modifies it's text to use the passed in todoName.
  $todo.find('h2').text(todoName);
  // Returns the jQueryDOMElement to be used elsewhere.
  return $todo;
}

$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  bindEvents();
});

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
































