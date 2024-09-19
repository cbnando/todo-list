module.exports = app => {

    const router = require('express').Router()

    //Endpoint para criar tarefda
    app.post('/task', (request, response) => {
            const data = request.body
            return response.json(data)
        })

    //Endpont para listar tarefas
    app.get('/tasks', (request, response) => {
            return response.json({ message: 'lista todoas as tarefas' })
        })

    //Endpoint para listar detalhes de uma tarefa
    app.get('/task/:id', (request, response) => {
            const id = request.params.id

            return response.json({ message: `Retornando dados da tarefa ${id}` })
        })

    //Endpoint para atualizar status de uma tarefa
    app.put('/task/:id', (request, response) => {
            const id = request.params.id;

            return response.json({ message: `Atualizando dados da tarefa ${id}` })
        })

    //Endpoint para excluir uma tarefa
    app.delete('/task/:id', (request, response) => {
            const id = request.params.id;

            return response.json({ message: `Excluindo tarefa ${id}` })
        })

    app.use('/api', router)
}