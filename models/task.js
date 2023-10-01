/**
 * Array to store tasks.
 * @type {Array<Object>}
 */
const tasks = []

/**
 * ID for the next task. Increments each time a new task is added.
 * @type {number}
 */
let currentId = 1

/**
 * Model class representing a task.
 * @class
 */

export class TaskModel {
  /**
   * Fetches all tasks.
   * @name TaskModel.getAllTasks
   * @static
   * @returns {Array<Object>} Array of tasks.
   */
  static async getAllTasks () {
    return tasks
  }

  /**
   * Adds a new task to the list.
   * @name TaskModel.addTask
   * @static
   * @param {string} description - The description of the task.
   * @returns {Object} The new task object.
   */
  static async addTask ({ description }) {
    const newTask = {
      id: currentId,
      description
    }
    tasks.push(newTask)
    ++currentId
    return newTask
  }

  /**
   * Deletes a task from the list by its ID.
   * @name TaskModel.deleteTask
   * @static
   * @param {number} id - The ID of the task to delete.
   */
  static async deleteTask ({ id }) {
    const taskIndex = tasks.findIndex((task) => {
      const parsedId = task.id.toString()
      return parsedId === id
    })
    if (taskIndex === -1) return
    tasks.splice(taskIndex, 1)
    return id
  }
}

/*
 @midudev Hola midu espero hayas tenido un buen viaje y la hayas pasado genial en Argentina 🇦🇷❤️,
 gracias a que revise el código de mis compañeros encontre esto en el código de @madeval 💜:

 export class TaskNotFoundError extends Error {
    constructor(message) {
      super(message)
      this.name = 'TaskNotFoundError'
    }
  }

 y me recorde que hace tiempo enseñaste como podemos crear nuestros propios errores y manejarlos,
 y mencionaste que es bueno manejar los errores en cada modelo y al ver esto me pregunte si seria buena
 idea si usamos estos "custom errors" junto con un trycatch en cada controlador, algo como esto:

 `res.status(error.status || 500).json({ message: error.message })")`

 Con el fin de que automaticamente al lanzar el error tome tanto el mensaje como el status del
 "custom error", seria bueno idea hacer esto o seria malo tener un trycatch todo poderoso ?
 Hay mejores formas de controlar errores y si lo hay cuales serian ? Como se pueden aprovechar estos
 "custom errors" en express ?

 Gracias por todo midu, te deseo un excelente día !! ✨
*/
