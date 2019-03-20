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

  $('.list').on('click', 'li', function () {
    updateTodo($(this));
  });

  $('.list').on('click', 'span', function (event) {
    event.stopPropagation();
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
  newTodo.data('completed', todo.completed);
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

function updateTodo(todo) {
  var updateUrl = '/api/todos/' + todo.data('id');
  var isDone = !todo.data('completed');
  var updateData = {
    completed: isDone
  };
  console.log(updateData);
  $.ajax({
      method: 'PUT',
      url: updateUrl,
      data: updateData
    })
    .then(function (updatedTodo) {
      todo.toggleClass('done');
      todo.data('completed', isDone)
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