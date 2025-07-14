import { Dispatch, SetStateAction } from "react";

interface TodoFilterProps {
  setFilter: Dispatch<SetStateAction<"all" | "active" | "completed">>;
}

function TodoFilter({ setFilter }: TodoFilterProps) {
  return (
    <div className="flex gap-2 justify-center">
      <button 
        onClick={() => setFilter("all")}
        className="px-3 py-1 rounded text-sm bg-gray-600 hover:bg-gray-500 text-white transition-colors"
      >
        全部
      </button>
      <button 
        onClick={() => setFilter("active")}
        className="px-3 py-1 rounded text-sm bg-gray-600 hover:bg-gray-500 text-white transition-colors"
      >
        未完成
      </button>
      <button 
        onClick={() => setFilter("completed")}
        className="px-3 py-1 rounded text-sm bg-gray-600 hover:bg-gray-500 text-white transition-colors"
      >
        已完成
      </button>
    </div>
  );
}
export default TodoFilter;