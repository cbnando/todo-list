const authVerify = require('../middleware/authVerify')

module.exports = app => {

    const router = require('express').Router()

    const Auth = require('../middleware/authVerify')

    const appHandler = require('../handler/app.handler')
    const userHandler = require('../handler/user.handler')

    //Endpoint para criar tarefda
    router.post('/task', Auth, appHandler.createTask)

    //Endpont para listar tarefas
    router.get('/tasks', Auth, appHandler.listAllTasks)

    //Endpoint para listar detalhes de uma tarefa
    router.get('/task/:id', Auth, appHandler.taskDetails)

    //Endpoint para atualizar status de uma tarefa
    router.put('/task/:id', Auth, appHandler.updateTaskStatus)

    //Endpoint para excluir uma tarefa
    router.delete('/task/:id', Auth, appHandler.deleteTask)


    //Rotas de usuário
    router.post('/signup', userHandler.signUp)

    router.post('/signin', userHandler.signIn)

    app.use('/api', router)
}