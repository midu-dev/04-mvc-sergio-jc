// importar modelo
import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.getAllTasks()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const addTask = async (req, res) => {
  try {
    const { description } = req.body
    const task = await TaskModel.addTask({ description })
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    await TaskModel.deleteTask({ id })
    res.json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
