import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import { Task, useGetTasksQuery } from "@/app/state/api";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: Props) => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        Loading tasks...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-40 text-red-500">
        Error fetching tasks.
      </div>
    );

  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="Task List"
          buttonComponent={
            <button
              className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition duration-200"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              <PlusIcon className="h-4 w-4" />
              Add Task
            </button>
          }
          isSmallText
        />
      </div>

      {!tasks || tasks.length === 0 ? (
        <div className="mt-8 text-center text-gray-500">
          No tasks found. Start by creating a new task.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListView;