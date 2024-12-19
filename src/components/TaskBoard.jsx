import React from "react";

const TaskBoard = () => {
  const categories = ["To Do", "In Progress", "Done"];
  return (
    <div className="task-board-container flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Task Management Board</h1>
      <div className="task-columns grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="task-column bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <div className="task-list space-y-2">
              {/* Placeholder tasks */}
              <div className="task bg-white p-2 rounded shadow">Task 1</div>
              <div className="task bg-white p-2 rounded shadow">Task 2</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
