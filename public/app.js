$(document).ready(function () {
  // When the page loades, we have to request '/api/todos'
  $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function (err) {
      console.log(res);
    })
});

function addTodos(todos) {
  // Add todos to the page
  todos.forEach(function (todo) {
    // Looping through todos and creating li items from names
    var newTodo = '<li class="task">' + todo.name + '</li>'
    if (newTodo.completed) {
      todo.addClass("done");
    }
    // Adding newly created lis to ul
    $('.list').append(newTodo);
  })
}