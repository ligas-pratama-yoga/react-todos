const Todo = ({index, toggleStatus, removeTodo, isCompleted, children}) => {
  return (
    <li className="border-b my-2 py-2 flex items-center gap-2">
      <input className="accent-black" type="checkbox" checked={isCompleted} onChange={() => toggleStatus(index)} />
      <span className={`${isCompleted ? "line-through" : ""} text-md text-slate-500`}>{children}</span>
      <button className="px-[.65rem] rounded border border-red-400 text-red-600 ml-auto text-xl" type="button" onClick={() => removeTodo(index)}>-</button>
    </li>
  )
}

export default Todo
