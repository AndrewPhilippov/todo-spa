$(document).ready(function () {
  // When the page loades, we have to request '/api/todos'
  $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function (err) {
      console.log(res);
    });


  $('#todo-input').keypress(function (event) {
    if (event.which == 13) {
      createTodo();
    }
  });

  $('.list').on('click', 'span', function () {
    removeTodo($(this).parent());
  });
});

function addTodos(todos) {
  // Add todos to the page
  todos.forEach(function (todo) {
    addTodo(todo);
  });
}


function addTodo(todo) {
  // Looping through todos and creating li items from names
  var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
  newTodo.data('id', todo._id);

  $('.list').append(newTodo);
  if (todo.completed) {
    newTodo.addClass('done');
  }
}

function createTodo() {
  var userInput = $('#todo-input').val();
  // Send request to create new Todo by sending post request to '/api/todos'
  $.post('/api/todos', {
      name: userInput
    })
    .then(function (newTodo) {
      $('#todo-input').val('');
      addTodo(newTodo);
    })
    .catch(function (err) {
      console.log(err);
    })
}

function removeTodo(todo) {
  var clickedId = todo.data('id');
  var deleteUrl = '/api/todos/' + clickedId;

  $.ajax({
      method: 'DELETE',
      url: deleteUrl
    })
    .then(function (data) {
      todo.remove();
    })
    .catch(function (err) {
      console.log(err);
    })
}