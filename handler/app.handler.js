exports.createTask = (request, response) => {
    const data = request.body
    
    return response.json(data)
}

exports.listAllTasks = (request, response) => {
    return response.json({message: 'Lista todas as tarefas'})
}

exports.taskDetails = (request, response) => {
    const id = request.params.id;

    return response.json({message: `Retornando dados da tarefa ${id}`})
}

exports.updateTaskStatus = (request, response) => {
    const id = request.params.id

    return response.json({message: `Atualizando dados da tarefa ${id}`})
}

exports.deleteTask = (request, response) => {
    const id = request.params.id;

    return response.json({message: `Excluindo tarefa ${id}`})
}