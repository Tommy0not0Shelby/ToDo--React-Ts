import { Todo } from "../types"; // Adjust path as needed
import TodoItem from "./TodoItem"; // <-- Import TodoItem

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

function TodoList({ todos, deleteTodo, toggleTodo }: TodoListProps) {
  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">暂无待办事项</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;