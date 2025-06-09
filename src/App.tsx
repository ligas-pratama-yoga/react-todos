import { useState } from "react"
import Todo from "./components/todo"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Make a coffe",
      completed: false,
    },
    {
      id: 2,
      text: "Build amazing project",
      completed: false,
    },
    {
      id: 3,
      text: "Commit to github",
      completed: false,
    },
  ])

  const [title, setTitle] = useState("")

  const addTodos = (e) => {
    e.preventDefault()
    if(!title) return
    const newTodos = [...todos, { id: todos.length + 1, text: title, completed: false }]
    setTodos(newTodos)
    setTitle("")
  }

  const toggleStatus = index => {
    const newTodos = [...todos]
    newTodos[index].completed = !(newTodos[index].completed)
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <main className="font-poppins h-screen flex justify-center items-center">
        <div className="w-[60%] max-h-[70%] py-2">
          <span className="
                            text-slate-500
                            text-2xl
                            ">Todo List</span>
          <div >
            <form className="flex gap-4" onSubmit={addTodos}>
              <input className="
                              w-60
                              focus-within:outline-none
                              focus-within:ring-none
                              focus-within:border-slate-600
                              border-slate-400 border-b
                              "
                type="text"
                placeholder="New task"
                value={title}
                onChange={e => setTitle(e.target.value)}/>
              <button type="submit" className="flex-1 text-2xl text-white bg-black px-2 rounded">+</button>
            </form>
          </div>
          <div className="w-full  overflow-x-hidden overflow-y-scroll">
            <ul className="bg-transparent  overflow-x-hidden overflow-y-scroll">
              {todos.map((e, i) => (
                <Todo index={i} removeTodo={removeTodo} toggleStatus={toggleStatus} isCompleted={e.completed} key={e.id}>{e.text}</Todo>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
