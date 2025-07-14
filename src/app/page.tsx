"use client";

import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { Todo } from "./types";

// Home 组件，作为应用的主页面
export default function Home() {
  // todos：任务列表状态，setTodos：更新任务列表的方法
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // 添加新任务
  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: Date.now(), // 使用当前时间戳作为唯一ID
      text,           // 任务内容
      completed: false, // 新任务默认未完成
    }
    setTodos([...todos, newTodo]) // 更新任务列表
  }

  // 切换任务完成状态
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 删除任务
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // 根据状态筛选任务
  const filterTodos = (status: "all" | "active" | "completed") => {
    if (status === "all") return todos; // 全部
    return todos.filter(todo => 
      status === "active" ? !todo.completed : todo.completed // 未完成/已完成
    );
  };
  
  const filteredTodos = filterTodos("all"); // 默认显示全部任务
  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter(todo => !todo.completed); // 未完成任务
      case "completed":
        return todos.filter(todo => todo.completed); // 已完成任务
      default:
        return todos;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded shadow mx-auto">
        {/* 标题 */}
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Todo List</h1>
        {/* 添加任务组件，需传递 addTodo 方法 */}
        <div className="flex gap-2 mb-4">
          <AddTodo onAdd={handleAddTodo} />
        </div>
        {/* 任务筛选组件 */}
        <div className="flex gap-2 mb-4 justify-center">
          <TodoFilter setFilter={setFilter}/>
        </div>
        {/* 任务列表组件，传递任务、删除和切换方法 */}
        <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}