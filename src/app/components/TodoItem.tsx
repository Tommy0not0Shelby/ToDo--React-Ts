import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

function TodoItem({ todo, deleteTodo, toggleTodo }: TodoItemProps) {
  return (
    <div className={`flex items-center gap-2 p-3 mb-2 rounded transition-all duration-200 ${
      todo.completed 
        ? "bg-gray-800 border-l-4 border-green-500" 
        : "bg-gray-700 border-l-4 border-blue-500"
    }`}>
      <span className={`flex-1 text-base ${
        todo.completed 
          ? "completed-todo" 
          : "text-white"
      }`}>
        {todo.text}
      </span>
      <button 
        onClick={() => toggleTodo(todo.id)}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          todo.completed 
            ? "bg-yellow-600 hover:bg-yellow-700 text-white" 
            : "bg-green-600 hover:bg-green-700 text-white"
        }`}
      >
        {todo.completed ? "未完成" : "已完成"}
      </button>
      <button 
        onClick={() => deleteTodo(todo.id)}
        className="px-3 py-1 rounded text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
      >
        删除
      </button>
    </div>
  );
}

export default TodoItem;