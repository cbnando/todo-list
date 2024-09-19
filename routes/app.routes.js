module.exports = app => {

    const router = require('express').Router()

    const appHandler = require('../handler/app.handler')

    //Endpoint para criar tarefda
    router.post('/task', appHandler.createTask)

    //Endpont para listar tarefas
    router.get('/tasks', appHandler.listAllTasks)

    //Endpoint para listar detalhes de uma tarefa
    router.get('/task/:id', appHandler.taskDetails)

    //Endpoint para atualizar status de uma tarefa
    router.put('/task/:id', appHandler.updateTaskStatus)

    //Endpoint para excluir uma tarefa
    router.delete('/task/:id', appHandler.deleteTask)

    app.use('/api', router)
}