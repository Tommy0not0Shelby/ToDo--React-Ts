# 📋 Todo List - React + TypeScript + Next.js

这是一个使用 **React + TypeScript + Next.js** 开发的现代化待办事项应用，具有完整的增删改查功能和优雅的用户界面。

## 🎯 项目概述

本项目是一个功能完整的待办事项管理应用，展示了现代 React 开发的最佳实践，包括组件化开发、状态管理、TypeScript 类型安全等核心概念。

## 🏗️ 技术栈

- **Next.js 15.3.5**: React 框架，提供服务端渲染和路由功能
- **TypeScript**: 提供类型安全和更好的开发体验
- **React Hooks**: 使用 `useState` 进行状态管理
- **Tailwind CSS**: 用于快速构建响应式UI

## 📁 项目结构

```
src/
├── app/
│   ├── components/          # 组件目录
│   │   ├── AddTodo.tsx     # 添加任务组件
│   │   ├── TodoFilter.tsx  # 筛选组件
│   │   ├── TodoItem.tsx    # 单个任务项组件
│   │   └── TodoList.tsx    # 任务列表组件
│   ├── globals.css         # 全局样式
│   ├── page.tsx            # 主页面
│   └── types.ts            # 类型定义
```

## 🚀 开始使用

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## ✨ 主要功能

- ✅ **添加任务**: 输入内容后点击"新建事项"按钮，可以添加新的待办事项
- ✅ **切换任务状态**: 可以将任务标记为"已完成"或"未完成"
- ✅ **删除任务**: 可以删除不需要的任务
- ✅ **筛选任务**: 可以按"全部"、"未完成"、"已完成"状态筛选任务
- ✅ **横线划掉效果**: 已完成的任务会显示红色横线划掉效果

## 🧩 核心组件详解

### 1. **数据类型定义** (`types.ts`)

```typescript
export interface Todo {
  id: number;      // 唯一标识符
  text: string;    // 任务内容
  completed: boolean; // 完成状态
}
```

### 2. **主页面** (`page.tsx`)

**核心状态管理**：
- `todos`: 存储所有待办事项
- `filter`: 控制显示哪些任务（全部/未完成/已完成）

**主要功能函数**：
- `handleAddTodo`: 添加新任务
- `toggleTodo`: 切换任务完成状态
- `deleteTodo`: 删除任务
- `getFilteredTodos`: 根据筛选条件返回任务列表

### 3. **添加任务组件** (`AddTodo.tsx`)

**关键特性**：
- 受控组件：输入框值由 React 状态控制
- 表单验证：防止添加空任务
- 提交后自动清空输入框

**工作流程**：
1. 用户输入任务内容
2. 点击"新建事项"或按回车键
3. 验证输入不为空
4. 调用父组件的 `onAdd` 方法
5. 清空输入框

### 4. **任务项组件** (`TodoItem.tsx`)

**视觉特性**：
- 动态样式：根据完成状态改变背景色和边框
- 横线划掉：已完成任务显示红色删除线
- 按钮状态：根据完成状态显示不同的按钮文本和颜色

**交互功能**：
- 点击"已完成"/"未完成"按钮切换状态
- 点击"删除"按钮移除任务

### 5. **任务列表组件** (`TodoList.tsx`)

**功能**：
- 渲染任务列表
- 空状态处理：无任务时显示提示信息
- 将操作方法传递给子组件

### 6. **筛选组件** (`TodoFilter.tsx`)

**筛选选项**：
- 全部：显示所有任务
- 未完成：只显示未完成的任务
- 已完成：只显示已完成的任务

## 🎨 样式设计

### 主题色彩：
- **背景**：深色主题 (`bg-black`, `bg-gray-900`)
- **任务项**：灰色渐变 (`bg-gray-700`, `bg-gray-800`)
- **强调色**：蓝色（新建）、绿色（完成）、黄色（取消完成）、红色（删除）

### 特殊效果：
- **横线划掉**：自定义 CSS 类 `.completed-todo`
- **过渡动画**：所有交互都有平滑的颜色过渡
- **响应式设计**：适配不同屏幕尺寸

## 🔄 数据流向

```
用户操作 → 事件处理函数 → 状态更新 → 组件重新渲染 → UI更新
```

**举例 - 添加任务**：
1. 用户在 `AddTodo` 组件输入文本
2. 点击"新建事项"触发 `handleSubmit`
3. 调用 `onAdd(text)` 传递给父组件
4. 父组件的 `handleAddTodo` 更新 `todos` 状态
5. `TodoList` 组件重新渲染，显示新任务

## 🚀 核心特性

### ✅ 完整的 CRUD 操作
- **Create**: 添加新任务
- **Read**: 显示任务列表
- **Update**: 切换完成状态
- **Delete**: 删除任务

### ✅ 状态管理
- 使用 React Hooks 进行本地状态管理
- 状态提升：将共享状态放在父组件中

### ✅ 类型安全
- TypeScript 接口定义
- 组件 Props 类型检查
- 事件处理函数类型定义

### ✅ 用户体验
- 即时反馈：操作后立即看到结果
- 视觉层次：不同状态用不同颜色区分
- 空状态处理：无任务时显示友好提示

## 🎯 学习价值

这个项目是学习现代 React 开发的绝佳示例，涵盖了：

1. **组件化开发**：合理的组件拆分和组合
2. **状态管理**：React Hooks 的实际应用
3. **TypeScript**：类型定义和接口设计
4. **现代CSS**：Tailwind CSS 的使用
5. **用户交互**：表单处理和事件管理
6. **代码组织**：清晰的文件结构和命名规范

## 📚 了解更多

想要学习更多关于 Next.js 的知识，可以查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 的功能和 API
- [学习 Next.js](https://nextjs.org/learn) - 交互式 Next.js 教程

## 🚀 部署

推荐使用 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 来部署你的 Next.js 应用。

查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 获取更多详细信息。

---

**这个项目展示了如何构建一个功能完整、代码清晰、用户友好的现代 Web 应用程序！** 🎉
