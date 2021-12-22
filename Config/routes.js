const TodoController = require('../Controllers/TodoController')

function routes(app) {
    app.get('/todos', TodoController.getAllTodos)

    app.get('/todos/completed', TodoController.getCompletedTodos)

    app.get('/todos/uncompleted', TodoController.getUncompletedTodos)

    app.post('/todos', TodoController.addTodo)

    app.put('/todos/:id', TodoController.markAsCompleted)

    app.put('/todos/:id/mark-as-uncompleted', TodoController.markAsUncompleted)

    app.delete('/todos/:id', TodoController.deleteTodo)
}

module.exports = routes