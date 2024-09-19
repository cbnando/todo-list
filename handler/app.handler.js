const { where } = require('sequelize')
const { Task } = require('../models/index')

exports.createTask = async (request, response) => {
    const data = request.body

    const newTask = await Task.create(data)

    return response.json(data)
}

exports.listAllTasks = async (request, response) => {

    const tasksList = await Task.findAll()

    return response.json(tasksList)
}

exports.taskDetails = async (request, response) => {

    const id = request.params.id;

    const taskDetailsById = await Task.findOne({ where: {id} })

    return response.json(taskDetailsById)
}

exports.updateTaskStatus = async (request, response) => {

    const id = request.params.id

    const taskData = request.body

    const updateTaskStatusById = await Task.update(taskData, {where: {id} })

    return response.json({message: `Atualizando dados da tarefa ${id}`})
}

exports.deleteTask = async (request, response) => {

    const id = request.params.id;

    const deleteTaskById = await Task.destroy({where: {id} })

    return response.json({message: `Excluindo tarefa ${id}`})
}