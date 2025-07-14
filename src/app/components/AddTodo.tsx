"use client" // 声明为客户端组件，才能使用 useState 等 Hook

import { useState } from 'react';

// 定义 AddTodo 组件的 props 类型，onAdd 是添加新待办事项的回调函数
interface AddTodoProps {
  onAdd: (text: string) => void; // 父组件传入的添加方法
}

// AddTodo 组件，负责输入和提交新待办事项
function AddTodo({ onAdd }: AddTodoProps) {
  // text：输入框内容，setText：更新输入框内容的方法
  const [text, setText] = useState('');

  // 表单提交事件处理函数
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); // 阻止表单默认提交行为（刷新页面）
    if (text.trim() === '') return; // 输入为空时不添加
    onAdd(text); // 调用父组件传入的添加方法
    setText(''); // 清空输入框
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {/* 输入框，受控组件 */}
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // 输入变化时更新 text
        placeholder="请输入待办事项"
        className="flex-1 px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      /> 
      {/* 提交按钮 */}
      <button 
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
      >
        新建事项
      </button>
    </form>
  );
}

export default AddTodo;